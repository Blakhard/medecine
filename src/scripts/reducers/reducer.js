/**
 * Created by vlad on 24.04.16.
 */
var Action = require('../actions/action');
var reducer = function(
    state ={
        fontSize: false,
        showImage: true,
        color: 'white',
        showAskForm: false

}, action){
    switch (action.type){
        case Action.SET_FONT_SIZE:
            return {
                ...state,
                fontSize: !state.fontSize
            };
        case Action.SHOW_IMAGES:
            return {
                ...state,
                showImage: !state.showImage
            };
        case Action.SET_COLOR:
            return {
                ...state,
                color: action.payload
            };
        case Action.SHOW_ASK_FORM:
            return {
                ...state,
                showAskForm: !state.showAskForm
            };
        default:
            return state;

    }
};

module.exports = reducer;