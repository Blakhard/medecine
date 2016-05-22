var React = require('react');
var ReactDOM = require('react-dom');
var MainApp = require('./components/main-app');
var ReactRedux = require('react-redux');
var configureStore = require('./configureStore');

const Provider = ReactRedux.Provider;
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <MainApp />
    </Provider>,
    document.getElementById("application")
);