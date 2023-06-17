import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import hand from '../../assests/images/hand.svg';
import Button from '../../components/Button';
import { resetCurrentQuestionIndex, resetScore } from '../../store/reducers.ts';
import { RootState } from '../../store/store.ts';
import styles from './Results.module.scss';

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
        <Button isLink onClick={handleRestart} linkPath="/">
          Try again
        </Button>
      </div>
    </div>
  );
};

export default EndGame;
