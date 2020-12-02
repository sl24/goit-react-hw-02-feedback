import PropTypes from 'prop-types';

const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
  return (
    <button type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
      {feedback}
    </button>
  );
};

const FeedbackOpt = ({ options, onLeaveFeedback }) => {
  return options.map(option =>
    FeedbackBtn({ feedback: option, onLeaveFeedback }),
  );
};

FeedbackBtn.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOpt;
