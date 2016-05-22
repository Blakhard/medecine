/**
 * Created by vlada on 26.04.2016.
 */
var React = require('react');

var Illnesses = React.createClass({
    getInitialState: function (){
        return({
            enterIll: false
        })
    },
    componentDidMount: function () {
        document.getElementById("illnesses").addEventListener('mouseenter', this.handleEnterIll, false);
        document.getElementById("illnesses").addEventListener('mouseleave', this.handleLeaveIll, false);
    },
    componentWillUnmount: function () {
        document.getElementById("illnesses").removeEventListener('mouseenter', this.handleEnterIll, false);
        document.getElementById("illnesses").removeEventListener('mouseleave', this.handleLeaveIll, false);
    },
    handleEnterIll: function(){
        this.setState({
            enterIll: true
        })
    },
    handleLeaveIll: function(){
        this.setState({
            enterIll: false
        })
    },
    textRenderIll: function(){
        if (this.state.enterIll){
            return "ПОДРОБНЕЕ..."
        }
        return "ЗАБОЛЕВАНИЯ И ОПЕРАЦИИ"
    },
    render: function (){
        return (
            <div id="illnesses" className="illnesses">
                <div className="illnessesInfo">
                    <b>ЗАБОЛЕВАНИЯ И ОПЕРАЦИИ</b>
                    <ul>
                        <li>эпидидимит, орхит</li>
                        <li>цистит, цистоскопия</li>
                        <li>пиелонефрит</li>
                        <li>диагностика рака простаты, биопсия...</li>
                        <li>рак простаты, радикальная простатэктомия</li>
                    </ul>
                </div>
                <div className="illnessesBtn">
                    {this.textRenderIll()}
                </div>
            </div>
        )
    }
});

module.exports = Illnesses;