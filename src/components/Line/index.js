import React from 'react';
import classNames from 'classnames/bind';

import styles from './Line.module.scss';

const cx = classNames.bind(styles);

const Line = ({ className }) => {
  return <div className={cx('line', { [className]: className })}></div>;
};

export default Line;
