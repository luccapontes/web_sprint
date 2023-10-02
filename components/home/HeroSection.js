import React from 'react';
import Image from 'next/image';
import classes from './HeroSection.module.scss';
import HeroImg from '../../images/hero_img.jpeg';
import Text from '../text/Text';
import ButtonWithLink from '../button/Button';

function HeroSection() {
  return (
    <section className={classes.hero__section}>
      <div className={classes.hero__container}>
        <div className={classes.hero__info}>
          <h1 className={classes.hero__title}>
            Encontre a 
            {' '}
            <span>comida perfeita</span>
            {' '}
            para você!
          </h1>
          <Text>Uma lista de receitas para você</Text>
          <div className={classes.hero__buttons}>
            <ButtonWithLink link="/meals" variant="primary">Busque receitas</ButtonWithLink>
            <ButtonWithLink link="/savedMeals">Itens salvos</ButtonWithLink>
          </div>
        </div>
        <div className={classes.hero__img}>
          <Image src={HeroImg} alt="Chef Pic" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
