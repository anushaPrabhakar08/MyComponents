import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Layout from './examples/Layout';
import Accordions from './examples/Accordions';
import Buttonexample from './examples/Button';
import Bookshelfexample from './examples/Bookshelf';
import Textbox from './examples/Textbox';
import Radiobutton from './examples/Radiobutton';
import DropdownMenu from './examples/DropdownMenu';
 

function App() {
  return (
    <div className="App">

      <Router>
        <Layout>
          {/* <NavMenu> */}

            <div>
              <Route path="/button" component={Buttonexample} />
              <Route path="/accordions" component={Accordions} />
              <Route path="/textbox" component={Textbox} />
              <Route path="/bookshelf" component={Bookshelfexample} />
              <Route path="/radiobutton" component={Radiobutton} />
              <Route path="/accordions" component={Accordions} />
              <Route path="/dropdownMenu" component={DropdownMenu} />
            </div>
          {/* </NavMenu> */}

        </Layout>
      </Router>


    </div>
  );
}


export default App;
