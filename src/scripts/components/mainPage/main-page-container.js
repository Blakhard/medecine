/**
 * Created by vlada on 24.04.2016.
 */
var React = require('react');
var ReactRedux = require('react-redux');
var MainPage = require('./main-page');

const mainPageStatetoProps = state => {

    var t = {
        fontSize: state.fontSize,
        showImage: state.showImage,
        color: state.color,
        showAskForm: state.showAskForm
    }
    return t;
};

const MainPageContainer = ReactRedux.connect(mainPageStatetoProps)(MainPage);

module.exports = MainPageContainer;
