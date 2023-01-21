import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ee9a80ff2618f3d77bcdeb5d169e25dd~c5_100x100.jpeg?x-expires=1674482400&x-signature=U4%2BJaZb0w0dRzCzBkdaQOj9ftc0%3D"
        alt=""
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>NguyenVanA</span>
      </div>
    </div>
  );
};

export default AccountItem;
