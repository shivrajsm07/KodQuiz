import React, { useState } from 'react';
import './Quiz.css';
import { data } from '../../data';

export default function Quiz() {

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);

  //for checking  question if it is last
  const [isLastPage, setIsLastPage] = useState(false);

  // setting lock for duplicate score
  const [lock, setLock] = useState(false);
  
  // for checking answers
  const [score, setScore] = useState(0);


  function nextQuestion()
  {
    setLock(false);
    // not last question
    if (index < data.length-1)
    {
      setIndex(index + 1)
      setQuestion(data[index + 1])
    }
    //last question
    else
    {
      setIsLastPage(true);
    }
  }
  if(isLastPage === true) 
  {
    return(
      <h2>Quiz score : {score}</h2>
    )
  }

  // function to checkAnswer
  function checkAnswer(e, ans)
  {
    if(lock === false)
    {
      if(ans === question.ans)
      {
         setScore(score + 1);
         e.target.classList.add('correct');
      }
      else{
        e.target.classList.add('incorrect');
      }
      setLock(true);
    }
  }
  return (
    <div className='quiz'>
        <h1 id='h1'>Kod Quiz</h1>
        <h3 id='h3'>{question.question}</h3>
        <ul className='ul'>
            <li onClick={(e) => {checkAnswer(e, '1')}}> {question.option1}</li>
            <li onClick={(e) => {checkAnswer(e, '2')}}>{question.option2}</li>
            <li onClick={(e) => {checkAnswer(e, '3')}}>{question.option3}</li>
            <li onClick={(e) => {checkAnswer(e, '4')}}>{question.option4}</li>
        </ul>
        <button id='btn' onClick={nextQuestion}>NEXT</button><br></br>
        <div className='question'>{index + 1} of {data.length}</div>
    </div>
  )
}
