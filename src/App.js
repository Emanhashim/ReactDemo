import React from 'react';
import './App.css';
import Navbarone from './components/Navbarone';
import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/Homex';
import SignUp from './pages/signup';
import Login from './pages/Login';


import Verfication from './pages/Verfication';
import Forgotten from './pages/Forgotten';
import Email from './pages/Email';
import Term from './pages/Term';
import Dashboard from './components/Dashboard';
import Homex from './pages/Homex';
import Send from './pages/Send';
import Transfer1 from './page2/Transfer1';
import Dashboard1 from './page2/Dashboard1';
import TranSend from './page2/TranSend';
import Finish from './page2/Finish';
import Successful from './page2/Successful';

import TransferBank from './page2/TransferBank';
import FinishTwo from './page2/FinishTwo';
import SuccessfulTwo from './page2/SuccessfulTwo';
import Paybill from './page2/Paybill';
import dashPay from './page2/dashPay';
import Qr from './page2/Qr';
import Pay from './page2/Pay';
import FinishThree from './page2/FinishThree';
import Deposit from './page2/Deposit';
import dep2 from './page2/dep2';
import LoginM from './pages/LoginM';
import AgentAnalytic from './agent/AgentAnalytic';
import DashAgent from './agent/DashAgent';
import EarningAgent from './agent/EarningAgent';
import agentTransfer from './agent/agentTransfer';
import Formx from './steps/Formx';

import OtherInfo from './steps/OtherInfo';
import PersonalInfo from './steps/PersonalInfo';
import SignUpInfo from './steps/SignUpInfo';

import mainx from './steps/mainx';
import SignupM from './pages/SignupM';
import Confirm from './pages/Confirm';

import SuccessForm from './steps/SuccessForm';
import AgentAnalytics from './agent/AgentAnalytic';

import TransferCH from './components/TransferCH';

import Page2 from './page2/Page2';
import AgentTransferx from './agent/AgentTransferx';



import MerchantTransfer from './agent2/MerchantTransfer';
import MerchantAnalytic from './agent2/MerchantAnalytic';
import EarningMerchant from './agent2/EarningMerchant';
import DashMerchant from './agent2/DashMerchant';
import MerchnatTransferx from './agent2/MerchantTransferx';
import SignupA from './pages/SignupA';
import LoginA from './pages/LoginA';

import TraHistory from './agent/TraHistory';

function App() {
  return (
    <Router>
      <Navbarone />
    
      <Sidebar/>
 
      <Switch>
        <Route path='/' exact component={Home} />


        <Route path="/tsend" render={props => <TranSend {...props} />} />
        <Route path="/page2/:account/:amount/:remark" render={props => <Page2 {...props} />} />
        <Route exact path="/">
          <Redirect to="/page2" />
        </Route>
        <Route path="/success/:amount" render={props => <Successful {...props} />} />
        <Route exact path="/">
          <Redirect to="/success" />
        </Route>

        <Route path='/dashPay' exact component={dashPay}/>
        <Route path='/finishTwo' exact component={FinishTwo}/>
        <Route path='/finishThree' exact component={FinishThree}/>
  
        <Route path='/successTwo' exact component={SuccessfulTwo}/>
        <Route path='/Tbank' exact component={TransferBank}/>
        <Route path='/pBill' exact component={Paybill}/>
        <Route path='/qr' exact component={Qr}/>
        <Route path='/pay' exact component={Pay}/>
        <Route path='/dep' exact component={Deposit}/>

        <Route path='/about' component={About} />
        <Route path='/Homex' component={Homex} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/loginm' component={LoginM} />
        <Route path='/send' component={Send} />
        <Route path='/finish' component={Finish} />
       
        <Route path='/email' component={Email} />
        <Route path='/dash1' component={Dashboard1} />

        <Route path='/Forg' component={Forgotten} />
        <Route path='/term' component={Term} />
        <Route path='/ver' component={Verfication} />
        <Route path='/trans' component={Transfer1} />
        <Route path='/dep2' component={dep2} />

        <Route path='/aAnalytic' component={AgentAnalytic} />
        <Route path='/dAgent' component={DashAgent} />
        <Route path='/eAgent' component={EarningAgent} />
        <Route path='/agentTransfer' component={agentTransfer} />
        <Route path='/signupm' component={SignupM} />

        <Route path='/form' component={Formx} />
        <Route path='/confirm' component={Confirm} />
        <Route path='/successform' component={SuccessForm} />
        <Route path='/agentT' component={AgentTransferx} />

        <Route path='/transferch' component={TransferCH} />
        
        


        <Route path='/merchantTransfer}' component={MerchantTransfer} />
        <Route path='/ merchantAnalytic' component={ MerchantAnalytic} />
        <Route path='/earningMerchant' component={EarningMerchant} />
        <Route path='/dashMerchant' component={DashMerchant} />
        <Route path='/merchnatTransferx' component={MerchnatTransferx} />
        <Route path='/signupa' component={SignupA} />
        <Route path='/logina' component={LoginA} />  

        
        <Route path='/trahistory' component={TraHistory} />  
      </Switch>
    </Router>
 
  );
}

export default App;
