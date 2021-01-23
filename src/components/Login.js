import {React, Component} from 'react'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) => {

    }

    render() {
        return (
            <div className="login-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="input-label"> Username </label>
                        <input type="text" name="username" onChange={this.handleChange}></input>
                    </div>

                    <div className="form-group">
                        <label className="input-label"> Password </label>
                        <input type="text" name="password" onChange={this.handleChange}></input>
                    </div>

                    <button type="submit"> Login </button>
                </form>
            </div>
        )
    }
}

export default Login