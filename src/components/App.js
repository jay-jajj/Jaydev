import React from 'react'
import {Route, Switch, HashRouter} from "react-router-dom";


//this is pages
import DevLogPage from './views/DevLogPage/Home';
import IamPage from './views/IamPage/IamPage';
import TimaPage from './views/TimaPage/TimaPage';
import CrashCushionPage from './views/CrashCushionPage/CrashCushionPage';
import NotFoundPage from './views/NotFoundPage/NotFoundPage';


import MainNav from './views/MainNavBar/MainNavBar';
import LandingPage from './views/LandingPage/LandingPage';


function App() {
  return (
    <HashRouter>

    {/* switch는 path가없는 라우트를 다른 라우터경우가 아닌경우에 실행시켜줌  */}
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/devlog" component={DevLogPage}/>
      <Route exact path="/iam" component={IamPage}/>
      <Route exact path="/tima" component={TimaPage}/>
      <Route path="/crashcushion" component={CrashCushionPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </HashRouter>
  );
}

export default App
