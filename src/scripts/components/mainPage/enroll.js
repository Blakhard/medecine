/**
 * Created by vlada on 26.04.2016.
 */
import React  from 'react';

var Enroll = React.createClass({
    clickHandler: function () {
      window.location.href = "http://new.vk.com/away.php?to=https%3A%2F%2Fuslugi.mosreg.ru%2Fzdrav%2F%3Fpopup%3Dalternative-appointment%26city%3D57074346%26lpucode%3D250106%26specid%3D1137%26week%3D0"
    },
    render: function(){
        return (
            <div className="enroll" onClick = {this.clickHandler}>
                <span>ЗАПИСАТЬСЯ НА ПРИЁМ К СПЕЦИАЛИСТУ</span>
            </div>
        )
    }
});
module.exports = Enroll;