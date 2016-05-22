/**
 * Created by vlad on 24.04.16.
 */
var React = require('react');
var Actions = require('../../actions/action');

var Disabled = React.createClass({
    contextTypes: {
        store: React.PropTypes.object.isRequired
    },
    changeFont: function(){
          this.context.store.dispatch(Actions.setFontSize())
    },
    showImages: function(){
        this.context.store.dispatch(Actions.showImages())
    },
    changeColor: function(color){
        return( function(){
            this.context.store.dispatch(Actions.setColor(color));
        }.bind(this))
    },
    render: function(){
        return (
            <div className="disabled">
                <div className="showImages" onClick = {this.showImages}>ОТКЛ изображения</div>
                <div className = "largeFont" onClick = {this.changeFont}><span>A</span></div>
            </div>
        )
    }
});
module.exports = Disabled;