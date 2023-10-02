import React from 'react';
import classes from './Footer.module.scss';
import Text from '../text/Text';

function Footer() {
  return (
    <footer className={classes.footer}>
      <span className={classes.logoText}>Receitas QWERTY</span>
      <Text>
        Encontre a receita perfeita pra você.
      </Text>
      <Text className={classes.copyright}>
        © QWERTY 2022
      </Text>
    </footer>
  );
}

export default Footer;
