import cn from 'classnames';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

import ButtonScore from '../ButtonScore';

import styles from './ScoreBoard.module.scss';
import data from '../../services/data.json';

const ScoreBoard: FC = () => {
  const score = useSelector((state: RootState) => state.quiz.score);

  console.log(score);

  const moneyArray = data.questions.map(question => question.money);

  return (
    <div className={cn(styles.scores)}>
      {moneyArray
        .map((amount, idx) => {
          return (
            <ButtonScore
              className={cn(styles.score, {
                ['active']: amount === score,
                ['pastScore']: amount < score,
              })}
              key={idx}
            >
              ${amount}
              {score}
            </ButtonScore>
          );
        })
        .reverse()}
    </div>
  );
};

export default ScoreBoard;
