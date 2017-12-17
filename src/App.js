import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: 'AIzaSyBbEmAODaoKZV8UkICp_OkQXwycodASal0',
            authDomain: 'reactnativesimpletodofirebase.firebaseapp.com',
            databaseURL: 'https://reactnativesimpletodofirebase.firebaseio.com',
            projectId: 'reactnativesimpletodofirebase',
            storageBucket: 'reactnativesimpletodofirebase.appspot.com',
            messagingSenderId: '900067693066'
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