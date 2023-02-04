import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHeart, faShare, faCommentDots } from '@fortawesome/free-solid-svg-icons';

import styles from './VideoAccount.module.scss';
// import audio from '~/assets/audio';
import Line from '../Line';
import Image from '../Image';
import Button from '../Button';
import { data } from '~/data';

const cx = classNames.bind(styles);

const VideoAccount = () => {
  return (
    <>
      {data.map((item, index) => (
        <div className={cx('wrapper')} key={index}>
          <div className={cx('header')}>
            <div className={cx('account-item')}>
              <Image className={cx('avatar')} src={item.avatar} alt="" />
              <div className={cx('container-info')}>
                <div className={cx('item-info')}>
                  <div className={cx('nickname')}>
                    <h4>{item.nickname}</h4>
                    {item.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                  </div>
                  <p className={cx('name')}>{item.full_name}</p>
                </div>
                <div className={cx('title-account')}>
                  <p>{item.bio}</p>
                </div>
              </div>
            </div>
            <Button className={cx('follow-btn')} outline>
              Follow
            </Button>
          </div>
          <div className={cx('body')}>
            <video className={cx('video-item')} src={item.video_account} type="video/mp4" controls></video>
            <div className={cx('list-icon')}>
              <div className={cx('item')}>
                <div className={cx('circle')}>
                  <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                </div>
                <span className={cx('number')}>123</span>
              </div>
              <div className={cx('item')}>
                <div className={cx('circle')}>
                  <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                </div>
                <span className={cx('number')}>123</span>
              </div>
              <div className={cx('item')}>
                <div className={cx('circle')}>
                  <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                </div>
                <span className={cx('number')}>123</span>
              </div>
            </div>
          </div>
          <Line />
        </div>
      ))}
    </>
  );
};

export default VideoAccount;
