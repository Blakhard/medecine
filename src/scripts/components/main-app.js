/**
 * Created by vlad on 24.04.16.
 */
var React = require('react');
var MainPageContainer = require('./mainPage/main-page-container');


var MainApp = React.createClass({

    render: function () {
        return (
            <div>
                <MainPageContainer/>

            </div>
        )
    }
});
module.exports = MainApp;