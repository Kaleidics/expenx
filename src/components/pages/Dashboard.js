import React from "react";
import { connect } from 'react-redux';

import Dashbar from "../elements/DashBar";
import OverviewContainer from "../elements/OverviewContainer";
import ExpenseContainer from '../elements/ExpenseContainer';
import AddExpense from "../elements/AddExpense";

import { fetchExpenses } from '../../actions/index';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleContent: true
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchExpenses());
    }
    
    handleContent = () => {
        this.setState({
            toggleContent: !this.state.toggleContent
        });
    }

    render() {
        //conditional for choosing the expenses view or the add expenses view
        let content_right = this.state.toggleContent ? (
            <ExpenseContainer handleContent={this.handleContent} />
        ) : (
            <AddExpense handleContent={this.handleContent} />
        );

        return (
            <main className="dashboard">
                <Dashbar />
                <section className="dashboard__main-content">
                    <div className="dashboard__main-content--left">
                        <OverviewContainer />
                    </div>
                    <div className="dashboard__main-content--right">
                        {content_right}
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