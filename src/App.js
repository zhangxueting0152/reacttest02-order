import React, { Component } from 'react';
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";

class App extends Component {

  render() {
    return (
        <Router>
            <div>

                <Route exact path="/" component={ProductList} />
                <Route path="/detail/:id" component={Detail} />

            </div>
        </Router>
    );
  }
}

export default App;
