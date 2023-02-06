import React from 'react';
import classNames from 'classnames/bind';

import styles from './Discover.module.scss';
import DiscoverItem from './DiscoverItem';
import { HashtagIcon } from '~/components/Icons';
import { data } from '~/data';

const cx = classNames.bind(styles);

const Discover = ({ label }) => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <div className={cx('discover-list')}>
        {data.map((item, index) => (
          <DiscoverItem key={index} icon={<HashtagIcon />} label={item} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
