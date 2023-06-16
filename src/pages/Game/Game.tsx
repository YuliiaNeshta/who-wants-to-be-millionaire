import cn from 'classnames';
import { FC, useState } from 'react';
import Question from '../../components/Question';
import ScoreBoard from '../../components/ScoreBoard';
import styles from './Game.module.scss';

// className={cn(showScoreMobile ? 'show' : 'hide')}

const Game: FC = () => {
  const [showScoreMobile, setShowScoreMobile] = useState<boolean>(false);

  return (
    <div className={styles.quizInner}>
      <Question />
      {/*{showScoreMobile ? (*/}
      {/*  <Close className={styles.close} onClick={() => setShowScoreMobile(false)} />*/}
      {/*) : (*/}
      {/*  <Burger className={styles.burger} onClick={() => setShowScoreMobile(true)} />*/}
      {/*)}*/}
      <ScoreBoard />
    </div>
  );
};

export default Game;
