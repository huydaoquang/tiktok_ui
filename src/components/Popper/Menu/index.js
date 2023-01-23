import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <div>
      <Tippy
        delay={[0, 300]}
        interactive
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
};

export default Menu;
