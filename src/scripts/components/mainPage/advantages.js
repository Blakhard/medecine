/**
 * Created by vlada on 26.04.2016.
 */
import React from 'react';

var Advantages = React.createClass({

    render: function(){
        return (
            <div className="advantages">
                <div className="advTitle">
                    ПРЕИМУЩЕСТВА И МЕТОДЫ ЛЕЧЕНИЯ В НАШЕМ ОТДЕЛЕНИИ
                </div>
                <div className="advInfo">
                    <img src="style/img/advDoc.png" alt=""/>
                    <div className="advInfoText">
                        <div className="advInfoTextElem">
                            <img src="style/img/ok.png" alt=""/>
                            <span>современное оборудование</span>
                        </div>
                        <div className="advInfoTextElem">
                            <img src="style/img/ok.png" alt=""/>
                            <span>высококвалифицированные специалисты</span>
                        </div>
                        <div className="advInfoTextElem">
                            <img src="style/img/ok.png" alt=""/>
                            <span>высокотехнологическое лечение</span>
                        </div>
                        <div className="advInfoTextElem">
                            <img src="style/img/ok.png" alt=""/>
                            <span>самые сложные операции</span>
                        </div>
                    </div>
                    <img src="style/img/advIns.png" alt=""/>
                </div>
                <div className="advFooter">
                    <div className="centerInfo">
                        <div className="advFooterInfo">лапараскопические</div>
                        <img src="style/img/points.png" alt=""/>
                        <div className="methods">МЕТОДЫ</div>
                        <img src="style/img/points.png" alt=""/>
                        <div className="advFooterInfo">эндоскопические</div>
                    </div>
                    <i className="fa fa-angle-right fa-3x" aria-hidden="true"/>
                </div>
            </div>
            
        )
    }
});

module.exports = Advantages;