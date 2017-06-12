import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './utils/history';

// Container Components
import { Main, Login, Register, NoMatch } from './containers';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>

                        <Switch>
                            <Redirect exact from="/" to="/main"/>
                            <Route path="/main" component={Main} />
                            <Route path="/auth/login" component={Login} />
                            <Route path="/auth/register" component={Register} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
