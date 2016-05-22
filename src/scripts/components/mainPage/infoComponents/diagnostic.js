/**
 * Created by vlada on 26.04.2016.
 */
var React = require('react');

var Diagnostic = React.createClass({
    getInitialState: function (){
        return({
            enterDia: false
        })
    },
    componentDidMount: function () {
        document.getElementById("diagnostic").addEventListener('mouseenter', this.handleEnterDia, false);
        document.getElementById("diagnostic").addEventListener('mouseleave', this.handleLeaveDia, false);
    },
    componentWillUnmount: function () {
        document.getElementById("diagnostic").removeEventListener('mouseenter', this.handleEnterDia, false);
        document.getElementById("diagnostic").removeEventListener('mouseleave', this.handleLeaveDia, false);
    },
    handleEnterDia: function(){
        this.setState({
            enterDia: true
        })
    },
    handleLeaveDia: function(){
        this.setState({
            enterDia: false
        })
    },
    textRenderDia: function(){
        if (this.state.enterDia){
            return "ПОДРОБНЕЕ..."
        }
        return "ДИАГНОСТИКА"
    },
    render: function (){
        return (
            <div id="diagnostic" className="diagnostic">
                <div className="diagnosticInfo">
                    <b>ДИАГНОСТИКА</b>
                    <ul>
                        <li>лабораторное...</li>
                        <li>УЗИ</li>
                        <li>рентгенологи...</li>
                        <li>МРТ малого таза</li>
                        <li>радиоизотопн...</li>
                        <li>уродиномичес...</li>
                    </ul>
                </div>
                <div className="diagnosticBtn">
                    {this.textRenderDia()}
                </div>
            </div>
        )
    }
});

module.exports = Diagnostic;