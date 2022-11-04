import React, { Component } from 'react';

export default class Textbox extends Component {
    render(){
        return(
            <div className="textbox">
                <p>If you wish to purchase firewood, we'll need an email we can the send order information to.</p>
                <br></br>
                <form>
                    <label for="email">
                        Enter email:     
                        <input type="text" id ="email" name="email" />
                    </label>
                    <br></br>
                    <label for="conemail">
                        Confirm email: 
                        <input type="text" id ="conemail" name="conemail" />
                    </label>
                    <br></br>
                    <input type="submit" value="Continue" />
                </form>
            </div>
        );            
    }
}