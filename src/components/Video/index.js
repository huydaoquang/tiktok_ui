import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Video.module.scss';
import audio from '~/assets/audio';
import Line from '../Line';
import Image from '../Image';
import Button from '../Button';

const cx = classNames.bind(styles);

const Video = () => {
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('header')}>
          <div className={cx('account-item')}>
            <Image
              className={cx('avatar')}
              src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1675432800&x-signature=%2BRB9kct0vUYr25MlyGiuXREA7xI%3D"
              alt=""
            />
            <div className={cx('container-info')}>
              <div className={cx('item-info')}>
                <div className={cx('nickname')}>
                  <h4>theanh28entertainment</h4>
                  <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <p className={cx('name')}>Theanh28 Entertainment</p>
              </div>
              <div className={cx('content')}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <Button className={cx('follow-btn')} outline>
            Follow
          </Button>
        </div>
        <video className={cx('video-item')} src={audio.tiktok} type="video/mp4" controls></video>
      </div>
      <Line />
    </>
  );
};

export default Video;
