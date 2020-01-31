import React from 'react';
import { withTranslation } from 'react-i18next';
import Steps from 'rc-steps';
import 'rc-steps/assets/index.css';
import GreenButton from '../../common/components/GreenButton';
import TextInput from '../../common/components/TextInput';

class WireTransfer extends React.Component {

  state = {
    current: 0,
  };


  componentDidMount(){
    document.title = "Wire Transfer"
  }

  onChange = current => {
    this.setState({ current });
  };






  render() {

    const { current } = this.state;
    const { Step } = Steps;



  const firstStep = () =>  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
    Recipient Name
    </label>
    <TextInput id="customerId" className="w-full" type="text" />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
    Recipient IBAN
    </label>
    <TextInput id="text" type="text" className="w-full" />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
    Recipient Account No
    </label>
    <TextInput id="text" type="text" className="w-full" />
  </div>
  <div className="flex items-center justify-between">
    <GreenButton onClick={() => this.setState({ current: 1 })} title="next" />

  </div>
</form>

const secondStep = () =>  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
<div className="relative">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
      Sender Account
    </label>
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Alaşehir - TR03 0011 1000 0000 0063 1657 87</option>
          <option>Alsancak - TR02 0006 4000 0013 4011 1017 77</option>
          <option>Konak - TR30 0003 2000 0000 0050 7745 16</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

<div className="flex items-center justify-between">
  <GreenButton onClick={() => this.setState({ current: 2 })} title="next" />

</div>
</form>



const thirdStep = () =>  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Amount
  </label>
  <TextInput id="amount" className="w-full" type="text" />
</div>

<div className="flex items-center justify-between">
  <GreenButton onClick={() => this.setState({ current: 3 })} title="next" />

</div>
</form>


const lastStep = () => <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300 flex flex-col">

    <span className="text-lg">Sender Account</span>
    <span>Alaşehir - TR03 0011 1000 0000 0063 1657 87</span>
    <span className="text-lg">Recipient Name</span>
    <span>Cem Yılmaz</span>
    <span className="text-lg">Recipient IBAN</span>
    <span>İzmir - TR03 0011 1000 0000 0063 1657 87</span>
    <GreenButton onClick={() => this.setState({ current: 4 })} title="Confirm and Send" />

</div>

    return (
      <div className="w-full">
        
        <Steps progressDot className="border border-gray-300" type="navigation" current={current} onChange={this.onChange}>
        <Step title="Recipient Account"/>
        <Step title="Sending Account"/>
        <Step title="Amount Determination"/>
        <Step title="Detail Clarification"/>
      </Steps>
      <div className="p-10 border border-gray-300">
      {current === 0 && firstStep()}
      {current === 1 && secondStep()}
      {current === 2 && thirdStep()}
      {current === 3 && lastStep()}
      {current === 4 && <div className="text-2xl">Money sent.</div>}

      </div>

      </div>
    );
  }
}


export default withTranslation()(WireTransfer);
