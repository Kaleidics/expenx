import React from "react";
import Dashbar from "../elements/DashBar";
import OverviewContainer from "../elements/OverviewContainer";
import ExpenseContainer from '../elements/ExpenseContainer';

export default class Dashboard extends React.Component {
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
