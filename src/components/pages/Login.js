import { React, Component } from 'react'

import Alert from '../Alert'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            alert: null
        }
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (!this.state.username || !this.state.password) {
            return this.props.handleError(new Error('Username and password required'))
        }

        this.props.login(this.state.username, this.state.password)
    }

    render() {
        return (
            <div className="form-wrapper">
                <h4 className="text-center mb-4"> Login </h4>

                <form method="post" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="input-label"> Username </label>
                        <input className="form-control" type="text" name="username" onChange={this.handleChange}></input>
                    </div>

                    <div className="form-group">
                        <label className="input-label"> Password </label>
                        <input className="form-control"type="password" name="password" onChange={this.handleChange}></input>
                    </div>

                    <button className="btn btn-primary btn-block" type="submit"> Login </button>
                </form>

                {!!this.state.alert ? <Alert type={this.state.alert.type} message={this.state.alert.message} /> : ''}
            </div>
        )
    }
}

export default Login