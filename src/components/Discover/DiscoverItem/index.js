import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './DiscoverItem.module.scss';

const cx = classNames.bind(styles);

const DiscoverItem = ({ icon, label }) => {
  return (
    <Link to="/tag/" className={cx('discover-item')}>
      {icon}
      <p className={cx('label')}>{label.nickname}</p>
    </Link>
  );
};

export default DiscoverItem;
