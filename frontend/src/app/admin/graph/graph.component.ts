import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

  chartOptions = {
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "Leave Trend"
		},
		axisX: {
			valueFormatString: "MMM",
			intervalType: "month",
			interval: 1
		},
		axisY: {
			title: "days",
	
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: function(e: any){
				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				} else{
					e.dataSeries.visible = true;
				}
				e.chart.render();
			}
		},
		data: [{
			type:"line",
			name: "Minimum",
			showInLegend: true,
			yValueFormatString: "",
			dataPoints: [		
				{ x: new Date(2021, 0, 1), y: 27 },
				{ x: new Date(2021, 1, 1), y: 28 },
				{ x: new Date(2021, 2, 1), y: 35 },
				{ x: new Date(2021, 3, 1), y: 45 },
				{ x: new Date(2021, 4, 1), y: 54 },
				{ x: new Date(2021, 5, 1), y: 64 },
				{ x: new Date(2021, 6, 1), y: 69 },
				{ x: new Date(2021, 7, 1), y: 68 },
				{ x: new Date(2021, 8, 1), y: 61 },
				{ x: new Date(2021, 9, 1), y: 50 },
				{ x: new Date(2021, 10, 1), y: 41 },
				{ x: new Date(2021, 11, 1), y: 33 }
			]
		},
	
  ]


	}	
  



chartOptions1 = {
  title: {
    text: "Leave type brakedown"
  },
  axisX: {
    title: "Month",
    interval: 1,
    intervalType: "month", 
    valueFormatString: "MMM" 
  },
  data: [
    {
      type: "column",
      name: "Series 1",
      dataPoints: [
        { x: new Date(2023, 0), y: 10 }, // Jan
        { x: new Date(2023, 1), y: 15 }, // Feb
        { x: new Date(2023, 2), y: 25 }, // Mar
        { x: new Date(2023, 3), y: 30 }, // Apr
        { x: new Date(2023, 4), y: 28 } , // May
        { x: new Date(2023, 5), y: 28 }
      ]
    },
    {
      type: "column",
      name: "Series 2",
      dataPoints: [
        { x: new Date(2023, 0), y: 5 },  // Jan
        { x: new Date(2023, 1), y: 12 }, // Feb
        { x: new Date(2023, 2), y: 20 }, // Mar
        { x: new Date(2023, 3), y: 35 }, // Apr
        { x: new Date(2023, 4), y: 22 }  // May
      ]
    },
    {
      type: "column",
      name: "Series 3",
      dataPoints: [
        { x: new Date(2023, 0), y: 7 },  // Jan
        { x: new Date(2023, 1), y: 14 }, // Feb
        { x: new Date(2023, 2), y: 22 }, // Mar
        { x: new Date(2023, 3), y: 38 }, // Apr
        { x: new Date(2023, 4), y: 25 }  // May
      ]
    }
    // Add more data sets and data points as needed
  ]
};



}
