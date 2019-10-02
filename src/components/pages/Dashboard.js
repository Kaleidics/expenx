import React from "react";
import { connect } from 'react-redux';

import Dashbar from "../elements/DashBar";
import OverviewContainer from "../elements/OverviewContainer";
import ExpenseContainer from '../elements/ExpenseContainer';
import { fetchExpenses } from '../../actions/index';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchExpenses());
    }

    render() {
        return (
            <main className="dashboard">
                <Dashbar />
                <section className="dashboard__main-content">
                    <div className="dashboard__main-content--left">
                        <OverviewContainer />
                    </div>
                    <div className="dashboard__main-content--right">
                        <ExpenseContainer />
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.app.auth
});

export default connect(mapStateToProps)(Dashboard);