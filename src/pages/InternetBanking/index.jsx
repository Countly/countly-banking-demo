import React from 'react';
import { withTranslation } from 'react-i18next';
import Sidebar from './Sidebar'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Main from './Main';
import Transfers from './Transfers';


const InternetBanking = () => {

    let { path } = useRouteMatch();

    return (
      
        <div className="flex">
          <Sidebar />

        <div className="col-sm-10 p-6">

        <Switch>
        <Route exact path={path} component={Main} />
        <Route exact path={`${path}/transfers`} component={Transfers} />
       </Switch>

        </div>
        </div>
    );
  
}


export default withTranslation()(InternetBanking);
