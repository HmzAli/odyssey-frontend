import { React, Component } from 'react'

import { NavLink } from 'react-router-dom';

class AddUser extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            passwordConfirm: '',
            role: ''
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

        if (!this.state.name) {
            return this.props.handleError(new Error('Name is required'))
        }

        if (!this.state.username) {
            return this.props.handleError(new Error('Username is required'))
        }

        if (!this.state.email) {
            return this.props.handleError(new Error('Email is required'))
        }

        if (!this.state.password || !this.state.passwordConfirm) {
            return this.props.handleError(new Error('Password is required'))
        }

        if (this.state.password !== this.state.passwordConfirm) {
            return this.props.handleError(new Error('Password and password confirmation don\'t match'))
        }

        if (!this.state.role) {
            this.setState({role: 'user'})
        }

        this.props.addUser(this.state)
            .then(() => this.setState({added: true}))
    }

    render() {
        return (
            <div className="form-wrapper">
                <h4 className="text-center mb-4"> Add new user </h4>

                <form method="post" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="input-label"> Name </label>
                        <input className="form-control" type="text" name="name" onChange={this.handleChange}></input>
                    </div>
                
                    <div className="form-group">
                        <label className="input-label"> Username </label>
                        <input className="form-control" type="text" name="username" onChange={this.handleChange}></input>
                    </div>

                    <div className="form-group">
                        <label className="input-label"> Email </label>
                        <input className="form-control" type="email" name="email" onChange={this.handleChange}></input>
                    </div>

                    <div className="form-group">
                        <label className="input-label"> Password </label>
                        <input className="form-control" type="password" name="password" onChange={this.handleChange}></input>
                    </div>

                    <div className="form-group">
                        <label className="input-label"> Password confirm </label>
                        <input className="form-control" type="password" name="passwordConfirm" onChange={this.handleChange}></input>
                    </div>

                    <div className="form-group">
                        <label className="input-label"> Role </label>

                        <div className="custom-control custom-radio">
                            <input id="role1" type="radio" name="role" value="admin" className="custom-control-input" onChange={this.handleChange} />
                            <label className="custom-control-label" htmlFor="role1"> Admin </label>
                        </div>

                        <div className="custom-control custom-radio">
                            <input id="role2" type="radio" name="role" value="user" className="custom-control-input" onChange={this.handleChange} />
                            <label className="custom-control-label" htmlFor="role2"> User </label>
                        </div>
                    </div>

                    <button className="btn btn-primary btn-block" type="submit"> Submit </button>
                </form>

                <NavLink className="nav-link text-center" to="/users" exact={true}>Back to users</NavLink>
            </div>
        )
    }
}

export default AddUser
