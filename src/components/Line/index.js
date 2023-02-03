import React from 'react';
import classNames from 'classnames/bind';

import styles from './Line.module.scss';

const cx = classNames.bind(styles);

const Line = () => {
  return <div className={cx('line')}></div>;
};

export default Line;
