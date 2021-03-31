import React from 'react';
import { Switch, Route } from 'react-router';
import DisplayContainer from './display/display_container';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={DisplayContainer}/>
        </Switch>
    </div>
);

export default App;