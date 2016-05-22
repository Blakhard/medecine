/**
 * Created by vlada on 09.05.2016.
 */
import React from 'react';
var Action = require('../../../actions/action');

var AskForm = React.createClass({
    contextTypes: {
        store: React.PropTypes.object.isRequired
    },
    closeAskForm: function(){
        this.context.store.dispatch(Action.showAskForm());
    },

    sendMail: function(){
        var link = "mailto:qwebek@mail.ru"
            + "?cc=fokstrot999@ya.ru"
            + "&subject=" + "suka";
        window.location.href = link;
    },
    render: function (){
        return (
            <div className="askForm">
                <div className="askContent">
                    <div className="askTitle">
                        Задайте Ваш вопрос специалисту
                    </div>
                    <div className="askMain">
                        <div>
                            ВАШЕ ИМЯ
                            <input placeholder="Имя" id="askName" type="text"/>
                        </div>
                        <div>
                            <span>ВАШ ЭЛЕКТРОННЫЙ АДРЕС<b style={{color: 'red'}}>*</b></span>
                            <input placeholder="Email" id="askEmail" type="email"/>
                        </div>
                        <div>
                            <span>ВАШ ВОПРОС<b style={{color: 'red'}}>*</b></span>
                            <textarea placeholder="Текст вопроса" id="askQuestion" type="text"/>
                        </div>
                        <button className="btn" onClick={this.sendMail}>отправить вопрос</button>
                    </div>
                </div>
                <img onClick={this.closeAskForm} src="style/img/close.png" alt=""/>
            </div>
        )
    }
});

module.exports = AskForm;