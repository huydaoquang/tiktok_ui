import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

const Menu = ({ children, items = [], onChange = defaultFn, hideOnclick = false }) => {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <div>
      <Tippy
        hideOnClick={hideOnclick}
        delay={[0, 200]}
        interactive
        offset={[16, 16]}
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
              {history.length > 1 && (
                <Header
                  title={current.title}
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
                />
              )}
              <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
          </div>
        )}
        onHidden={() => setHistory((prev) => prev.slice(0, 1))}
      >
        {children}
      </Tippy>
    </div>
  );
};
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
  hideOnclick: PropTypes.bool,
};
export default Menu;
