import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import { updatePageLocation } from '../../actions/generalActions'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          step: 1
        };
      }



  componentDidMount(){
    this.props.updatePageLocation("internet-banking")
  }

  render() {

    const { step } = this.state;

    const firstStep =  () =>  <div className="w-2/6">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Customer Id
            </label>
            <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Customer ID" />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
            </label>
            <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
            <button onClick={ ()=> this.setState({ step: 2 })} className="bg-countly-700 hover:bg-countly-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Next
            </button>
            </div>
            </form>
            </div>


    const secondStep = () => 
        <div className="w-2/6 bg-white shadow-md rounded px-8 pt-6 pb-10 m-4 border border-gray-300">
        Please enter verification code 
        <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 my-3 leading-tight focus:outline-none focus:shadow-outline" id="verificationCode" type="text" placeholder="*******"/>
        <Link to="/internet-banking">
        <button className="bg-countly-700 hover:bg-countly-800 text-white font-bold py-2 px-4 mt-3 mr-3 rounded focus:outline-none focus:shadow-outline" type="button">
        Sıgn In
        </button>
        </Link>
        <button className="bg-countly-700 hover:bg-countly-800 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline" type="button">
        Resend Verification Code
        </button>
    </div>


    return (
        <div className="flex p-10 justify-center items-center bg-countly-800 h-screen">
            { step === 1 ? firstStep() : secondStep() }
        </div>
    );
  }
}


const mapStateToProps = (state) => {
    return state
  };
  
  const mapDispatchToProps = {
    updatePageLocation
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login);