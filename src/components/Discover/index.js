import React from 'react';
import classNames from 'classnames/bind';

import styles from './Discover.module.scss';
import DiscoverItem from './DiscoverItem';
import { HashtagIcon, MusicIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const Discover = ({ label }) => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <div className={cx('discover-list')}>
        <DiscoverItem icon={<HashtagIcon />} content="suthatla" />
        <DiscoverItem icon={<HashtagIcon />} content="mackedoi" />
        <DiscoverItem icon={<HashtagIcon />} content="sangdaythoi" />
        <DiscoverItem icon={<MusicIcon />} content="yeudonphuonglagi" />
        <DiscoverItem icon={<MusicIcon />} content="thienthantinhyeu" />
        <DiscoverItem icon={<MusicIcon />} content="tinhdadaymottim" />
        <DiscoverItem icon={<MusicIcon />} content="thanghau" />
        <DiscoverItem icon={<HashtagIcon />} content="genzlife" />
      </div>
    </div>
  );
};

export default Discover;
