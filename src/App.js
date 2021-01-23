import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import userService from './services/users.service'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Header from './components/Header'
import UserList from './components/UserList'
import NotFound from "./components/NotFound";

class App extends Component {
    constructor() {
        super()

        this.state = {
            user: null,
            users: []
        }
    }

    get loggedIn() {
        return !!this.state.user
    }

    componentDidMount() {
        
    }
  
    componentWillUnmount() {
    }

    login(username, password) {

    }

    getUsers() {

    }

    getUser(id) {

    }

    deleteUser(id) {
        
    }

    getRoute(path) {
        if (!this.loggedIn) {
            return <Redirect to="/login" />
        }

        if (['/', '/dashboard'].includes(path)) {
            return <Dashboard user={this.state.user} />
        }

        if (path === '/users') {
            return <UserList users={this.state.user} />
        }

        if (path === '/about') {
            return <About />
        }

        if (path === '/login') {
            /* Already logged in. Redirect to dashboard */
            return <Redirect to="/dashboard" />
        }

        return <Route component={NotFound} />
    }

    render() {
        return (
            <div id="wrapper">
                <Router>
                    <Header loggedIn={this.loggedIn}/>

                    <Switch>
                        <Route exact path="/" render={() => this.getRoute('/')} />
                        <Route exact path="/dashboard" render={() => this.getRoute('/dashboard')} />
                        <Route exact path="/users" render={() => this.getRoute('/users')} />
                        <Route exact path="/about" render={() => this.getRoute('/about')} />
                        <Route exact path="/login" render={() => this.loggedIn ? <Redirect to="/dashboard"/> : <Login /> } />
                        <Route component={NotFound}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
