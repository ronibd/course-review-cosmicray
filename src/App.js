import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode , faFacebookF  } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services'; 
import About from './components/About/About';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import HomeServices from './components/HomeServices/HomeServices';

function App() {
  return (
    <div className="App">   
         

        <Router>
          <Header></Header> 
          <Switch> 
            <Route exact path='/'>
               <Services></Services>
               <About></About>
            </Route>
            <Route exact path='/home'>
               <Services></Services>
               <About></About>
            </Route>
            <Route path='/services'>
                <HomeServices></HomeServices>
            </Route>
            <Route path='/about'>
                <About></About>
            </Route>
            <Route path='/contact'>
                <Contact></Contact>
            </Route>
            <Route exact path='*'>
                <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer> 
        </Router>
    </div>
  );
}

export default App;
