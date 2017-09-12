import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
}

class Login extends PureComponent{

    onSubmit = () => {
        const Username = document.getElementById('Username').value
        const Password = document.getElementById('Password').value
        console.log('Username: ', Username)
        console.log('Password: ', Password)
    }

    render(){
        return(
            <div id="LoginContainer">
                <div id="LoginWelcome">
                    Welcome to ggHR!!
                </div>
                <div id="Login">
                    <TextField id="Username" className="LoginText" hintText="Username"/><br />
                    <TextField id="Password" className="LoginText" hintText="Password"/><br />
                </div>
                <div id="Submit">
                    <RaisedButton onClick={this.onSubmit} label="Sign in" style={style} />
                </div>                                
            </div>
        )
    }
}

export default Login