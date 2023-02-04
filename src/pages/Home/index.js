import React from 'react';
import VideoAccount from '~/components/VideoAccount';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx('wrapper')}>
      <VideoAccount />
    </div>
  );
};

export default Home;
