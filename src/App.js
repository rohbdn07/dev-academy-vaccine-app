import './App.css';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { store } from './Redux/store';

function App() {
  return (
   <Provider store={store}>
      <Router>
       <div className="App">
            <HomePage />
       </div>
      </Router>
   </Provider>
   
  );
}

export default App;
