import { React, Component } from 'react'
import { NavLink } from 'react-router-dom';

import UserContext from '../../user-context'

class Dashboard extends Component {
    constructor() {
        super()
    }

    static contextType = UserContext

    render() {
        const user = this.context;

        return (
            <div className="dashboard">
                <span className="badge badge-info mb-2">{user.role}</span>
                <h4> Welcome <strong className="text-success">{user.name}</strong>!</h4>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores </p>
                
                <p>eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. </p>

                <NavLink className="btn btn-danger" to="/logout" exact={true}>Logout</NavLink>
            </div>
        )
    }
}

export default Dashboard