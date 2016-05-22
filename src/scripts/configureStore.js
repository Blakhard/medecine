var Redux = require('redux');
var reducer = require('./reducers/reducer');

function configureStore(initialState)
{
    return Redux.createStore(
        reducer,
        initialState
    );
}

module.exports = configureStore;