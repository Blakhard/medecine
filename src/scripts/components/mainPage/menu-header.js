/**
 * Created by vlada on 24.04.2016.
 */
import React from 'react';
import classnames from 'classnames';

var MenuHeader = React.createClass({
    getInitialState: function () {
        return ({
            padding: false
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
            this.setState({
                padding: true
            });
        }
        else {
            this.setState({
                padding: false
            });
        }
    },
    scrollToMap: function(e){
        document.getElementById('map').scrollIntoView()
    },

    render: function() {
        var style = classnames ({
            'menuHeader onSticky': this.state.padding,
            'menuHeader': !this.state.padding
        });
        return(
            <div id="menuHeader" className={style}>
                <img src="style/img/coatOfArms.png" alt="Coat of Arms" className="coatOfArms"/>
                <div className="headerName">
                    <h1><b>ОТДЕЛЕНИЕ УРОЛОГИИ</b></h1>
                    <h3>+7 495&nbsp;<div>552-06-21</div></h3>
                </div>
                <div className="headerAddress">
                    <span>МО г. Лыткарино ул. Коммунистическая 63</span>
                    <img src="style/img/locationIco.png" alt="" onClick={this.scrollToMap}/>
                </div>
            </div>
        )
    }
});

module.exports = MenuHeader;