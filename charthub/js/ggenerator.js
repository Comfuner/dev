jQuery.fn.extend({
    high: function(type,data,params) {
        var graphType = {
            base: {
                chart: {
                    backgroundColor: '#fff',
                    // height: 250
                },
                subtitle: {
                    text: 'Source: WorldClimate.com'
                },
                title: {
                    text: 'Monthly Average Rainfall',
                    style: {
                        color: '#222',
                        fontFamily: 'arial',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    },
                    useHTML: true
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    style: {
                        color: '#222',
                        fontFamily: 'arial',
                        fontWeight: 'bold',
                        textAlign: 'right'
                    },
                    pointFormat:'{point.y}',//disable the bullet tooltip
                    useHTML: true
                }
            },
            bar: {
                chart: {
                    type: 'bar'
                },
                plotOptions: {
                    bar: {
                        colors: ['#222'],
                        colorByPoint: true
                    }
                },
                xAxis: {
                    minorGridLineWidth: 0,
                    minorTickLength: 0,
                    tickLength: 0,
                    lineColor: '#808080',
                    labels: {
                        style: {
                            color: '#ff312f',
                            //color: '#ff4747',
                            fontWeight: 'bold',
                            fontFamily: 'arial',
                            fontSize: '12px'
                        },
                        useHTML: true
                    }
                },
                yAxis: {
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    minorTickLength: 0,
                    tickLength: 0,
                    maxPadding: 0,
                    tickAmount: 0,
                    gridLineColor: 'transparent',
                    labels: {
                        enabled: false,
                        style: {color: '#222'}
                    },
                    title: {
                        text: ''
                    }
                },
                series: [{
                    pointWidth: 15
                }]
            },
            column: {
                chart: {
                    type: 'column'
                },
                xAxis: {
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Rainfall (mm)'
                    }
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                }
            },
            pie: {
                chart: {
                    type: 'pie'
                },
                colors: ['#222'],
                tooltip:{
                    pointFormat:'{point.y}%'
                },
                plotOptions: {
                    pie: {
                        //innerSize: 50,
                        allowPointSelect: true,
                        cursor: 'pointer',
                        borderColor:null,
                        dataLabels: {
                            enabled: true,
                            color: '#222',
                            distance: 15,
                            useHTML: true,
                            style: {
                                width: '100px'
                            },
                            formatter: function (x) {
                                if (this.y > 10) {
                                    var color = '#000';
                                    if (this.point.color === '#2c2c2c' || this.point.color === '#181818') {
                                        color = '#222';
                                    } else {
                                        color = '#222';
                                    }
                                    return '<div class="datalabel">' +
                                        Math.floor(this.y) + '%<br/>' +
                                        '<b class="pointName" style="color: ' + color + '">' + this.point.name.split(' ').join('</br>') + '</b>' +
                                        '</div>'
                                }
                            }
                        }
                    }
                }
            }
        },
            graphData = {
            //graphData[type] = {
            series: data
            };
            console.log($.extend(true, {}, graphType['base'], graphType[type],graphData, params));
        this.highcharts($.extend(true, {}, graphType['base'], graphType[type],graphData, params));
    }
});
