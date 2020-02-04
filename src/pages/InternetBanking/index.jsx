import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Sidebar from './Sidebar';
import Main from './Main';
import EFT from './Transfers/EFT';
import Swift from './Transfers/Swift';
import Electric from './Payments/Electric';
import Water from './Payments/Water';
import Gas from './Payments/Gas';
import CreditCardPayment from './Payments/CreditCard';
import Tax from './Payments/Tax';
import Organization from './Payments/Organization';
import Betting from './Payments/Betting';
import Products from './Products';
import Investments from './Investments';
import Settings from './Settings';
import Insurance from './Applications/Insurance';
import CreditCardApplication from './Applications/CreditCard';
import Loan from './Applications/Loan';
import WireTransfer from './Transfers/WireTransfer';


const InternetBanking = () => {
  const { path } = useRouteMatch();


  return (

    <div className="flex">
      <Sidebar />

      <div className="w-full p-6">

        <Switch>
          <Route exact path={path} component={Main} />
          <Route exact path={`${path}/transfers/wire-transfer`} component={WireTransfer} />
          <Route exact path={`${path}/transfers/eft`} component={EFT} />
          <Route exact path={`${path}/transfers/swift`} component={Swift} />

          <Route exact path={`${path}/payments/utilities/electric`} component={Electric} />
          <Route exact path={`${path}/payments/utilities/gas`} component={Gas} />
          <Route exact path={`${path}/payments/utilities/water`} component={Water} />
          <Route exact path={`${path}/payments/credit-card`} component={CreditCardPayment} />
          <Route exact path={`${path}/payments/tax`} component={Tax} />
          <Route exact path={`${path}/payments/organization`} component={Organization} />
          <Route exact path={`${path}/payments/betting`} component={Betting} />

          <Route exact path={`${path}/products`} component={Products} />
          <Route exact path={`${path}/investments`} component={Investments} />
          <Route exact path={`${path}/applications/loan`} component={Loan} />
          <Route exact path={`${path}/applications/insurance`} component={Insurance} />
          <Route exact path={`${path}/applications/credit-card`} component={CreditCardApplication} />

          <Route exact path={`${path}/settings`} component={Settings} />

        </Switch>

      </div>
    </div>
  );
};


export default withTranslation()(InternetBanking);
