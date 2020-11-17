import React, {Component} from 'react';

export default class LoginComponent extends Component {
    constructor(){
        super()
        this.state ={
            isLoggedIn: false
        }
    }
    render(){
        let logged; 
        if (this.state.isLoggedIn){
            logged = "In"
        }else {
            logged = "Out"
        }
       return (
           <div>
               <h1>You are currently logged {logged}</h1>
           </div>
       ) 
    }
} 