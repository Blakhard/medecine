var Redux = require('redux');
var reducer = require('./reducers/reducer');

function configureStore(initialState)
{
    console.log(initialState);
    return Redux.createStore(
        reducer,
        initialState
    );
}

module.exports = configureStore;