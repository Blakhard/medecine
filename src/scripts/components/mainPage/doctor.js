/**
 * Created by vlada on 28.04.2016.
 */
import React from 'react';

var Doctor = React.createClass({

    //renderList: function () {
    //    var temp =[];
    //    this.props.doctor.list.forEach(function(elem, index, array){
    //        temp.push("<li>" + elem +"</li>");
    //    });
    //    return temp;
    //},

    render: function(){
        return (
            <div className={this.props.doctor.class}>
                <div className="docHide">
                    <b>{this.props.doctor.title}</b>
                    <ul>
                        {this.props.doctor.list.map(function(elem){
                            return <li> {elem} </li>
                        })}
                    </ul>
                </div>
                <div className="docInfo">
                    <div className="lastName">
                        {this.props.doctor.lastName}
                    </div>
                    <div className="firstName">
                        {this.props.doctor.firstName}
                    </div>
                </div>
            </div>

            )
    }
});

module.exports = Doctor;