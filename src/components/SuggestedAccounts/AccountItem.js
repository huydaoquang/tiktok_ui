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

const cx = classNames.bind(styles);

const AccountItem = () => {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <div className={cx('preview')}>
            <AccountPreview />
          </div>
        </PopperWrapper>
      </div>
    );
  };

  return (
    // warning tippy.js
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <Tippy interactive delay={[300, 300]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <Image
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1675432800&x-signature=%2BRB9kct0vUYr25MlyGiuXREA7xI%3D"
            alt=""
          />
          <div className={cx('item-info')}>
            <div className={cx('nickname')}>
              <h4>theanh28entertainment</h4>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </div>
            <p className={cx('name')}>Theanh28 Entertainment</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
};
// AccountItem.propTypes = {};
export default AccountItem;
