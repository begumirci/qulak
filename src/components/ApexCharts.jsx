import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

function ApexChart(params) {
  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: 350,

      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 768, // Belirli bir ekran genişliği için ayarlama
        options: {
          legend: {
            show: false, // Efsunları gizle
          },
          xaxis: {
            labels: {
              show: false, // X ekseni etiketlerini gizle
            },
          },
          yaxis: {
            labels: {
              show: false, // Y ekseni etiketlerini gizle
            },
          },
        },
      },
      {
        breakpoint: 480, // Daha küçük ekranlar için ayarlama
        options: {
          legend: {
            position: 'bottom',
          },
          xaxis: {
            labels: {
              show: false, // X ekseni etiketlerini gizle
            },
          },
          yaxis: {
            labels: {
              show: false, // Y ekseni etiketlerini gizle
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
        columnWidth: '40%',
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    xaxis: {
      type: 'category',
      categories: [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
      ],
    },
    yaxis: {
      max: 100,
      colors: 'var(--text-color)',
      labels: {
        formatter: (val) => {
          const targetValues = [0, 25, 75, 100];
          const closestValue = targetValues.reduce((prev, curr) =>
            Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
          );
          return `${closestValue}%`;
        },
      },
    },
    legend: {
      position: 'top',
      offsetY: 20,
      offsetX: '50%',

      markers: {
        fillColors: ['#437EF7', '#5CB1FF'],
        borderRadius: '13px',
      },
      labels: {
        colors: 'var(--dark-color)',
        useSeriesColors: false,
      },
    },
    fill: {
      opacity: 1,
      colors: ['#437EF7', '#5CB1FF'],
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'interfaces',
      data: [44, 55, 41, 67, 22, 43, 44, 6, 3, 12, 22, 43],
    },
    {
      name: 'build-ups',
      data: [5, 10, 20, 30, 40, 50, 44, 55, 4, 4, 22, 2],
    },
  ]);

  return (
    <ReactApexChart options={options} series={series} type='bar' height={350} />
  );
}

export default ApexChart;
