import cn from 'classnames';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import data from '../../services/data.json';
import { increaseCurrentQuestionIndex, increaseScore } from '../../store/reducers.ts';
import ButtonAnswer from '../ButtonAnswer';
import styles from './Question.module.scss';

export const LETTERS: string[] = ['A', 'B', 'C', 'D'];

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswers: string[];
  money: number;
}

const Question: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const question: Question | undefined = data.questions.find((q: Question) => q.id === parseInt(id!));

  const handleOptionSelect = (option: string): void => {
    setSelectedOption(option);
    const isCorrect: boolean | undefined = question && question.correctAnswers.includes(option);
    if (isCorrect && question && question.id < data.questions.length) {
      dispatch(increaseScore(question.money));
      dispatch(increaseCurrentQuestionIndex());
      navigate(`/question/${question.id + 1}`);
    } else {
      navigate('/results');
    }
  };

  if (!data) return null;

  return (
    <div>
      {question && (
        <>
          <h2 className={styles.title}>Question {question.id}</h2>
          <h3 className={styles.title}>{question.question}</h3>
          <div className={styles.answers}>
            {question.answers.map((option: string, idx: number) => (
              <ButtonAnswer
                key={option}
                className={cn(styles.button, option === selectedOption ? styles.selected : '')}
                onClick={() => handleOptionSelect(option)}
              >
                <span className={styles.letter}>{LETTERS[idx]}</span>
                {option}
              </ButtonAnswer>
            ))}
          </div>
          <Link to="/">Go to Home</Link>
        </>
      )}
    </div>
  );
};

export default Question;
