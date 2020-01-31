import React from 'react';
import { withTranslation } from 'react-i18next';
import Steps from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
class Transfers extends React.Component {

  state = {
    current: 0,
  };



  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };


  render() {

    const { current } = this.state;
    const { Step } = Steps;


    return (
      <div className="w-full">
        
        <Steps className="border border-gray-300" type="navigation" current={current} onChange={this.onChange}>
        <Step title="Step 1" status="wait"/>
        <Step title="Step 2" status="wait"/>
        <Step title="Step 3" status="wait" />
        <Step title="Step 3" status="wait" />
      </Steps>
      <div className="p-10 border border-gray-300">
      {current === 0 && <div>1. comp</div>}
      {current === 1 && <div>2. comp</div>}
      {current === 2 && <div>3. comp</div>}
      {current === 3 && <div>4. comp</div>}
      </div>

      </div>
    );
  }
}


export default withTranslation()(Transfers);
