import React, { Component } from 'react';
import FeedbackOptions from './FeedbackCounter/FeedbackOptions';
import Statistics from './FeedbackCounter/Statistics';
import Section from './FeedbackCounter/Section';
import Notification from './FeedbackCounter/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => {
      if (e.target.textContent === 'Good') {
        return { good: prevState.good + 1 };
      } else if (e.target.textContent === 'Neutral') {
        return { neutral: prevState.neutral + 1 };
      } else if (e.target.textContent === 'Bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = 0;
    total = total + good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    let positivePercentage = 0;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return positivePercentage;
    }
    positivePercentage = (good / total) * 100;
    return Math.round(positivePercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {good !== 0 || neutral !== 0 || bad !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
