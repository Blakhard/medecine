/**
 * Created by vlad on 24.04.16.
 */
/**
 * Created by vlada on 24.04.2016.
 */
import React from 'react';


var MenuButton = React.createClass({

    render: function(){
        return (
            <div className="menuButton">
                <a>{this.props.name}</a>
            </div>
        )
    }
});

module.exports = MenuButton;