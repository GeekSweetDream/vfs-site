import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { JsonGetService } from '../json-get.service';
import { Node } from '../node';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(
      private location: Location,
      private dataService: JsonGetService,
      private httpClient: HttpClient) { }

  goBack():void{
    this.location.back();
  }

  getHer(): void{
  this.httpClient.get('http://ovz1.themykyte.6okmz.vps.myjino.ru:49510/data/get/2').subscribe(
    dat => {
      var res = dat["data"];
      console.log(res[0]);
      var cy = cytoscape({
      container: document.getElementById('cy'), // container to render in
        boxSelectionEnabled: false,
        autounselectify: true,

      style:  [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#f4a332',
            'label': 'data(name)',
            'width':'label',
            'height':'60px',
            'text-valign':'center',
            'text-halign':'center',
          }
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'label': 'data(label)',
            'width': '4',
            'text-rotation':'autorotate',
            'padding':'20px'
          }
        }
      ]
    });

    var options1 = {
      name: 'breadthfirst',
      fit: true, // whether to fit the viewport to the graph
      directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
      padding: 25, // padding on fit
      circle: false, // put depths in concentric circles if true, put depths top down if false
      spacingFactor: 2, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
      boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
      nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
      roots: undefined, // the roots of the trees
      maximalAdjustments: 0, // how many times to try to position the nodes in a maximal way (i.e. no backtracking)
      animate: false, // whether to transition the node positions
      animationDuration: 500, // duration of animation in ms if enabled
      animationEasing: undefined, // easing of animation if enabled,
      animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
      ready: undefined, // callback on layoutready
      stop: undefined, // callback on layoutstop
      transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
    };
    var options = {
      name: 'cose',

      // Called on `layoutready`
      ready: function(){},

      // Called on `layoutstop`
      stop: function(){},

      // Whether to animate while running the layout
      // true : Animate continuously as the layout is running
      // false : Just show the end result
      // 'end' : Animate with the end result, from the initial positions to the end positions
      animate: false,

      // Easing of the animation for animate:'end'
      animationEasing: undefined,

      // The duration of the animation for animate:'end'
      animationDuration: undefined,

      // A function that determines whether the node should be animated
      // All nodes animated by default on animate enabled
      // Non-animated nodes are positioned immediately when the layout starts
      animateFilter: function ( node, i ){ return true; },


      // The layout animates only after this many milliseconds for animate:true
      // (prevents flashing on fast runs)
      animationThreshold: 250,

      // Number of iterations between consecutive screen positions update
      // (0 -> only updated on the end)
      refresh: 50,

      // Whether to fit the network view after when done
      fit: true,

      // Padding on fit
      padding: 10,

      // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      boundingBox: undefined,

      // Excludes the label when calculating node bounding boxes for the layout algorithm
      nodeDimensionsIncludeLabels: true,

      // Randomize the initial positions of the nodes (true) or use existing positions (false)
      randomize: true,

      // Extra spacing between components in non-compound graphs
      componentSpacing: 100,

      // Node repulsion (non overlapping) multiplier
      nodeRepulsion: function( node ){ return 112342; },

      // Node repulsion (overlapping) multiplier
      nodeOverlap: 10,

      // Ideal edge (non nested) length
      idealEdgeLength: function( edge ){ return 200; },

      // Divisor to compute edge forces
      edgeElasticity: function( edge ){ return 200; },

      // Nesting factor (multiplier) to compute ideal edge length for nested edges
      nestingFactor: 10,

      // Gravity force (constant)
      gravity: 30,

      // Maximum number of iterations to perform
      numIter: 1000,

      // Initial temperature (maximum node displacement)
      initialTemp: 500,

      // Cooling factor (how the temperature is reduced between consecutive iterations
      coolingFactor: 0.99,

      // Lower temperature threshold (below this point the layout will end)
      minTemp: 1.0,

      // Pass a reference to weaver to use threads for calculations
      weaver: false
    };

    for(var i=0; i<res.length;++i){
      var p = JSON.parse(res[i]);
      cy.add(p);
    }
    var layout = cy.layout( options );
    layout.run();



      //this.createGraph();
    });
  }
  ngOnInit() {
    this.getHer();
  }

  createGraph(): void{
  var p = {data: { id: 'a',name:'123'}};
  console.log(p);
  var cy = cytoscape({
  container: document.getElementById('cy'), // container to render in
    boxSelectionEnabled: false,
    autounselectify: true,

    layout: {
      name: 'grid',
      cols: 3
    },

  style:  [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#f4a332',
        'label': 'data(name)'
      }
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'bezier',
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'label': 'data(label)'
      }
    }
  ]
});
//var p = this.her[0];
//var p1 = this.her[1];
//var p2 = this.her[2];
//var p3 = this.her[3];
//console.log(p);
 cy.add(p);
//cy.add(p1);
//cy.add(p2);
//cy.add(her);

  }
}
