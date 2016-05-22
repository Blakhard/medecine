/**
 * Created by vlad on 24.04.16.
 */
var React = require('react');
import classnames from 'classnames'
import config from './config';


var Disabled = require('./disabled');
var MenuHeader = require('./menu-header');
var Menu = require('./menu');
var Enroll = require('./enroll');
var Info = require('./info');
var Advantages = require('./advantages');
var Doctor = require('./doctor');
var AskForm = require('./infoComponents/ask-form');


var MainPage = React.createClass({
    contextTypes: {
        store: React.PropTypes.object.isRequired
    },
    renderAskForm: function () {
        if (this.props.showAskForm) {
            return (<AskForm/>)
        }
    },
    renderFedor: function(){
        if (this.props.fontSize){
            return <Doctor doctor={config.fedorovBig}/>
        }
        return <Doctor doctor={config.fedorov}/>
    },
    render: function () {
        const handleStateChange = (status) => {

            console.log(status.status);

        };
        var style = classnames({
            'container': this.props.showImage,
            'hideImg container': !this.props.showImage
        });
        var backgroung = classnames({
                'backgroundImg': this.props.showImage,
                '': !this.props.showImage
            },
            {
                'fontDisabled': this.props.fontSize
            });

        return (
            <div className={backgroung}>
                <div className={style}>
                    <Disabled />
                    <MenuHeader/>
                    <Menu/>
                    <Enroll/>
                    <Info/>
                    <Advantages/>

                    <div className="doctors">
                        {this.renderFedor()}
                        <Doctor doctor={config.gamov}/>
                        <Doctor doctor={config.aristova}/>
                    </div>
                    <div id="map" className="map"></div>
                    <div className="onMap">
                        <img src="style/img/bigLocationInfo.png" alt=""/>

                        <div className="mapInfo">
                            <div>ПН-ПТ 9-18</div>
                            <div>Город Лыткарино</div>
                            <div>ул. Коммунистическая 63</div>
                            <div>+7 495 552 06 21</div>
                        </div>
                    </div>
                    <span className="copyRight">&copy; ГБУЗ МО «Лыткаринская городкая больница» 2016</span>
                </div>
                {this.renderAskForm()}
            </div>
        )
    }
});
MainPage.PropTypes = {
    fontSize: React.PropTypes.number.isRequired,
    showImage: React.PropTypes.bool.isRequired,
    color: React.PropTypes.string.isRequired,
    showAskForm: React.PropTypes.bool.isRequired
};

module.exports = MainPage;
