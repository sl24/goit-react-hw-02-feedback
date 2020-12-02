import { Component } from 'react';

import Section from './Section';
import FeedbackOpt from './FeedbackOpt';

import { FEEDBACK_OPTIONS } from './data/options';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  heandleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOpt
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.heandleFeedback}
          ></FeedbackOpt>
        </Section>
      </div>
    );
  }
}

export default App;
