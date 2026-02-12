import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-work-hours',
  imports: [BaseChartDirective],
  templateUrl: './work-hours.html',
  styleUrl: './work-hours.css',
})
export class WorkHours {
  chartType = 'bar' as const;

  avgLinePlugin = {
    id: 'avgLine',
    afterDraw(chart: any) {
      const {
        ctx,
        chartArea: { left, right },
        scales: { y },
      } = chart;

      const avgValue = 4;
      const yPosition = y.getPixelForValue(avgValue);

      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.moveTo(left, yPosition);
      ctx.lineTo(right, yPosition);
      ctx.strokeStyle = '#111827';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    },
  };

  chartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan 24', 'Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29', 'Jan 30'],
    datasets: [
      {
        label: 'Work Time',
        data: [7, 8, 5, 7, 8, 0, 0],
        backgroundColor: '#3B5BDB',
        stack: 'total',
        borderRadius: 6,
        borderSkipped: false,
        borderWidth: 1,
        categoryPercentage: 0.6,
        barPercentage: 0.7,
      },
      {
        label: 'Over Time',
        data: [1, 0, 6, 0, 1, 0, 0],
        backgroundColor: '#F8B4B4',
        stack: 'total',
        borderRadius: 6,
        borderSkipped: false,
        borderWidth: 1,
        categoryPercentage: 0.6,
        barPercentage: 0.7,
      },
    ],
  };

  chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
        },
      },
      y: {
        stacked: true,
        position: 'right',
        beginAtZero: true,
        max: 12,
        ticks: {
          stepSize: 2,
          callback: (value) => value + 'h',
          color: '#6B7280',
        },
        grid: {
          color: '#E5E7EB',
        },
      },
    },

    plugins: {
      legend: {
        display: false,
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: false,
          boxWidth: 10,
          borderRadius: 100,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}h`,
        },
      },
    },
  };

  chartPlugins = [this.avgLinePlugin];
}
