import React from "react";
import { Line } from "react-chartjs-2";

export default class ExpenseChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            marketData: [100, 200, 300],
            chartData: {
                labels: this.props.monthLabels,
                datasets: [
                    {
                        backgroundColor: "rgba(142, 243, 197, 0.5)",
                        pointBackgroundColor: "#fff",
                        pointHoverBackgroundColor: '#fff',
                        pointStyle: "circle",
                        label: "Monthly Expenses",
                        borderColor: "#2be1d8",
                        borderWidth: 3,
                        borderJoinStyle: "round",
                        lineTension: 0.3,
                        fontColor: "#fff",
                        hitRadius: 5,
                        hoverRadius: 8,
                        radius: 4,
                        data: this.props.monthExpenses
                    },
                ],
            },
        };
    }

    render() {
        console.log("why no names", this.props.monthLabels);
        console.log("noo names", this.state.chartData)
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
