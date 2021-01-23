import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    useHistory
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

    render() {
        return (
            <div id="wrapper">
                <Router>
                    <Header loggedIn={this.loggedIn}/>

                    <Switch>
                        <Route 
                            exact 
                            path="/dashboard" 
                            render={() => this.loggedin ? <Dashboard user={this.state.user} /> : <Login />} />

                        <Route
                            exact 
                            path="/users" 
                            render={() => this.loggedIn ? <UserList users={this.state.users} /> : <Login />} />

                        <Route 
                            exact
                            path="/about" render={() => this.loggedIn ? <About /> : <Login />} />
                
                        <Route exact path="/login" render={() => <Login />} />
                        <Route component={NotFound}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
