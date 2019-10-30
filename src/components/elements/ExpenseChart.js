import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

class ExpenseChart extends React.Component {
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
        const monthRefs = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December",
        };

        let labels = this.props.months && this.props.months.map(month => {
            return month.total.$numberDecimal;
        });

        console.log(labels)
        console.log("expense", this.props.months)
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

const mapStateToProps = state => ({
    months: state.app.months,
});

export default connect(mapStateToProps)(ExpenseChart);