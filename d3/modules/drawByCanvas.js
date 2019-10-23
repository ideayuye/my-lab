import * as d3 from 'd3';
import { geoPath, geoMercator } from 'd3-geo';

export const drawMap = function() {
    const canvas = document.getElementById('canvas');
    // const canvas = d3.select('canvas');
    const ctx = canvas.getContext('2d');
    var width = 1300;
    var height = 1000;
    var padding = 20;
    var root;
    var projection, path;

    d3.json('china.json').then(function (data) {
        root = data;
        //设置投影
        projection = geoMercator();
        projection.fitExtent([[padding,padding],[width-padding*2,height-padding*2]],root);
        //projection.fitSize([width,height],root);
        //生成地理路径
        path = geoPath(projection, ctx);
        // console.log(root.features);
        // console.log(path);
        update();
    });

    const update = function() {
        // ctx.lineWidth = 1;
        // ctx.strokeStyle = 'blue';
        ctx.beginPath();
        path(root.features);
        // d3
        //     // .data([[1, 2], [110, 390]])
        //     .line()
        //     .x(function(d) {
        //         return d[0];
        //     })
        //     .y(function(d) {
        //         return d[1];
        //     })
        //     .context(ctx)(path);
            // .context(ctx)([[1.5, 2.5], [110.5, 390.5]]);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "#aaa";
        ctx.stroke();
    }
    
}
