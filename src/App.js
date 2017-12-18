import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    //change with your own firebase config
    componentWillMount() {
        var config = {
            apiKey: 'xxx',
            authDomain: 'xxx',
            databaseURL: 'xxx',
            projectId: 'xxx',
            storageBucket: 'xxx',
            messagingSenderId: 'xxx'
          };
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;