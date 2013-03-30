/*
 Highcharts JS v3.0.0 (2013-03-22)

 (c) 2009-2013 Torstein Hønsi

 License: www.highcharts.com/license
*/
(function(a,b){function c(a,b,c){this.init.call(this,a,b,c)}function d(a,b,c){a.call(this,b,c),this.chart.polar&&(this.closeSegment=function(a){var b=this.xAxis.center;a.push("L",b[0],b[1])},this.closedStacks=!0)}function e(a,b){var c=this.chart,d=this.options.animation,e=this.group,f=this.markerGroup,g=this.xAxis.center,h=c.plotLeft,i=c.plotTop;if(c.polar){if(c.renderer.isSVG)if(d===!0&&(d={}),b){if(c={translateX:g[0]+h,translateY:g[1]+i,scaleX:.001,scaleY:.001},e.attr(c),f)f.attrSetters=e.attrSetters,f.attr(c)}else c={translateX:h,translateY:i,scaleX:1,scaleY:1},e.animate(c,d),f&&f.animate(c,d),this.animate=null}else a.call(this,b)}var f=a.arrayMin,g=a.arrayMax,h=a.each,i=a.extend,j=a.merge,k=a.map,l=a.pick,m=a.pInt,n=a.getOptions().plotOptions,o=a.seriesTypes,p=a.extendClass,q=a.splat,r=a.wrap,s=a.Axis,t=a.Tick,u=a.Series,v=o.column.prototype,w=Math,x=w.round,y=w.floor,z=w.ceil,A=w.min,B=w.max,C=function(){};i(c.prototype,{init:function(a,b,c){var d=this,e=d.defaultOptions;d.chart=b,b.angular&&(e.background={}),d.options=a=j(e,a),(a=a.background)&&h([].concat(q(a)).reverse(),function(a){var b=a.backgroundColor,a=j(d.defaultBackgroundOptions,a);b&&(a.backgroundColor=b),a.color=a.backgroundColor,c.options.plotBands.unshift(a)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:Number.MIN_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});var D=s.prototype,t=t.prototype,E={getOffset:C,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:C,setCategories:C,setTitle:C},F={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,plotBands:[],tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,plotBands:[],showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},plotBands:[],showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(a){this.options=j(this.defaultOptions,this.defaultRadialOptions,a)},getOffset:function(){D.getOffset.call(this),this.chart.axisOffset[this.side]=0,this.center=this.pane.center=o.pie.prototype.getCenter.call(this.pane)},getLinePath:function(a,b){var c=this.center,b=l(b,c[2]/2-this.offset);return this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],b,b,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){D.setAxisTranslation.call(this),this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.isXAxis)&&(this.minPixelPadding=this.transA*this.minPointOffset+(this.reversed?(this.endAngleRad-this.startAngleRad)/4:0))},beforeSetTickPositions:function(){this.autoConnect&&(this.max+=this.categories&&1||this.pointRange||this.closestPointRange)},setAxisSize:function(){D.setAxisSize.call(this),this.center&&(this.len=this.width=this.height=this.isCircular?this.center[2]*(this.endAngleRad-this.startAngleRad)/2:this.center[2]/2)},getPosition:function(a,b){return this.isCircular||(b=this.translate(a),a=this.min),this.postTranslate(this.translate(a),l(b,this.center[2]/2)-this.offset)},postTranslate:function(a,b){var c=this.chart,d=this.center,a=this.startAngleRad+a;return{x:c.plotLeft+d[0]+Math.cos(a)*b,y:c.plotTop+d[1]+Math.sin(a)*b}},getPlotBandPath:function(a,b,c){var d=this.center,e=this.startAngleRad,f=d[2]/2,g=[l(c.outerRadius,"100%"),c.innerRadius,l(c.thickness,10)],h=/%$/,i,j=this.isCircular;return this.options.gridLineInterpolation==="polygon"?d=this.getPlotLinePath(a).concat(this.getPlotLinePath(b,!0)):(j||(g[0]=this.translate(a),g[1]=this.translate(b)),g=k(g,function(a){return h.test(a)&&(a=m(a,10)*f/100),a}),c.shape==="circle"||!j?(a=-Math.PI/2,b=Math.PI*1.5,i=!0):(a=e+this.translate(a),b=e+this.translate(b)),d=this.chart.renderer.symbols.arc(this.left+d[0],this.top+d[1],g[0],g[0],{start:a,end:b,innerR:l(g[1],g[0]-g[2]),open:i})),d},getPlotLinePath:function(a,b){var c=this.center,d=this.chart,e=this.getPosition(a),f,g,i;return this.isCircular?i=["M",c[0]+d.plotLeft,c[1]+d.plotTop,"L",e.x,e.y]:this.options.gridLineInterpolation==="circle"?(a=this.translate(a))&&(i=this.getLinePath(0,a)):(f=d.xAxis[0],i=[],a=this.translate(a),c=f.tickPositions,f.autoConnect&&(c=c.concat([c[0]])),b&&(c=[].concat(c).reverse()),h(c,function(b,c){g=f.getPosition(b,a),i.push(c?"L":"M",g.x,g.y)})),i},getTitlePosition:function(){var a=this.center,b=this.chart,c=this.options.title;return{x:b.plotLeft+a[0]+(c.x||0),y:b.plotTop+a[1]-{high:.5,middle:.25,low:0}[c.align]*a[2]+(c.y||0)}}};r(D,"init",function(a,d,e){var f,g=d.angular,h=d.polar,k=e.isX,m=g&&k,n,o;o=d.options;var p=e.pane||0;if(g){if(i(this,m?E:F),n=!k)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else h&&(i(this,F),this.defaultRadialOptions=(n=k)?this.defaultRadialXOptions:j(this.defaultYAxisOptions,this.defaultRadialYOptions));a.call(this,d,e),!m&&(g||h)&&(a=this.options,d.panes||(d.panes=[]),this.pane=(f=d.panes[p]=d.panes[p]||new c(q(o.pane)[p],d,this),p=f),p=p.options,d.inverted=!1,o.chart.zoomType=null,this.startAngleRad=d=(p.startAngle-90)*Math.PI/180,this.endAngleRad=o=(l(p.endAngle,p.startAngle+360)-90)*Math.PI/180,this.offset=a.offset||0,(this.isCircular=n)&&e.max===b&&o-d===2*Math.PI&&(this.autoConnect=!0))}),r(t,"getPosition",function(a,b,c,d,e){var f=this.axis;return f.getPosition?f.getPosition(c):a.call(this,b,c,d,e)}),r(t,"getLabelPosition",function(a,b,c,d,e,f,g,h,i){var j=this.axis,k=f.y,n=f.align,o=(j.translate(this.pos)+j.startAngleRad+Math.PI/2)/Math.PI*180;return j.isRadial?(a=j.getPosition(this.pos,j.center[2]/2+l(f.distance,-25)),f.rotation==="auto"?d.attr({rotation:o}):k===null&&(k=m(d.styles.lineHeight)*.9-d.getBBox().height/2),n===null&&(n=j.isCircular?o>20&&o<160?"left":o>200&&o<340?"right":"center":"center",d.attr({align:n})),a.x+=f.x,a.y+=k):a=a.call(this,b,c,d,e,f,g,h,i),a}),r(t,"getMarkPath",function(a,b,c,d,e,f,g){var h=this.axis;return h.isRadial?(a=h.getPosition(this.pos,h.center[2]/2+d),b=["M",b,c,"L",a.x,a.y]):b=a.call(this,b,c,d,e,f,g),b}),n.arearange=j(n.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0}}),o.arearange=a.extendClass(o.area,{type:"arearange",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",translate:function(){var a=this.yAxis;o.area.prototype.translate.apply(this),h(this.points,function(b){b.y!==null&&(b.plotLow=b.plotY,b.plotHigh=a.translate(b.high,0,1,0,1))})},getSegmentPath:function(a){var b=[],c=a.length,d=u.prototype.getSegmentPath,e,f;f=this.options;for(var g=f.step;c--;)e=a[c],b.push({plotX:e.plotX,plotY:e.plotHigh});return a=d.call(this,a),g&&(g===!0&&(g="left"),f.step={left:"right",center:"center",right:"left"}[g]),b=d.call(this,b),f.step=g,f=[].concat(a,b),b[0]="L",this.areaPath=this.areaPath.concat(a,b),f},drawDataLabels:function(){var a=this.data,b=a.length,c,d=[],e=u.prototype,f=this.options.dataLabels,g,h=this.chart.inverted;if(f.enabled||this._hasPointLabels){for(c=b;c--;)g=a[c],g.y=g.high,g.plotY=g.plotHigh,d[c]=g.dataLabel,g.dataLabel=g.dataLabelUpper,g.below=!1,h?(f.align="left",f.x=f.xHigh):f.y=f.yHigh;e.drawDataLabels.apply(this,arguments);for(c=b;c--;)g=a[c],g.dataLabelUpper=g.dataLabel,g.dataLabel=d[c],g.y=g.low,g.plotY=g.plotLow,g.below=!0,h?(f.align="right",f.x=f.xLow):f.y=f.yLow;e.drawDataLabels.apply(this,arguments)}},alignDataLabel:o.column.prototype.alignDataLabel,getSymbol:o.column.prototype.getSymbol,drawPoints:C}),n.areasplinerange=j(n.arearange),o.areasplinerange=p(o.arearange,{type:"areasplinerange",getPointSpline:o.spline.prototype.getPointSpline}),n.columnrange=j(n.column,n.arearange,{lineWidth:1,pointRange:null}),o.columnrange=p(o.arearange,{type:"columnrange",translate:function(){var a=this.yAxis,b;v.translate.apply(this),h(this.points,function(c){var d=c.shapeArgs;c.plotHigh=b=a.translate(c.high,0,1,0,1),c.plotLow=c.plotY,d.y=b,d.height=c.plotY-b})},trackerGroups:["group","dataLabels"],drawGraph:C,pointAttrToOptions:v.pointAttrToOptions,drawPoints:v.drawPoints,drawTracker:v.drawTracker,animate:v.animate,getColumnMetrics:v.getColumnMetrics}),n.gauge=j(n.line,{dataLabels:{enabled:!0,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,style:{fontWeight:"bold"},verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1}),t={type:"gauge",pointClass:a.extendClass(a.Point,{setState:function(a){this.state=a}}),angular:!0,drawGraph:C,trackerGroups:["group","dataLabels"],translate:function(){var a=this.yAxis,b=this.options,c=a.center;this.generatePoints(),h(this.points,function(d){var e=j(b.dial,d.dial),f=m(l(e.radius,80))*c[2]/200,g=m(l(e.baseLength,70))*f/100,h=m(l(e.rearLength,10))*f/100,i=e.baseWidth||3,k=e.topWidth||1,n=a.startAngleRad+a.translate(d.y,null,null,null,!0);b.wrap===!1&&(n=Math.max(a.startAngleRad,Math.min(a.endAngleRad,n))),n=n*180/Math.PI,d.shapeType="path",d.shapeArgs={d:e.path||["M",-h,-i/2,"L",g,-i/2,f,-k/2,f,k/2,g,i/2,-h,i/2,"z"],translateX:c[0],translateY:c[1],rotation:n},d.plotX=c[0],d.plotY=c[1]})},drawPoints:function(){var a=this,b=a.yAxis.center,c=a.pivot,d=a.options,e=d.pivot,f=a.chart.renderer;h(a.points,function(b){var c=b.graphic,e=b.shapeArgs,g=e.d,h=j(d.dial,b.dial);c?(c.animate(e),e.d=g):b.graphic=f[b.shapeType](e).attr({stroke:h.borderColor||"none","stroke-width":h.borderWidth||0,fill:h.backgroundColor||"black",rotation:e.rotation}).add(a.group)}),c?c.animate({translateX:b[0],translateY:b[1]}):a.pivot=f.circle(0,0,l(e.radius,5)).attr({"stroke-width":e.borderWidth||0,stroke:e.borderColor||"silver",fill:e.backgroundColor||"black"}).translate(b[0],b[1]).add(a.group)},animate:function(a){var b=this;a||(h(b.points,function(a){var c=a.graphic;c&&(c.attr({rotation:b.yAxis.startAngleRad*180/Math.PI}),c.animate({rotation:a.shapeArgs.rotation},b.options.animation))}),b.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup),o.pie.prototype.render.call(this),this.group.clip(this.chart.clipRect)},setData:o.pie.prototype.setData,drawTracker:o.column.prototype.drawTracker},o.gauge=a.extendClass(o.line,t),n.boxplot=j(n.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-0.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{series.color};font-weight:bold">{series.name}</span><br/>Minimum: {point.low}<br/>Lower quartile: {point.q1}<br/>Median: {point.median}<br/>Higher quartile: {point.q3}<br/>Maximum: {point.high}<br/>'},whiskerLength:"50%",whiskerWidth:2}),o.boxplot=p(o.column,{type:"boxplot",pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:C,translate:function(){var a=this.yAxis,b=this.pointArrayMap;o.column.prototype.translate.apply(this),h(this.points,function(c){h(b,function(b){c[b]!==null&&(c[b+"Plot"]=a.translate(c[b],0,1,0,1))})})},drawPoints:function(){var a=this,c=a.points,d=a.options,e=a.chart.renderer,f,g,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,z,A,B,C,D,E=a.doQuartiles!==!1,F=parseInt(a.options.whiskerLength,10)/100;h(c,function(c){o=c.graphic,C=c.shapeArgs,q={},t={},v={},D=c.color||a.color,c.plotY!==b&&((f=c.pointAttr[c.selected?"selected":""],w=C.width,z=y(C.x),A=z+w,B=x(w/2),g=y(E?c.q1Plot:c.lowPlot),i=y(E?c.q3Plot:c.lowPlot),j=y(c.highPlot),k=y(c.lowPlot),q.stroke=c.stemColor||d.stemColor||D,q["stroke-width"]=c.stemWidth||d.stemWidth||d.lineWidth,q.dashstyle=c.stemDashStyle||d.stemDashStyle,t.stroke=c.whiskerColor||d.whiskerColor||D,t["stroke-width"]=c.whiskerWidth||d.whiskerWidth||d.lineWidth,v.stroke=c.medianColor||d.medianColor||D,v["stroke-width"]=c.medianWidth||d.medianWidth||d.lineWidth,m=q["stroke-width"]%2/2,n=z+B+m,p=["M",n,i,"L",n,j,"M",n,g,"L",n,k,"z"],E&&(m=f["stroke-width"]%2/2,n=y(n)+m,g=y(g)+m,i=y(i)+m,z+=m,A+=m,r=["M",z,i,"L",z,g,"L",A,g,"L",A,i,"L",z,i,"z"]),F&&(m=t["stroke-width"]%2/2,j+=m,k+=m,s=["M",n-B*F,j,"L",n+B*F,j,"M",n-B*F,k,"L",n+B*F,k]),m=v["stroke-width"]%2/2,l=x(c.medianPlot)+m,u=["M",z,l,A,l,"z"],o)?(c.stem.animate({d:p}),F&&c.whiskers.animate({d:s}),E&&c.box.animate({d:r}),c.medianShape.animate({d:u})):(c.graphic=o=e.g().add(a.group),c.stem=e.path(p).attr(q).add(o),F&&(c.whiskers=e.path(s).attr(t).add(o)),E&&(c.box=e.path(r).attr(f).add(o)),c.medianShape=e.path(u).attr(v).add(o)))})}}),n.errorbar=j(n.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:n.arearange.tooltip.pointFormat},whiskerWidth:null}),o.errorbar=p(o.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||o.column.prototype.getColumnMetrics.call(this)}}),r(D,"getSeriesExtremes",function(a,b){a.call(this,b);if(!this.isXAxis){var c=this,d=[],e=!0;h(c.series,function(a){if(a.visible&&a.stackKey&&a.type==="waterfall"&&HighchartsAdapter.inArray(a.stackKey)===-1){e&&(c.dataMin=c.dataMax=null,e=!1);var b=a.processedYData,f=b.length,g=b[0],h=b[0],i=a.options.threshold,j=c.stacks,k=a.stackKey,m="-"+k,n,o,p,q;for(q=0;q<f;q++)p=b[q]<i?m:k,n=j[p][q].total,q>i&&(n+=o,j[p][q].setTotal(n),j[p][q]._cum=null),n<g&&(g=n),n>h&&(h=n),o=n;a.dataMin=g,a.dataMax=h,c.dataMin=A(l(c.dataMin,g),g,i),c.dataMax=B(l(c.dataMax,h),h,i),d.push(a.stackKey),typeof i=="number"&&(c.dataMin>=i?(c.dataMin=i,c.ignoreMinPadding=!0):c.dataMax<i&&(c.dataMax=i,c.ignoreMaxPadding=!0))}})}}),n.waterfall=j(n.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333"}),o.waterfall=p(o.column,{type:"waterfall",upColorProp:"fill",pointArrayMap:["y","low"],pointValKey:"y",init:function(a,b){b.stacking=!0,o.column.prototype.init.call(this,a,b)},translate:function(){var a=this.yAxis,b,c,d,e,f,g,h,i,j,k,l,m,n=this.options.borderWidth%2/2;o.column.prototype.translate.apply(this),d=this.points,j=h=d[0],g=i=d[0].y;for(c=1,b=d.length;c<b;c++)e=d[c],f=e.shapeArgs,k=this.getStack(c),l=this.getStack(c-1),m=this.getStackY(l),j===null&&(j=e,i=0),e.y&&!e.isSum&&!e.isIntermediateSum&&(g+=e.y,i+=e.y),e.isSum||e.isIntermediateSum?(e.isIntermediateSum?(k=this.getSumEdges(j,d[c-1]),e.y=i,j=null):(k=this.getSumEdges(h,d[c-1]),e.y=g),f.y=e.plotY=k[1],f.height=k[0]-k[1]):e.y<0?(l=k._cum===null?l.total:k._cum,k._cum=l+e.y,e=z(a.translate(l,0,1))-n,k=a.translate(k._cum,0,1),f.y=e,f.height=z(k-e)):f.height=y(m-f.y)},processData:function(a){u.prototype.processData.call(this,a);var a=this.yData,b=a.length,c,d;for(d=0;d<b;d++)c=a[d],c!==null&&typeof c!="number"&&(a[d]=c==="sum"?null:c==="intermediateSum"?null:c[0])},toYData:function(a){return a.isSum?"sum":a.isIntermediateSum?"intermediateSum":[a.y]},getAttribs:function(){o.column.prototype.getAttribs.apply(this,arguments);var b=this.options,c=b.states,d=b.upColor||this.color,b=a.Color(d).brighten(.1).get(),e=j(this.pointAttr),f=this.upColorProp;e[""][f]=d,e.hover[f]=c.hover.upColor||b,e.select[f]=c.select.upColor||d,h(this.points,function(a){a.y>0&&!a.color&&(a.pointAttr=e,a.color=d)})},getGraphPath:function(){var a=this.data,b=a.length,c=x(this.options.lineWidth+this.options.borderWidth)%2/2,d=[],e,f,g;for(g=1;g<b;g++)f=a[g].shapeArgs,e=a[g-1].shapeArgs,f=["M",e.x+e.width,e.y+c,"L",f.x,e.y+c],a[g-1].y<0&&(f[2]+=e.height,f[5]+=e.height),d=d.concat(f);return d},getStack:function(a){var b=this.yAxis.stacks,c=this.stackKey;return this.processedYData[a]<this.options.threshold&&(c="-"+c),b[c][a]},getStackY:function(a){return z(this.yAxis.translate(a.total,null,!0))},getSumEdges:function(a,b){var c,d,e;return d=this.options.threshold,c=a.y>=d?a.shapeArgs.y+a.shapeArgs.height:a.shapeArgs.y,d=b.y>=d?b.shapeArgs.y:b.shapeArgs.y+b.shapeArgs.height,d>c&&(e=c,c=d,d=e),[c,d]},drawGraph:u.prototype.drawGraph}),n.bubble=j(n.scatter,{dataLabels:{inside:!0,style:{color:"white",textShadow:"0px 0px 3px black"},verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},zThreshold:0}),o.bubble=p(o.scatter,{type:"bubble",pointArrayMap:["y","z"],trackerGroups:["group","dataLabelsGroup"],pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(b){var c=this.options.marker,d=l(c.fillOpacity,.5),b=b||c.fillColor||this.color;return d!==1&&(b=a.Color(b).setOpacity(d).get("rgba")),b},convertAttribs:function(){var a=u.prototype.convertAttribs.apply(this,arguments);return a.fill=this.applyOpacity(a.fill),a},getRadii:function(a,b,c,d){var e,f,g,h=this.zData,i=[];for(f=0,e=h.length;f<e;f++)g=b-a,g=g>0?(h[f]-a)/(b-a):.5,i.push(w.round(c+g*(d-c))/2);this.radii=i},animate:function(a){var b=this.options.animation;a||(h(this.points,function(a){var c=a.graphic,a=a.shapeArgs;c&&a&&(c.attr("r",1),c.animate({r:a.r},b))}),this.animate=null)},translate:function(){var a,b=this.data,c,d,e=this.radii;o.scatter.prototype.translate.call(this);for(a=b.length;a--;)c=b[a],d=e[a],c.negative=c.z<(this.options.zThreshold||0),d>=this.minPxSize/2?(c.shapeType="circle",c.shapeArgs={x:c.plotX,y:c.plotY,r:d},c.dlBox={x:c.plotX-d,y:c.plotY-d,width:2*d,height:2*d}):c.shapeArgs=c.plotY=c.dlBox=null},drawLegendSymbol:function(a,b){var c=m(a.itemStyle.fontSize)/2;b.legendSymbol=this.chart.renderer.circle(c,a.baseline-c,c).attr({zIndex:3}).add(b.legendGroup)},drawPoints:o.column.prototype.drawPoints,alignDataLabel:o.column.prototype.alignDataLabel}),s.prototype.beforePadding=function(){var a=this.len,c=this.chart,d=0,e=a,i=this.isXAxis,j=i?"xData":"yData",k=this.min,n={},o=w.min(c.plotWidth,c.plotHeight),p=Number.MAX_VALUE,q=-Number.MAX_VALUE,r=this.max-k,s=a/r,t=[];this.tickPositions&&(h(this.series,function(a){var b=a.options;a.type==="bubble"&&a.visible&&(t.push(a),i)&&(h(["minSize","maxSize"],function(a){var c=b[a],d=/%$/.test(c),c=m(c);n[a]=d?o*c/100:c}),a.minPxSize=n.minSize,a=a.zData,p=w.min(p,w.max(f(a),b.displayNegative===!1?b.zThreshold:-Number.MAX_VALUE)),q=w.max(q,g(a)))}),h(t,function(a){var b=a[j],c=b.length,f;i&&a.getRadii(p,q,n.minSize,n.maxSize);if(r>0)for(;c--;)f=a.radii[c],d=Math.min((b[c]-k)*s-f,d),e=Math.max((b[c]-k)*s+f,e)}),r>0&&l(this.options.min,this.userMin)===b&&(e-=a,s*=(a+d-e)/a,this.min+=d/s,this.max+=e/s))};var G=u.prototype,n=a.Pointer.prototype;G.toXY=function(a){var b,c=this.chart;b=a.plotX;var d=a.plotY;a.rectPlotX=b,a.rectPlotY=d,a.clientX=b/Math.PI*180,b=this.xAxis.postTranslate(a.plotX,this.yAxis.len-d),a.plotX=a.polarPlotX=b.x-c.plotLeft,a.plotY=a.polarPlotY=b.y-c.plotTop},r(o.area.prototype,"init",d),r(o.areaspline.prototype,"init",d),r(o.spline.prototype,"getPointSpline",function(a,b,c,d){var e,f,g,h,i,j,k;return this.chart.polar?(e=c.plotX,f=c.plotY,a=b[d-1],g=b[d+1],this.connectEnds&&(a||(a=b[b.length-2]),g||(g=b[1])),a&&g&&(h=a.plotX,i=a.plotY,b=g.plotX,j=g.plotY,h=(1.5*e+h)/2.5,i=(1.5*f+i)/2.5,g=(1.5*e+b)/2.5,k=(1.5*f+j)/2.5,b=Math.sqrt(Math.pow(h-e,2)+Math.pow(i-f,2)),j=Math.sqrt(Math.pow(g-e,2)+Math.pow(k-f,2)),h=Math.atan2(i-f,h-e),i=Math.atan2(k-f,g-e),k=Math.PI/2+(h+i)/2,Math.abs(h-k)>Math.PI/2&&(k-=Math.PI),h=e+Math.cos(k)*b,i=f+Math.sin(k)*b,g=e+Math.cos(Math.PI+k)*j,k=f+Math.sin(Math.PI+k)*j,c.rightContX=g,c.rightContY=k),d?(c=["C",a.rightContX||a.plotX,a.rightContY||a.plotY,h||e,i||f,e,f],a.rightContX=a.rightContY=null):c=["M",e,f]):c=a.call(this,b,c,d),c}),r(G,"translate",function(a){a.call(this);if(this.chart.polar&&!this.preventPostTranslate)for(var a=this.points,b=a.length;b--;)this.toXY(a[b])}),r(G,"getSegmentPath",function(a,b){var c=this.points;return this.chart.polar&&this.options.connectEnds!==!1&&b[b.length-1]===c[c.length-1]&&c[0].y!==null&&(this.connectEnds=!0,b=[].concat(b,[c[0]])),a.call(this,b)}),r(G,"animate",e),r(v,"animate",e),r(G,"setTooltipPoints",function(a,b){return this.chart.polar&&i(this.xAxis,{tooltipLen:360}),a.call(this,b)}),r(v,"translate",function(a){var b=this.xAxis,c=this.yAxis.len,d=b.center,e=b.startAngleRad,f=this.chart.renderer,g,h;this.preventPostTranslate=!0,a.call(this);if(b.isRadial){b=this.points;for(h=b.length;h--;)g=b[h],a=g.barX+e,g.shapeType="path",g.shapeArgs={d:f.symbols.arc(d[0],d[1],c-g.plotY,null,{start:a,end:a+g.pointWidth,innerR:c-l(g.yBottom,c)})},this.toXY(g)}}),r(v,"alignDataLabel",function(a,b,c,d,e,f){this.chart.polar?(a=b.rectPlotX/Math.PI*180,d.align===null&&(d.align=a>20&&a<160?"left":a>200&&a<340?"right":"center"),d.verticalAlign===null&&(d.verticalAlign=a<45||a>315?"bottom":a>135&&a<225?"top":"middle"),G.alignDataLabel.call(this,b,c,d,e,f)):a.call(this,b,c,d,e,f)}),r(n,"getIndex",function(a,b){var c,d=this.chart,e;return d.polar?(e=d.xAxis[0].center,c=b.chartX-e[0]-d.plotLeft,d=b.chartY-e[1]-d.plotTop,c=180-Math.round(Math.atan2(c,d)/Math.PI*180)):c=a.call(this,b),c}),r(n,"getCoordinates",function(a,b){var c=this.chart,d={xAxis:[],yAxis:[]};return c.polar?h(c.axes,function(a){var e=a.isXAxis,f=a.center,g=b.chartX-f[0]-c.plotLeft,f=b.chartY-f[1]-c.plotTop;d[e?"xAxis":"yAxis"].push({axis:a,value:a.translate(e?Math.PI-Math.atan2(g,f):Math.sqrt(Math.pow(g,2)+Math.pow(f,2)),!0)})}):d=a.call(this,b),d})})(Highcharts);