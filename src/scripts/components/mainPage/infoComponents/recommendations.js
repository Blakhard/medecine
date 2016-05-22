/**
 * Created by vlada on 26.04.2016.
 */
var React = require('react');

var Recomendations = React.createClass({
    getInitialState: function (){
        return({
            enterRec: false
        })
    },
    componentDidMount: function () {
        document.getElementById("recommendations").addEventListener('mouseenter', this.handleEnterRec, false);
        document.getElementById("recommendations").addEventListener('mouseleave', this.handleLeaveRec, false);
    },
    componentWillUnmount: function () {
        document.getElementById("recommendations").removeEventListener('mouseenter', this.handleEnterRec, false);
        document.getElementById("recommendations").removeEventListener('mouseleave', this.handleLeaveRec, false);
    },
    handleEnterRec: function(){
        this.setState({
            enterRec: true
        })
    },
    handleLeaveRec: function(){
        this.setState({
            enterRec: false
        })
    },
    textRenderRec: function(){
        if (this.state.enterRec){
            return "ПОДРОБНЕЕ..."
        }
        return "РЕКОМЕНДАЦИИ ПАЦИЕНТАМ"
    },
    render: function () {

        return (
            <div id="recommendations" className="recommendations">
                <div className="recommendationsInfo">
                    <b>РАЗДЕЛ НАХОДИТСЯ В РАЗРАБОТКЕ</b>
                </div>
                <div className="recommendationsBtn">
                    {this.textRenderRec()}
                </div>
            </div>
        )
    }
});

module.exports = Recomendations;