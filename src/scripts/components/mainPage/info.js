/**
 * Created by vlada on 26.04.2016.
 */
var React = require('react');

var RightPanel = require('./infoComponents/right-panel');
var Illnesses = require('./infoComponents/illnesses');
var Diagnostic = require('./infoComponents/diagnostic');
var Recommendations = require('./infoComponents/recommendations');
var Info = React.createClass({
    render: function (){
        return (
            <div className="info">
                <Illnesses/>
                <Diagnostic/>
                <RightPanel/>
                <Recommendations/>
            </div>
        )
    }
});

module.exports = Info;