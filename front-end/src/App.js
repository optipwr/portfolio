import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Development from './containers/Development/Development';
import Photography from './containers/Photography/Photography';
import Contact from './containers/Contact/Contact';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/development" component={Development} />
                        <Route path="/photography" component={Photography} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
