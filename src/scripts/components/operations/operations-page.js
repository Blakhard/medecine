/**
 * Created by vlada on 22.05.2016.
 */
import React from 'react';
import classnames from 'classnames'

var Disabled = require('./../common-components/disabled');
var Menu = require('./../common-components/menu');
var Content = require('./content');


var OperationsPage = React.createClass({
    render: function () {
        var style = classnames({
            'container': this.props.showImage,
            'hideImg container': !this.props.showImage
        });
        var backgroung = classnames({
                'backgroundImg': this.props.showImage,
                '': !this.props.showImage
            },
            {
                'fontDisabled': this.props.fontSize
            });
        return (
            <div className={backgroung}>
                <div className={style}>
                    <Disabled/>
                    <Menu button={3}/>
                    <Content/>
                </div>
            </div>
        )
    }
});

OperationsPage.PropTypes = {
    fontSize: React.PropTypes.number.isRequired,
    showImage: React.PropTypes.bool.isRequired,
    color: React.PropTypes.string.isRequired,
    showAskForm: React.PropTypes.bool.isRequired
};

module.exports = OperationsPage;