import React from 'react';
import { useStyles } from '../styles';
import MonLogo from '../assets/images/plat.png';

const Logo = () => {
  const styles = useStyles();
  return (
    <img src={MonLogo} alt='Food Order' className={styles.largeLogo} />
  )
};

export default Logo;