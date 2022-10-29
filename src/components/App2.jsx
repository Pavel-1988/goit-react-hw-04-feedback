import React from 'react';
import { useState } from "react";
import { Section } from './Section/Section'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification'

export default function App2() {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);


  const onFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return Math.round((good * 100) / total) || 0 ;
  }

    const total = countTotalFeedback();
    const percentage = countPositiveFeedbackPercentage();
    const options = Object.keys({ good, bad, neutral });

   return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onFeedback}
          />
        </Section>
        <Section title={"Statistics"}>
          {total > 0
            ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
            />)
            : (<Notification message="There is no feedback" />)
          }
          
        </Section>
      </>
    )

}