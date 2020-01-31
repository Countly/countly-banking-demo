import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Sidebar from './Sidebar';
import Main from './Main';
import Transfers from './Transfers';


const InternetBanking = () => {
  const { path } = useRouteMatch();

  return (

    <div className="flex">
      <Sidebar />

      <div className="w-full p-6">

        <Switch>
          <Route exact path={path} component={Main} />
          <Route exact path={`${path}/transfers`} component={Transfers} />
        </Switch>

      </div>
    </div>
  );
};


export default withTranslation()(InternetBanking);
