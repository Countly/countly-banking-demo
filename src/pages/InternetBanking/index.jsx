import React from 'react';
import { SideNav, Chevron, Icon } from 'react-side-nav';
import { Link } from 'react-router-dom';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import 'rc-menu/assets/index.css';

class InternetBanking extends React.Component {


  constructor(props) {
    super(props);
   
  }


  render() {

    return (
        <div className="flex">
            <div className="w-1/6 bg-countly-800 text-white">

            <Menu
      className="h-screen"
      defaultActiveFirst
    >
      <SubMenu title={<span>Transfers</span>} key="1">
        <MenuItem key="1-1">Send Money</MenuItem>
        <MenuItem key="1-2">EFT</MenuItem>
        <MenuItem key="1-3">Swift</MenuItem>
      </SubMenu>
      

    
      <SubMenu title={<span>Payments</span>} key="2">
        <SubMenu
          key="2-1"
          title={<span>Utilities</span>}
        >
          <MenuItem key="2-1-1">Electric</MenuItem>
          <MenuItem key="2-1-2">Gas</MenuItem>
          <MenuItem key="2-1-3">Water</MenuItem>

        </SubMenu>


        <MenuItem key="2-2">Credit Card</MenuItem>
        <MenuItem key="2-3">Tax</MenuItem>
        <MenuItem key="2-4">Organization</MenuItem>
        <MenuItem key="2-5">Betting</MenuItem>

       
      </SubMenu>
   



    
      <MenuItem key="3">Products</MenuItem>
     
      <MenuItem key="4">Investments</MenuItem>
      <MenuItem key="5">Applications</MenuItem>
      <MenuItem key="6">Settings</MenuItem>

    </Menu>       

            </div>
            <div className="col-sm-10 p-6">other area</div>

        </div>
    );
  }
}


export default InternetBanking;
