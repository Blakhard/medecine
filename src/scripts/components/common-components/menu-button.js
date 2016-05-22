/**
 * Created by vlad on 24.04.16.
 */
/**
 * Created by vlada on 24.04.2016.
 */
import React from 'react';
import classnames from 'classnames'
var Link = require('react-router').Link;

var MenuButton = React.createClass({

    render: function(){
        var style = classnames({
            'menuButton activeMenuElem': this.props.active,
            'menuButton': !this.props.active
        });
        return (
            //to make work styles delete 1 if in link src
            <Link activeClassName={style} to={this.props.url}>{this.props.name}</Link>

        )
    }
});

module.exports = MenuButton;