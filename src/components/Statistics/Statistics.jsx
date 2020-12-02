import PropTypes from 'prop-types';

import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className="title">Statistics</h2>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <div>
          <p class="textItem">Good: {good}</p>
          <p class="textItem">Neutral: {neutral}</p>
          <p class="textItem">Bad: {bad}</p>
          <p class="textItem">Total: {total}</p>
          <p class="textItem">Positive feedback: {positivePercentage}%</p>
        </div>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
