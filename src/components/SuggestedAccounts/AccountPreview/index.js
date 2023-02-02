import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const AccountPreview = () => {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <Image
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1675432800&x-signature=%2BRB9kct0vUYr25MlyGiuXREA7xI%3D"
          alt=""
        />
        <div>
          <Button className={cx('follow-btn')} primary>
            Follow
          </Button>
        </div>
      </header>
      <section>
        <div className={cx('body')}>
          <div className={cx('nickname')}>
            <h4>theanh28entertainment</h4>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          </div>
          <p className={cx('name')}>Theanh28 Entertainment</p>
          <p className={cx('analytics')}>
            <strong className={cx('value')}>8.5M </strong>
            <span className={cx('label')}>Followers</span>
            <strong className={cx('value')}>669.2M </strong>
            <span className={cx('label')}>Likes</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AccountPreview;
