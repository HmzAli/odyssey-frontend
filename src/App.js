import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import UserContext from './user-context'
import userService from './services/users.service'
import authService from "./services/auth.service"

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Header from './components/Header'
import UserList from './components/UserList'

import NotFound from "./components/NotFound"
import Alert from './components/Alert'

class App extends Component {
    constructor() {
        super()

        this.state = {
            user: null,
            users: [],
            alert: null
        }
    }

    get loggedIn() {
        return !!this.state.user
    }

    componentDidMount() {
        const user = authService.getUser()

        if (!!user) {
            this.setState({user})
            this.getUsers()
        }
    }
  
    login = (username, password) => {
        this.setState({user: null})
        userService.login(username, password)
            .then(user => {
                this.setState({user})
                authService.saveUser(user)
            })
            .catch(this.handleError)

        this.getUsers()
    }

    logout = () => {
        authService.clearUser()
        this.setState({user: null, users: []})
    }

    getUsers() {
        userService.getAll()
            .then(users => this.setState({users}))
            .catch(this.handleError)
    }

    deleteUser(id) {
        userService._delete(id)
            .then(() => this.handleSuccess('User deleted'))
            .catch(this.handleError)
    }

    /**
     * Manages access to pages
     * @param {*} path 
     */
    getRoute(path) {
        if (!this.loggedIn) {
            return <Redirect to="/login" />
        }

        if (['/', '/dashboard'].includes(path)) {
            return <Dashboard user={this.state.user} />
        }

        if (path === '/users') {
            return <UserList users={this.state.users} />
        }

        if (path === '/about') {
            return <About />
        }

        if (path === '/login') {
            /* Already logged in. Redirect to dashboard */
            return <Redirect to="/dashboard" />
        }

        if (path === '/logout') {
            this.logout()
            return <Redirect to="/login" />
        }

        return <Route component={NotFound} />
    }

    handleError = error => {
        console.log(error);
        this.setState({
            alert: {
                type: 'error',
                message: error.message
            }
        })
    }

    handleSuccess(message) {
        this.setState({
            alert: {
                type: 'success',
                message: message
            }
        })
    }

    render() {
        return (
            <div id="wrapper">
                <UserContext.Provider value={this.state.user}>
                    <Router>
                        <Header loggedIn={this.loggedIn}/>

                        <Switch>
                            <Route exact path="/" render={() => this.getRoute('/')} />
                            <Route exact path="/dashboard" render={() => this.getRoute('/dashboard')} />
                            <Route exact path="/users" render={() => this.getRoute('/users')} />
                            <Route exact path="/about" render={() => this.getRoute('/about')} />
                            <Route exact path="/login" render={() => this.loggedIn ? <Redirect to="/dashboard"/> : <Login login={this.login} handleError={this.handleError}/> } />
                            <Route exact path="/logout" render={() => this.getRoute('/logout')} />
                            <Route component={NotFound}></Route>
                        </Switch>
                    </Router>
                </UserContext.Provider>

                {!!this.state.alert ? <Alert type={this.state.alert.type} message={this.state.alert.message} /> : ''}
            </div>
        )
    }
}

export default App
