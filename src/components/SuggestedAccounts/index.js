import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import Line from '../Line';

const cx = classNames.bind(styles);

const SuggestedAccounts = ({ label }) => {
  return (
    <div className={cx('wrapper')}>
      <Line />
      <p className={cx('label')}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={cx('more-btn')}>See all</p>
    </div>
  );
};
SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
