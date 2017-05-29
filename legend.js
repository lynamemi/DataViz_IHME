var linear = d3.scale.linear()
  .domain([0,10])
  .range(["rgb(46, 73, 123)", "rgb(71, 187, 94)"]);

var svg = d3.select("svg");

svg.append("g")
  .attr("class", "legendLinear")
  .attr("transform", "translate(20,20)");

var legendLinear = d3.legend.color()
  .shapeWidth(30)
  .orient('horizontal')
  .scale(linear);

svg.select(".legendLinear")
  .call(legendLinear);