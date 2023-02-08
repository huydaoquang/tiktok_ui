import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { data } from '~/data';

const cx = classNames.bind(styles);

const SuggestedAccounts = ({ label }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisible = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {data.slice(0, 5).map((item) => (
        <AccountItem key={item.id} dataAccountItem={item} />
      ))}
      {isVisible ? (
        <p className={cx('more-btn')} onClick={handleVisible}>
          See all
        </p>
      ) : (
        <>
          {data.slice(6).map((item) => (
            <AccountItem key={item.id} dataAccountItem={item} />
          ))}
          <p className={cx('more-btn')} onClick={handleVisible}>
            See less
          </p>
        </>
      )}
    </div>
  );
};
SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
