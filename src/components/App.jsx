import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const onLeaveFeedback = name => {
  switch (name) {
    case 'good': setGood(prev => prev+1);
    break;

    case 'neutral': setNeutral(prev => prev+1);
    break;

    case 'bad': setBad(prev => prev+1);
    break;
    default: return;
}
};

const countTotalFeedback = () => {
    return good + neutral + bad
 };


const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
      return ((good / total) * 100);
     };

  return (
    <>
    <Section title="Please leave feedback">
      <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={onLeaveFeedback}/>
    </Section>
    
    <Section title="Statistics">
      {countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
     : <Notification message="There is no feedback"/>}
      </Section>
  </>
  )
}



