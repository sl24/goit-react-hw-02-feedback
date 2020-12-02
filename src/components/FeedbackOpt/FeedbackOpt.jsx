import PropTypes from 'prop-types';

const FeedbackOpt = ({ options, onLeaveFeedback }) => {
  return options.map((option, id) => (
    <button
      class="button"
      key={id}
      data-feedback={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

FeedbackOpt.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOpt;
