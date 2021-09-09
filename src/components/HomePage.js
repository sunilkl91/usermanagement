import React from 'react';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: JSON.parse(localStorage.getItem('userlist')),
            loginUser: JSON.parse(localStorage.getItem('loginUser'))
        }
    }
    logOut() {
        this.setState({ userData: {}, loginUser: {} });
        localStorage.removeItem('loginUser');
        this.props.history.push('/login')
    }
    render() {
        return (
            <div> {
                this.state.loginUser ?.role == 'admin' ?
                    <div>
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a className="cursorpointer" onClick={this.logOut.bind(this)}><span className="glyphicon glyphicon-log-in" ></span> Logout</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="col-md-6 col-md-offset-3">
                            <h1>User List</h1>
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.userData.map(function (data) {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.firstname}</td>
                                                <td>{data.lastname}</td>
                                                <td>{data.role}</td>
                                            </tr>)
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div> : null
            }
                {
                    this.state.loginUser ?.role == 'user' ?
                        <div>
                            <nav className="navbar navbar-inverse">
                                <div className="container-fluid">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a className="cursorpointer" onClick={this.logOut.bind(this)}><span className="glyphicon glyphicon-log-in" ></span> Logout</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <h1>Hi {this.state.loginUser ?.firstname}!</h1>
                        </div>
                        : null
            }
            </div>
        )
    }

}