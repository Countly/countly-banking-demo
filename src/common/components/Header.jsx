import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GreenButton from './GreenButton';

class Header extends React.Component {
  render() {
    const { pageLocation } = this.props.dataReducer;

    return (
      <header>
        <div className="w-full">
          <nav className="p-1 shadow">
            <ul>
              <li className="inline-block mx-4">
                <Link to="/">About Count Bank</Link>
              </li>
              <span className="text-gray-500 mx-2">|</span>
              <li className="inline-block mx-4">
                <Link to="/">Contact US</Link>
              </li>
              <span className="text-gray-500 mx-2">|</span>
              <li className="inline-block mx-4">
                <Link to="/">ATM & Branches</Link>
              </li>
              <li className="hidden md:inline-block mr-4 float-right">
                <Link to="/">Product and Service Fees</Link>
              </li>
            </ul>
          </nav>

          <div className="p-3 flex justify-between shadow items-center">
            <Link to="/countly-banking-demo">
              <img
                width="200"
                alt="countly logo"
                src="https://count.ly/images/logos/countly-logo.svg"
              />
            </Link>
            { pageLocation === 'internet-banking'
              ? (
                <Link to="/countly-banking-demo">
                  <GreenButton title="Home" />

                </Link>
              )
              : (
                <Link to="/internet-banking/login">

              <GreenButton title="Internet Banking" />

                </Link>
              )}


          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
