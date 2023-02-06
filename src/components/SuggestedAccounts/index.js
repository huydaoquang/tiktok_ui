import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { data } from '~/data';

const cx = classNames.bind(styles);

const SuggestedAccounts = ({ label }) => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {data.slice(0, 5).map((item) => (
        <AccountItem key={item.id} dataAccountItem={item} />
      ))}
      <p className={cx('more-btn')}>See all</p>
    </div>
  );
};
SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
