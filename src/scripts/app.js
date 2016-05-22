var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var ReactRedux = require('react-redux');
var MainPageContainer = require('./components/mainPage/main-page-container');
var OperationsPageContainer = require('./components/operations/operations-page-container');
var configureStore = require('./configureStore');

const Provider = ReactRedux.Provider;
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={MainPageContainer}></Route>
            <Route path="/operations" component={OperationsPageContainer}/>

        </Router>
    </Provider>,
    document.getElementById("application")
);