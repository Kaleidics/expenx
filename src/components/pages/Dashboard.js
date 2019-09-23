import React from 'react';
import Dashbar from '../elements/DashBar';
import OverviewContainer from '../elements/OverviewContainer';

export default class Dashboard extends React.Component {
    render() {
        return (
            <main className="dashboard">
                <Dashbar />
                <section className="dashboard__main-content">
                    <OverviewContainer />
                </section>
            </main>
        )
    }
}