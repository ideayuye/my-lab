import * as d3 from 'd3';
import { scaleLinear } from 'd3-scale';
import { geoEqualEarth, geoPath, geoMercator } from 'd3-geo';
import { drawMap } from './modules/drawByCanvas';
// import 'd3-geo';

const data = [4, 5, 6, 19];

// var x = scaleLinear()
// .domain([0, d3.max(data)])
// .range([0, 120]);

// d3.select(".chart")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div")
//     .style("width", function(d) { return x(d) * 10 + "px"; })
//     .text(function(d) { return d; });

// var projection = geoEqualEarth(),
//     path = geoPath(projection);

drawMap();

    var width = 1300;
    var height = 1000;
    var padding = 20;
    var g = d3.select('svg')
            .attr('width',width)
            .attr('height',height)
            .append('g');
    var root;
    var projection,path;
    function color(i) { return '#0e2338'; }
 
    d3.json('china.json').then(function (data) {
        root = data;
        //设置投影
        projection = geoMercator()
        projection.fitExtent([[padding,padding],[width-padding*2,height-padding*2]],root);
        //projection.fitSize([width,height],root);
        //生成地理路径
        path = geoPath(projection);
        update();
    });
 
    function update() { 
        g.selectAll("path") 
                .data(root.features)
                .enter() 
                .append("path")
                .attr("stroke","#234060") 
                .attr("stroke-width",1)
                .attr("fill", function(d,i){ 
                    return color(i);
                })
               .attr("d", path )   //使用地理路径生成器
               .on("mouseover",function(d,i){
                     d3.select(this) 
                            .attr("fill","green");  
               }) 
               .on("mouseout",function(d,i){ 
                    d3.select(this)
                             .attr("fill",color(i));  
               });
        g.selectAll("text") 
                .data(root.features)
                .enter()
                .append("text")
                .attr("text-anchor","middle") 
                .attr("dy",".3em") 
                .attr("fill", "#eee") 
                .style("font-size", "10px") 
                .text(function (d) { 
                    return d.properties.name; 
                })
                .attr("transform", function (d) {
                    return "translate("+projection(d.properties.cp).join(',')+")"; 
                });
    }
