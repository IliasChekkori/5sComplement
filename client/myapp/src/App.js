import './App.css';
import { Route } from 'react-router-dom';
import {Login} from './Login';
import {Home} from './Home';
import {Profile} from './Profile';
import {Messages} from './messages';
import {SignUp} from './signup';
function App() {
  return (
    <div className="App">
       <Route path={'/'} exact component={Login}/>
       <Route path={'/home'} exact component={Home}/>
       <Route path= {'/profile'} exact component={Profile}/>
       <Route path = {'/messages'} exact component = {Messages}/>
       <Route path = {'/sign-up'} exact component = {SignUp}/>
    </div>
  );
}

export default App;
