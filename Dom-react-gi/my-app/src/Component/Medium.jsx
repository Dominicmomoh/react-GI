import React, {Component} from "react";

class  BasicInfo extends Component {
    constructor(props){
        super();
        this.state = {
            person: {
                name: props.name,
                number: props.number,
                DOB: props.DOB,
                City: props.City,
                Country: props.Country
            }
        };
    }

    render() {
        return (
            <div className="person">
                <h2>name: {this.state.person.name}</h2>
                <h3>number: {this.state.person.number}</h3>
                <h3>DOB: {this.state.person.DOB}</h3>
                <h3>City: {this.state.person.City}</h3>
                <h3>Country: {this.state.person.Country}</h3>
            </div>
        );
    }
}

export default BasicInfo;