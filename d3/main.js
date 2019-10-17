import * as d3 from 'd3';
import { scaleLinear } from 'd3-scale';
import { geoEqualEarth, geoPath } from 'd3-geo';
// import 'd3-geo';


const data = [4, 5, 6, 19];

var x = scaleLinear()
.domain([0, d3.max(data)])
.range([0, 120]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) * 10 + "px"; })
    .text(function(d) { return d; });

var projection = geoEqualEarth(),
    path = geoPath(projection);
