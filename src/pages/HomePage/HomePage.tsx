import { FC } from 'react';
import hand from '../../assests/images/hand.svg';
import Button from '../../components/Button';
import styles from './HomePages.module.scss';

const HomePage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroImage}>
        <img src={hand} alt="like-hand" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Who wants to be a&nbsp;millionaire?</h1>
        <Button isLink linkPath="/question/1">
          Start Quiz
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
