import React from 'react';
import Dashbar from '../elements/DashBar';

export default class Dashboard extends React.Component {
    render() {
        return (
            <main className="dashboard">
                <Dashbar />
            </main>
        )
    }
}