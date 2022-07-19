import React, {Component} from "react";

export default class BasicInfo extends Component {
    render () {
        return (
            <div> 
                <P>{this.props.name}</P>
                <h1>{this.props.number}</h1>
                <h1>{this.props.DOB}</h1>
                <h1>{this.props.City}</h1>
                <h1>{this.props.Country}</h1>
            </div>
        );
    }    
}

