import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import incomeAPI from '../../utils/incomeAPI';
import expenseAPI from '../../utils/expenseAPI';

class Dashboard extends Component {
    state = {
        incomeData : [],
    }
    
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }
    getIncome = () => {
        incomeAPI.getIncomes().then(data => {
            if (data.length > 0) this.setState({
                incomeData : data
            }) 
        });
    }
    render() {
        const { user } = this.props.auth;

        return (
            <div className="container valign-wrapper" style={{ height: "75vh" }}>
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Hey there,</b> {user.name.split(" ")[0]}
                            <p className="flow-text grey-text text-darken-1">
                                You are logged in
                            </p>
                        </h4>
                        <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
                            width: "150px",
                            borderRadius: 30,
                            letterSpacing: "1.5px",
                            marginTop: "1rem",
                        }} onClick={this.onLogoutClick}>
                            Logout
                        </button>
                  
                  </div>
                    <div>{this.state.incomeData.map(income => <p>{income._id}</p>)}</div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Dashboard);