/**
 * Created by vlada on 26.04.2016.
 */
var React = require('react');
import classnames from 'classnames';

var Action = require('../../../actions/action');

var RightPanel = React.createClass({
    contextTypes: {
        store: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return ({
            showSep1: true,
            showSep2: true,
            showAskForm: false
        })
    },
    componentDidMount: function () {
        document.getElementById("order").addEventListener('mouseenter', this.handleOver, false);
        document.getElementById("order").addEventListener('mouseleave', this.handleOut, false);
        document.getElementById("freqQuestions").addEventListener('mouseenter', this.handleOver, false);
        document.getElementById("freqQuestions").addEventListener('mouseleave', this.handleOut, false);
        document.getElementById("ask").addEventListener('mouseenter', this.handleOver, false);
        document.getElementById("ask").addEventListener('mouseleave', this.handleOut, false);
    },
    componentWillUnmount: function () {
        document.getElementById("order").removeEventListener('mouseenter', this.handleOver, false);
        document.getElementById("order").removeEventListener('mouseleave', this.handleOut, false);
        document.getElementById("freqQuestions").removeEventListener('mouseenter', this.handleOver, false);
        document.getElementById("freqQuestions").removeEventListener('mouseleave', this.handleOut, false);
        document.getElementById("ask").removeEventListener('mouseenter', this.handleOver, false);
        document.getElementById("ask").removeEventListener('mouseleave', this.handleOut, false);
    },
    handleOver: function (event) {
        switch (event.target.id) {
            case "order":
                this.setState({
                    showSep1: false,
                    showSep2: true
                });
                break;
            case "freqQuestions":
                this.setState({
                    showSep1: false,
                    showSep2: false
                });
                break;
            case "ask":
                this.setState({
                    showSep1: true,
                    showSep2: false
                });
                break;
            default:
        }
    },
    handleOut: function (event) {
        switch (event.target.id) {
            case "order":
                this.setState({
                    showSep1: true,
                    showSep2: true
                });
                break;
            case "freqQuestions":
                this.setState({
                    showSep1: true,
                    showSep2: true
                });
                break;
            case "ask":
                this.setState({
                    showSep1: true,
                    showSep2: true
                });
                break;
            default:
        }
    },
    askClick: function(event){
        //console.log('click');
        this.context.store.dispatch(Action.showAskForm());
    },

    render: function () {
        var separator1 = classnames({
            'showSeparator': this.state.showSep1,
            'hideSeparator': !this.state.showSep1
        });
        var separator2 = classnames({
            'showSeparator': this.state.showSep2,
            'hideSeparator': !this.state.showSep2
        });

        return (
            <div id="rightPanel" className="rightPanel">
                <div id="order" className="order">
                    <img src="style/img/orderIcon.png" alt=""/>
                    <div className="textContainer">
                        <div className="text">ПОРЯДОК ГОСПИТАЛИЗАЦИИ</div>
                        <i className="fa fa-angle-right fa-3x" aria-hidden="true"/>
                    </div>
                </div>
                <div className={separator1}></div>
                <div id="freqQuestions" className="freqQuestions">
                    <img src="style/img/questionIcon.png" alt=""/>
                    <div className="textContainer">
                        <div className="text">ЧАСТО ЗАДОВАЕМЫЕ ВОПРОСЫ</div>
                        <i className="fa fa-angle-right fa-3x" aria-hidden="true"/>
                    </div>
                </div>
                <div className={separator2}></div>
                <div id="ask" className="ask" onClick = {this.askClick}>
                    <img src="style/img/askIcon.png" alt=""/>
                    <div className="textContainer">
                        <div className="text">ЗАДАЙТЕ ВОПРОС СПЕЦИАЛИСТУ</div>
                        <i className="fa fa-angle-right fa-3x" aria-hidden="true"/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = RightPanel;