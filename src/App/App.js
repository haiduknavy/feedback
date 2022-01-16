import React from "react";
import Statistics from "../Components/Statistics/Statistics";
import Section from "../Components/Section/Section";
import FeedbackOptions from "../Components/FeedbackOptions/FeedbackOptions";
import Notification from "../Components/Notification/Notification";
import { Wrapper } from "./App.styled";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  btnClick = (key) => {
    this.setState((val) => {
      return {
        [key]: val[key] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (firstVal, secondVal) => firstVal + secondVal
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <Wrapper>
        <Section tile="Please leave feedback">
          <FeedbackOptions options={options} clickGood={this.btnClick} />
        </Section>
        {total > 0 ? (
          <Section tile="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message={"There is no feedback"} />
        )}
      </Wrapper>
    );
  }
}

export default App;
