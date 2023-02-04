import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
import Image from '../Image';
import { data } from '~/data';

const cx = classNames.bind(styles);

const AccountItem = () => {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          {data.map((item, index) => (
            <div className={cx('preview')} key={index}>
              <AccountPreview data={item} />
            </div>
          ))}
        </PopperWrapper>
      </div>
    );
  };

  return (
    // warning tippy.js
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <>
      {data.map((item, index) => (
        <div key={index}>
          <Tippy visible={false} delay={[300, 300]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
              <Image className={cx('avatar')} src={item.avatar} alt="" />
              <div className={cx('item-info')}>
                <div className={cx('nickname')}>
                  <h4>{item.nickname}</h4>
                  {item.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
                <p className={cx('name')}>{item.full_name}</p>
              </div>
            </div>
          </Tippy>
        </div>
      ))}
    </>
  );
};
// AccountItem.propTypes = {};
export default AccountItem;
