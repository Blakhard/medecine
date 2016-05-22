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
        if (document.getElementById('menuHeader')) return;
        var p = document.getElementById('menuHeader').getBoundingClientRect();
        if (p.bottom - 57 <= 0.1) {
            this.setState({sticky: true});
        }
        else {
            this.setState({sticky: false});
        }
    },
    ren1: function () {
        if (this.props.button == 1) {
            return <MenuButton active={true} url="lol" name="ОБ ОТДЕЛЕНИИ"/>
        }
        return <MenuButton active={false} url="lol" name="ОБ ОТДЕЛЕНИИ"/>
    },
    ren2: function () {
        if (this.props.button == 2) {
            return <MenuButton active={true} url="lol" name="ДИАГНОСТИКА"/>
        }
        return <MenuButton active={false} url="lol" name="ДИАГНОСТИКА"/>
    },
    ren3: function () {
        if (this.props.button == 3) {
            return <MenuButton active={true} url="operations" name="ОПЕРАЦИИ"/>
        }
        return <MenuButton active={false} url="operations" name="ОПЕРАЦИИ"/>
    },
    ren4: function () {
        if (this.props.button == 4) {
            return <MenuButton active={true} url="lol" name="РЕКОМЕНДАЦИИ"/>
        }
        return <MenuButton active={false} url="lol" name="РЕКОМЕНДАЦИИ"/>
    },
    ren5: function () {
        if (this.props.button == 5) {
            return <MenuButton active={true} url="lol" name="ГОСПИТАЛИЗАЦИЯ"/>
        }
        return <MenuButton active={false} url="lol" name="ГОСПИТАЛИЗАЦИЯ"/>
    },
    ren6: function () {
        if (this.props.button == 6) {
            return <MenuButton active={true} url="lol" name="СПЕЦИАЛИСТЫ"/>
        }
        return <MenuButton active={false} url="lol" name="СПЕЦИАЛИСТЫ"/>
    },
    ren7: function () {
        if (this.props.button == 7) {
            return <MenuButton active={true} url="lol" name="КОНТАКТЫ"/>
        }
        return <MenuButton active={false} url="lol" name="КОНТАКТЫ"/>
    },

    render: function () {
        var styles = classnames({
                'menuSticky': this.state.sticky,
                'menu': !this.state.sticky
            },
            {
                '': !this.props.button,
                'fixed': this.props.button
            });

        return (
            <div id="menu" className={styles}>
                <div className="firstRow">
                    {this.ren1()}
                    {this.ren2()}
                    {this.ren3()}
                    {this.ren4()}
                </div>
                <div className="secondRow">
                    {this.ren5()}
                    {this.ren6()}
                    {this.ren7()}
                    <form id="inputForm" action="search.html">
                        <input id="menuInput" type="text" placeholder="найти..."/>
                        <img src="/style/img/search1.png" alt=""/>
                    </form>
                </div>

            </div>
        )
    }
});

module.exports = Menu;