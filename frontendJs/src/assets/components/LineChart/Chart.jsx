import ReactApexChart from 'react-apexcharts';

const LineChart = (options, chartData) => {
    return ( 
        <ReactApexChart
        options={options}
        series={chartData}
        type="line"
        width={200}
        height={200}
    />
    );
}

export default LineChart;