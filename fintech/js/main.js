var defaults = {
        domain: "heb"
    },
    settings = {},
    switches = {};

var inter = new Engine(defaults, settings, switches);


/*--------------------------------------------------------------*/
//  Document Ready
/*--------------------------------------------------------------*/

$(document).ready(function () {
    AOS.init();
    inter.defFunc.register.clickEvents();
    inter.func.check.width($('.inter-mc').width());
    inter.defFunc.register.shareEvents();

    // --- Show main container --- //
    $('.inter-mc').show();


    // --- Events --- //
    if (window.location.hash) {
        console.log(window.location.hash)
        window.location = window.location.hash;
    } else {
        // do nothing!
    }

    $(window).smartresize(function () {
        inter.func.check.width($('.inter-mc').width());
    });



            $('#graph1').highcharts({
                chart: {
                    type: 'column',
                    backgroundColor: 'transparent',
                    fontFamily: 'Open Sans Hebrew'
                },
                credits: {
                    position: {
                        align: 'left',
                        x: 10
                    }
                },
                title: {
                    text: null
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        'בנקאות צרכנית',
                        'העברות ותשלומים',
                        'השקעות וניהול הון',
                        'בנקאות לעסקים קטנים ובינוניים',
                        'שירותי תיווך פיננסי',
                        'ביטוח חיים/גוף/רכוש',
                        'בנקאות מסחרית'
                    ],
                    labels: {
                        style: {
                            color: "#222",
                            fontFamily: 'Open Sans Hebrew'
                        }
                    },
                    crosshair: false
                },
                yAxis: {
                    align: 'center',
                    gridLineWidth: 0,
                    minorGridLineWidth: 1,
                    title: {
                        text: null
                    },
                    min: 0,
                    labels: {
                        enabled: false
                    }
                },
                tooltip: {
                    enabled: false,
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            className: 'Ylabels',
                            useHTML: true,
                            align: 'center',
                            color: '#222',
                            enabled: true,
                            format: '{y}%',
                            style: {
                                fontSize: '20px'
                            }
                        }
                    },
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0

                    }
                },
                series: [{
                    color: 'red',
                    name: 'סבירות',
                    data: [80, 60, 38, 32, 30, 26, 22]

                }]
            });
            $('#graph2').highcharts({
                chart: {
                    type: 'line',
                    backgroundColor: 'transparent',
                    fontFamily: 'Open Sans Hebrew'
                },
                credits: {
                    enabled: true,
                    useHTML: true,
                    text: 'חברת המחקר VBProfiles, הנתון לגבי 2016 הוא הערכה'
                },
                title: {
                    text: null
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '2014',
                        '2015',
                        '2016'
                    ],
                    labels: {
                        style: {
                            color: "#222",
                            fontFamily: 'Open Sans Hebrew'
                        }
                    },
                    crosshair: false
                },
                yAxis: {
                    align: 'center',
                    gridLineWidth: 0,
                    minorGridLineWidth: 1,
                    title: {
                        text: null
                    },
                    min: 16,
                    max: 39,
                    labels: {
                        enabled: false
                    }
                },
                tooltip: {
                    enabled: false,
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            useHTML: true,
                            align: 'right',
                            color: '#222',
                            enabled: true,
                            format: '{y} B₪',
                            style: {
                                display: 'block',
                                fontSize: '14px'
                            }
                        }
                    },

                    line: {}
                },
                series: [{
                    color: 'red',
                    name: 'השקעות',
                    data: [17.8, 38, 38]

                }]
            });
            $('#graph3').highcharts({
                chart: {
                    type: 'bar',
                    backgroundColor: 'transparent',
                    fontFamily: 'Open Sans Hebrew'
                },
                credits: {
                    useHTML: true,
                    text: 'סקר ה-Fintech הגלובלי ל-2016, PwC'
                },
                title: {
                    text: null
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        'יוצרים שיתופי פעולה עם חברות FinTech',
                        'אנחנו לא מתנהלים עם FinTech',
                        'אנחנו מוכרים וקונים שירותים לחברות FinTech',
                        'אנחנו מנהלים חממות לחברות FinTech',
                        'אנחנו מוכרים שירותי FinTech תחת המותג שלנו',
                        'אנחנו מנהלים קרנות למימון מיזמי FinTech',
                        'אנחנו מקימים חברות FinTech שלנו',
                        'אנחנו רוכשים חברות FinTech',
                        'אחר',
                        'לא יודע'
                    ],
                    labels: {
                        useHTML: true,
                        style: {
                            padding: '0px 12px',
                            textAlign: 'right',
                            direction: 'rtl',
                            color: "#222",
                            fontFamily: 'Open Sans Hebrew'
                        }
                    },
                    crosshair: false
                },
                yAxis: {
                    opposite: true,
                    gridLineWidth: 0,
                    minorGridLineWidth: 1,
                    title: {
                        text: null
                    },
                    min: 6,
                    max: 33,
                    labels: {
                        enabled: false
                    }
                },
                tooltip: {
                    enabled: false,
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            className: 'Ylabels',
                            useHTML: true,
                            align: 'left',
                            color: '#222',
                            enabled: true,
                            format: '{y}%',
                            style: {
                                fontSize: '14px'
                            }
                        }
                    },
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    color: 'red',
                    name: 'סבירות',
                    data: [32, 25, 22, 15, 14, 14, 11, 9, 9, 7]
                }]
            });


        }

        ); // end of document ready

