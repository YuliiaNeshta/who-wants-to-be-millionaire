import cn from 'classnames';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

import ButtonScore from '../ButtonScore';

import styles from './ScoreBoard.module.scss';
import data from '../../services/data.json';
import { ScoreBoardProps } from './types.ts';

const ScoreBoard: FC<ScoreBoardProps> = ({ className = '' }) => {
  const { currentQuestionIndex } = useSelector((state: RootState) => state.quiz);

  const moneyArray = data.questions.map(question => question.money);

  return (
    <div className={cn(styles.scores, styles[className])}>
      {moneyArray
        .map((amount, idx) => {
          return (
            <ButtonScore
              className={cn(styles.score, {
                ['active']: currentQuestionIndex === idx,
                ['pastScore']: currentQuestionIndex > idx,
              })}
              key={idx}
            >
              ${amount}
            </ButtonScore>
          );
        })
        .reverse()}
    </div>
  );
};

export default ScoreBoard;
