import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './App.css';
import Planner from './Planner';
import Footer from './Footer';

const  history = createBrowserHistory();

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} history={history}>
        <header className="entry-header">
          <h1 className="entry-title">Diablo II: Resurrected - Skill Planner</h1>
        </header>
        <div className="planner-wrapper">
          <div className="planner">
            <Route path="/" component={Planner}/>
            <Footer/>
          </div>
        </div>
    </Router>
  );
};

export default App;
