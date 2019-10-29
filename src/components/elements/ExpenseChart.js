import React from "react";
import { Line } from "react-chartjs-2";

export default class ExpenseChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            marketData: [100, 200, 300],
            chartData: {
                labels: ["Jan", "Feb", "Mrch", "asda", "asa", "asva", "as", "July", "September", "October", "November"],
                datasets: [
                    {
                        backgroundColor: "rgba(142, 243, 197, 0.5)",
                        pointBackgroundColor: "#fff",
                        pointStyle: "crossRot",
                        label: "Monthly Expenses",
                        borderColor: "#2be1d8",
                        borderWidth: 5,
                        borderJoinStyle: "round",
                        lineTension: 0.3,
                        fontColor: "#fff",
                        hitRadius: 5,
                        hoverRadius: 8,
                        radius: 4,
                        data: [11, 1002, 3002, 120, 1000, 100, 2220, 121, 1202, 350, 11],
                    },
                ],
            },
        };
    }

    render() {
        return (
            <div className="expenseChart">
                <h2 className="expenseChart__name">{this.props.graphname}</h2>
                <Line
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        aspectRatio: 3,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        display: false,
                                    },
                                },
                            ],
                        },
                        layout: {
                            padding: {
                                right: 10,
                            },
                        },
                    }}
                />
            </div>
        );
    }
}
