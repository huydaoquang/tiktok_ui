import React from 'react';
import Video from '~/components/Video';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx('wrapper')}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
};

export default Home;
