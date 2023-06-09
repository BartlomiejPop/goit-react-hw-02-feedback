import React from 'react';
// import ReactDOM from 'react-dom';
// import Statistics from 'react-dom';
// import { addGoodFeedback } from '../App';
import styles from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

// class Counter extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positive: 0,
//   };

//   addGoodFeedback(evt) {
//     console.log('Increment button was clicked!', evt); // działa
//     console.log('this.props: ', this.state.good); // Error: cannot read props of undefined
//     this.setState({ good: this.state.good + 1 });
//     this.setState({ total: this.state.total + 1 });
//     this.setState(prevState => {
//       return {
//         positive: (prevState.good / prevState.total) * 100,
//       };
//     });
//     // this.setState({
//     //   percentage: this.state.good + this.state.neutral + this.state.bad,
//     // });
//   }

//   addBadFeedback(evt) {
//     console.log('Decrement button was clicked!', evt); // działa
//     console.log('this.props: ', this.state.bad); // Error: cannot read props of undefined
//     this.setState({ bad: this.state.bad + 1 });
//     this.setState({ total: this.state.total + 1 });
//     this.setState(prevState => {
//       return {
//         positive: (prevState.good / prevState.total) * 100,
//       };
//     });
//   }

//   addNeutralFeedback(evt) {
//     console.log('Decrement button was clicked!', evt); // działa
//     console.log('this.props: ', this.state.bad); // Error: cannot read props of undefined
//     this.setState({ neutral: this.state.neutral + 1 });
//     this.setState({ total: this.state.total + 1 });
//     this.setState(prevState => {
//       return {
//         positive: (prevState.good / prevState.total) * 100,
//       };
//     });
//   }

//   render() {
//     const { state } = this.props;

export const FeedbackOptions = ({
  addGoodFeedback,
  addBadFeedback,
  addNeutralFeedback,
}) => {
  return (
    <div className={styles.options}>
      <button className={styles.btn} type="button" onClick={addGoodFeedback}>
        Good
      </button>
      <button className={styles.btn} type="button" onClick={addNeutralFeedback}>
        Neutral
      </button>
      <button className={styles.btn} type="button" onClick={addBadFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  addGoodFeedback: PropTypes.func.isRequired,
  addBadFeedback: PropTypes.func.isRequired,
  addNeutralFeedback: PropTypes.func.isRequired,
};
