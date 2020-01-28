import React from 'react';
import PropTypes from 'prop-types';
import { SECOND_COLOR, THIRD_COLOR } from '../../../constants';

class CustomerSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  render() {
    const { isActive } = this.props;

    const { email } = this.state;
    return (
      <div
        className="text-white px-10 flex flex-col"
        style={{
          background: `linear-gradient(to right,${THIRD_COLOR},${SECOND_COLOR})`,
          minHeight: '460px',
          display: isActive ? 'flex' : 'none',
        }}
      >
        <div className="my-auto">
          <h1 className="text-5xl">Be a Customer in Countly Bank</h1>
          <p>
            To become a Countly Bank customer, all you have to do is fill out
            the form below! Apply now, quickly and easily, without the need to
            go to the branch.
          </p>
          <input
            className="bg-white text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-2/5 appearance-none leading-normal mt-2"
            type="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <button type="button" className="bg-white w-1/6 hover:bg-gray-300 text-countly-800 font-bold py-2 px-4 rounded mt-2">
          Send
          </button>
        </div>

      </div>

    );
  }
}


CustomerSlider.propTypes = {
  isActive: PropTypes.bool.isRequired,
};


export default CustomerSlider;
