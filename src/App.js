import Head from "./Head";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Center, Flex, Text } from "@chakra-ui/layout";
import SideMenu from "./components/SettingPage/SideMenu";
import General from "./components/SettingPage/General";
import { AuthorizedApp } from "./components/SettingPage/Subscription";
import Subscription from "./components/SettingPage/Subscription";
import Bascis from "./components/SettingPage/Basics";
import ReminderForm from "./components/SettingPage/ReminderForm";
import EmailNotification from "./components/SettingPage/EmailNotification";
import ProjectPreference from "./components/SettingPage/ProjectPreference";
import { Advanced } from "./components/SettingPage/ProjectPreference";
import {useState} from 'react'
import LoginPage from './components/LoginPage/LoginPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function toggleLogin(){
    if(isLoggedIn === false){
      setIsLoggedIn(true)
    }
  }
  if(isLoggedIn === false){
    return(
      <div className = "App">
      <LoginPage toggleLogin = {toggleLogin}/>
      </div>
    )
  }else{
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Head}></Route>

        <Route path="/setting">
          <Flex color="white">
            <Center w="1000px" bg="black">
              <SideMenu />
            </Center>
            <Center w="1500px" h="1000px" bg="white.500">
              <box>
                <Redirect from="/setting" to="setting/basics" />
                <Route path="/setting/general" component={General}></Route>
                <Route path="/setting/app" component={AuthorizedApp}></Route>
                <Route
                  path="/setting/subscription"
                  component={Subscription}
                ></Route>
                <Route path="/setting/basics" component={Bascis}></Route>
                <Route
                  path="/setting/reminder"
                  component={ReminderForm}
                ></Route>
                <Route
                  path="/setting/emailnotification"
                  component={EmailNotification}
                ></Route>
                <Route
                  path="/setting/project-preference"
                  component={ProjectPreference}
                ></Route>
                <Route path="/setting/advanced" component={Advanced}></Route>
              </box>
            </Center>
            <Center w="600px" bg="white">
              <Text>Box 2</Text>
            </Center>
          </Flex>
        </Route>
      </Router>
    </div>
  );
  }
}

export default App;
