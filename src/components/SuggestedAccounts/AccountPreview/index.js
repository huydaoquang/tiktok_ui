import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const AccountPreview = ({ data }) => {
  return (
    <div className={cx('wrapper')} key={data.id}>
      <header className={cx('header')}>
        <Image className={cx('avatar')} src={data.avatar} alt="" />
        <div>
          <Button className={cx('follow-btn')} primary>
            Follow
          </Button>
        </div>
      </header>
      <section>
        <div className={cx('body')}>
          <div className={cx('nickname')}>
            <h4>{data.nickname}</h4>
            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
          </div>
          <p className={cx('name')}>{data.full_name}</p>
          <p className={cx('analytics')}>
            <strong className={cx('value')}>{data.followers_count} </strong>
            <span className={cx('label')}>Followers</span>
            <strong className={cx('value')}>{data.likes_count} </strong>
            <span className={cx('label')}>Likes</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AccountPreview;
