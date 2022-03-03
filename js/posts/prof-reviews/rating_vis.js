import { dropdownMenu } from './dropdownMenu.js';
import { STOPWORDS, MALE_COLOR, FEMALE_COLOR  } from './globals.js'

(function(){
    /* configuration parameters */
    const W_WIDTH = window.innerWidth, W_HEIGHT = window.innerHeight;
    const config = {
      "vw": W_WIDTH * 0.8,
      "vh": W_HEIGHT * 0.9,
      "anim_speed": 3000
    }
    const margin = ({top: 50, right: 20, bottom: 100, left: 150});
    const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
    var stats = ['temp','values'];

    /* static elements (only append once) */
    var rating_data;

    const rating_svg = d3.select("#rating-svg-div").append("svg");
    rating_svg
      .attr("id","rating-svg")
      .style("width", '85%')
      .style("height", config.vh + 'px')
      .attr("font-family", "sans-serif")
      .attr("font-size", 10);
    // axes and labels
    var xAxisGroup = rating_svg.append("g")
      .attr("class","xaxis");
    var yAxisGroup = rating_svg.append("g")
      .attr("class","yaxis");
    var xLabel = rating_svg.append("text")
     .attr("class","xlabel")
    var yLabel = rating_svg.append("text")
      .attr("class","ylabel")
    var xScale;
    
    // sorts x axis numerically
    const sort_num = (a, b) => {
      return a - b;
    };

    String.prototype.replaceAt = function(index, replacement) {
      return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    // and replace quarters
    const replace_qtr = (x_array) => {
      let new_array = []
      for (let q of x_array){
        q = String(q);
        const qtr_dict = {'1':'FA','2':'WI','3':'SP','4':'SU'};
        q = q.replace('.', ' ');
        q = q.replaceAt(5,qtr_dict[q[5]]);
        new_array.push(q);
      }
      return new_array
    }

    // main render function
    const render_stats = (data,stat="overall_rating") =>{
        const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
        console.log('selected_stat',stat)
        // axes, labels, title
        // find new max value for y axis
        let x_array = data.map(d=>d.time_taken).sort(sort_num)
        x_array = replace_qtr(x_array)
        console.log(x_array);
        xScale = d3.scaleBand()
            .domain(x_array)
            .range([margin.left, config.vw - margin.right])
        const xAxis = d3.axisBottom().scale(xScale);    
        xAxisGroup
            .attr("transform", "translate(0," + (config.vh - margin.bottom) + ")")
            .transition(t)
            .call(xAxis)
            .selectAll("text")
              .attr("y", 0)
              .attr("x", 9)
              .attr("transform", "rotate(45)")
              .style("text-anchor", "start");;
        xLabel
            .attr("text-anchor", "middle")
            .attr("x", (config.vw+ margin.left)/2 )
            .attr("y",config.vh)
            .style("font-size","20px")
            .text('Quarter Taken');

        // let max = Math.max(...data.map(d => d[stat])) * 1.1;
        // console.log("ymax",max)
        const yScale = d3.scaleLinear()
            .domain([5,0])
            .range([margin.top,config.vh - margin.bottom]); // need to offset bars/circles by margin.top
        const yAxis = d3.axisLeft().scale(yScale);
        yAxisGroup   
            .attr("transform", "translate("+ (margin.left) + ",0)")
            .style("font-size","15px")
            .transition(t)
            .call(yAxis);
        yLabel
            .attr("text-anchor", "middle")
            .attr("x", -config.vh/2)
            .attr("y",margin.top)
            .attr("transform", "rotate(-90)")
            .style("font-size","20px")
            .style("padding-bottom","5px")
            .text(stat);


    };
  

    d3.csv('/datasets/prof-reviews/prof_sentiment_by_qtr_filt.csv')
    .then(data => {
        data.forEach(d => {
          d.overall_rating = +d.overall_rating;
          d.easiness_rating = +d.easiness_rating;
          d.workload_rating = +d.workload_rating;
          d.clarity_rating = +d.clarity_rating;
          d.helpfulness_rating = +d.helpfulness_rating;
          d.pos_score = +d.pos_score;
          d.neg_score = +d.neg_score;
          d.review_is_positive = +d.review_is_positive;
          d.time_taken = +d.time_taken;
        }); 
        rating_data = data;
        console.log(rating_data);

        // filter for stats to plot
        stats = Object.getOwnPropertyNames(rating_data[1]);
        let not_stat = ['quarter_taken', 'year_taken', 'gender_guess', 'pre_covid', 'time_taken']
        stats = stats.filter(item => !not_stat.includes(item))
        console.log(stats);
            
        var stat = stats[0]; // the stat to sort words by
        // populate dropdown from data
        d3.select('#stats-menu3')
        .call(dropdownMenu,{
        options: stats,
        onOptionClicked: onStatClicked,
        selectedOption: stat,
        label: 'Statistic: '
        });
        render_stats(rating_data,stat);
    });

    const onStatClicked = selection => {
      // if (selection == stats[3] || selection == stats[4] || selection == stats[5]){
      render_stats(rating_data,selection);
    };
   
  
  })(); // create and run anonymous fn