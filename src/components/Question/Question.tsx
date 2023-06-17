import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
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
  const [showNextQuestion, setShowNextQuestion] = useState(false);

  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const question: Question | undefined = data.questions.find(q => q.id === Number(id));

  const handleOptionSelect = (option: string): void => {
    setSelectedOption(option);

    if (!question) return;

    console.log(selectedOption);

    const isCorrect = question?.correctAnswers.includes(option);

    if (isCorrect && question.id === data.questions.length) {
      dispatch(increaseScore(question.money));
      navigate('/results');
    } else if (isCorrect && question.id < data.questions.length) {
      dispatch(increaseScore(question.money));
      dispatch(increaseCurrentQuestionIndex());
      setShowNextQuestion(true);
    } else {
      navigate('/results');
    }
  };

  useEffect(() => {
    if (!question) return;

    if (showNextQuestion) {
      const timeout = setTimeout(() => {
        setShowNextQuestion(false);
        navigate(`/question/${question.id + 1}`);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [showNextQuestion, question?.id, navigate]);

  if (!question) return null;

  return (
    <div className={styles.questions}>
      <div className={styles.quizInner}>
        <h2 className={styles.title}>{question.question}</h2>
        <div className={styles.answers}>
          {question.answers.map((option, idx) => (
            <ButtonAnswer
              key={option}
              className={cn(styles.button, {
                [styles.success]: option === selectedOption,
                [styles.error]: option !== selectedOption,
              })}
              onClick={() => handleOptionSelect(option)}
            >
              <span className={styles.letter}>{LETTERS[idx]}</span>
              {option}
            </ButtonAnswer>
          ))}
        </div>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default Question;
