/**
 * Created by vlada on 24.04.2016.
 */
var React = require('react');
var ReactRedux = require('react-redux');
var OperationsPage = require('./operations-page');

const opStatetoProps = state => {

    var t = {
        fontSize: state.fontSize,
        showImage: state.showImage,
        color: state.color,
        showAskForm: state.showAskForm
    };
    return t;
};

const OperationsPageContainer = ReactRedux.connect(opStatetoProps)(OperationsPage);

module.exports = OperationsPageContainer;
