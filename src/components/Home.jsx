import React, { Component } from 'react'

export default class Home extends Component {
    constructor(promps){
        super(promps);
        this.person = {
            fastName : "Abu Md",
            lastName : "Nayeem Khan",
            fullName : function(){
                return this.fastName + " " + this.lastName;
            },
            prof : {
                Prof1 : "Student",
                Prof2 : "Web Dev"
            }
        }
    }
    render() {
        return (
            <div>
                <h1>I am a {this.person.prof.Prof2}</h1>
            </div>
        )
    }
}
