<script>
import { Bar } from 'vue-chartjs'
import { mapState } from 'vuex'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'

export default {
    extends: Bar,
    computed: {
        ...mapState({
            chartData: state => state.chartData,
            chartLabels: state => state.chartLabels,
        })
    },
    mounted() {
        this.updateChart()
    },
    watch: {
        chartData() {
            this.updateChart()
        }
    },
    methods: {
        updateChart() {
            this.renderChart({
                labels: this.chartLabels,
                datasets: [
                    {
                        type: 'bar',
                        label: 'Data one',
                        backgroundColor: '#fff',
                        borderColor: '#fff',
                        data: this.chartData
                    },
                    {
                        type: 'line',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        borderDash: [5, 5],
                        data: this.chartData,
                        datalabels: {
                            display: true
                        },
                        pointBackgroundColor: '#fff',
                        pointRadius: 4,

                    }
                ]
            },
            {   
                responsive: true,
                maintainAspectRatio: false,
                hover: false,
                tooltips: false,
                layout: {
                    padding: {
                        top: 50,
                        bottom: 20
                    }
                },
                legend: false,
                plugins: {
                    datalabels: {
                        align: (context) => {
                            const index = context.dataIndex;
                            const value = context.dataset.data[index];
                            const invert = Math.abs(value) <= 1;
                            return value < 1 ? 'end' : 'start'
                        },
                        anchor: 'end',
                        backgroundColor: null,
                        borderColor: null,
                        borderRadius: 4,
                        borderWidth: 1,
                        color: '#fff',
                        display: false,
                        font: {
                            size: 14,
                            weight: 600
                        },
                        formatter: (value) => `${Math.round(value * 10) / 10}°c`,
                        offset: -25,
                        padding: 0,
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: '#fff',
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        maxBarThickness: 1
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                        	min: Math.min(...this.chartData) - 1
                        }
                    }]
                }
            })
        }
    }
}
</script>
