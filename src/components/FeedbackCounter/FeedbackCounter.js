import React from 'react';
import css from './FeedbackCounter.module.css';

class FeedbackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.bnt__set}>
          <button type="button" className={css.bnt}>
            Good
          </button>
          <button type="button" className={css.bnt}>
            Neutral
          </button>
          <button type="button" className={css.bnt}>
            Bad
          </button>
        </div>
        <h2 className={css.title}>Statistics</h2>
        <p className={css.text}>Good: {this.state.good}</p>
        <p className={css.text}>Neutral: {this.state.neutral}</p>
        <p className={css.text}>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

export default FeedbackCounter;
