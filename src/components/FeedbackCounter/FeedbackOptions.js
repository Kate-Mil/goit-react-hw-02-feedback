import PropTypes from 'prop-types';
import css from './FeedbackCounter.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={css.bnt__set}>
      <button type="button" onClick={onLeaveFeedback} className={css.bnt}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback} className={css.bnt}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback} className={css.bnt}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
