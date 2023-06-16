import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import hand from '../../assests/images/hand.svg';
import { RootState } from '../../store/store.ts';
import styles from './Results.module.scss';
import { resetScore, resetCurrentQuestionIndex } from '../../store/reducers.ts';

const EndGame: FC = () => {
  const score = useSelector((state: RootState) => state.quiz.score);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(resetScore());
    dispatch(resetCurrentQuestionIndex());
  };

  return (
    <div className={styles.wrapper}>
      <img src={hand} alt="like-hand" />
      <div className={styles.result}>
        <p className={styles.totalText}>Total score:</p>
        <p className={styles.score}>${score} earned</p>
        <Link onClick={handleRestart} to="/">
          Try again
        </Link>
      </div>
    </div>
  );
};

export default EndGame;
