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
  

// bar chart
// chartOptions1 = {
//   animationEnabled: true,
//   title: {
//   text: "Leave type brakedown"
//   },
//   axisX: {
//   labelAngle: -90
//   },
//   axisY: {
//   title: "billion of barrels"
//   },
//   axisY2: {
//   title: "million barrels/day"
//   },
//   toolTip: {
//   shared: true
//   },
//   legend:{
//   cursor:"pointer",
//   itemclick: function(e: any){
//     if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//     e.dataSeries.visible = false;
//     }
//     else {
//     e.dataSeries.visible = true;
//     }
//     e.chart.render();
//   }
//   },
//   data: [{
//   type: "column",	
//   name: "Proven Oil Reserves (bn)",
//   legendText: "Proven Oil Reserves",
//   showInLegend: true, 
//   dataPoints:[
//     {label: "Saudi", y: 262},
//     {label: "Venezuela", y: 211},
//     {label: "Canada", y: 175},
//     {label: "Iran", y: 137},
//     {label: "Iraq", y: 115},
//     {label: "Kuwait", y: 104},
//     {label: "UAE", y: 97.8},
//     {label: "Russia", y: 60},
//     {label: "US", y: 23.3},
//     {label: "China", y: 20.4}
//   ]
//   }, {
//   type: "column",	
//   name: "Oil Production (million/day)",
//   legendText: "Oil Production",
//   axisYType: "secondary",
//   showInLegend: true,
//   dataPoints:[
//     {label: "Saudi", y: 11.15},
//     {label: "Venezuela", y: 2.5},
//     {label: "Canada", y: 3.6},
//     {label: "Iran", y: 4.2},
//     {label: "Iraq", y: 2.6},
//     {label: "Kuwait", y: 2.7},
//     {label: "UAE", y: 3.1},
//     {label: "Russia", y: 10.23},
//     {label: "US", y: 10.3},
//     {label: "China", y: 4.3}
//   ]
//   }]
// }


chartOptions1 = {
  title: {
    text: "Leave type brakedown"
  },
  axisX: {
    title: "Month", // X-axis label
    interval: 1, // Interval between tick marks (set to 1 to show all months)
    intervalType: "month", // Specify the interval type as "month"
    valueFormatString: "MMM" // Format for displaying month names (e.g., Jan, Feb, Mar)
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
