import React from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from '~/components/Icons';

import Line from '~/components/Line';
import Discover from '~/components/Discover';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <Line className={cx('line-half')} />
      <SuggestedAccounts label="Suggested accounts" />
      <Line className={cx('line-half')} />
      <SuggestedAccounts label="Following accounts" />
      <Line className={cx('line-bottom')} />
      <Discover label="Discover" />
    </aside>
  );
};

export default Sidebar;
