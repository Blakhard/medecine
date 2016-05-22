/**
 * Created by vlada on 24.04.2016.
 */
import React from 'react';
import classnames from 'classnames';
var MenuButton = require('./menu-button');


var Menu = React.createClass({
    getInitialState: function () {
        return ({
            sticky: false
        })
    },
    componentDidMount: function () {
        window.addEventListener('scroll', this.handleScroll, true);
    },

    componentWillUnmount: function () {
        window.removeEventListener('scroll', this.handleScroll);
    },

    handleScroll: function (event) {
        var p = document.getElementById('menuHeader').getBoundingClientRect();
        if (p.bottom - 57 <= 0.1) {
            this.setState({sticky: true});
        }
        else {
            this.setState({sticky: false});
        }
    },

    render: function () {
        var styles = classnames({
            'menuSticky': this.state.sticky,
            'menu': !this.state.sticky
        });

        return (
            <div id="menu" className={styles}>
                <div className="firstRow">
                    <MenuButton name="ОБ ОТДЕЛЕНИИ"/>
                    <MenuButton name="ДИАГНОСТИКА"/>
                    <MenuButton name="ОПЕРАЦИИ"/>
                    <MenuButton name="РЕКОМЕНДАЦИИ"/>
                </div>
                <div className="secondRow">
                    <MenuButton name="ГОСПИТАЛИЗАЦИЯ"/>
                    <MenuButton name="СПЕЦИАЛИСТЫ"/>
                    <MenuButton name="КОНТАКТЫ"/>
                    <form id="inputForm" action="search.html">
                        <input id="menuInput" type="text" placeholder="найти..."/>
                        <img src="style/img/search1.png" alt=""/>
                    </form>
                </div>

            </div>
        )
    }
});

module.exports = Menu;