//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
document.addEventListener("touchstart", touchHandler, true);document.addEventListener("touchmove", touchHandler, true);document.addEventListener("touchend", touchHandler, true);document.addEventListener("touchcancel", touchHandler, true);
var w=$("#A1").attr("width");var h=$("#A1").attr("height");var nx=$("#"+col[posObX]+posObY.toString()).attr("x");var ny=$("#"+col[posObX]+posObY.toString()).attr("y");
$("#obj02").attr("cx",parseFloat(nx)+(parseFloat(w)/2));$("#obj02").attr("cy",parseFloat(ny)+(parseFloat(h)/2));drawObj();
}
function adddatamove(num){for (i=0;i<num; i++) {datamove.push({s:1,r:-1});}}
function adddatarot(num){datamove.push({s:-1,r:num});}
function go() {if (datamove.length > 0) {var i=0;if (godraw) {var counter=0;var k = setInterval(function() {counter++;if (counter===5){if (datamove[i].s > 0) {move(datamove[i].s);}
if (datamove[i].s==-1){rot(datamove[i].r);} i++;counter=0;drawObj();if (i>datamove.length-1){clearInterval(k);if (posX==posObX && posY==posObY) {gook();} else {godraw=false;goerror();}}}},100);}}}
function rot(dir){if (dir==0){dire=dire-1;if (dire<0){dire=3}} else {dire=dire+1; if (dire>3){dire=0}} drawObj();}
function move(num) {
if(dire==0){if (posY>1){if ($("#"+col[posX]+(posY-1).toString()).css("fill")!==$("#" + col[pos0X]+pos0Y.toString()).css("fill")){godraw=false;}else{posY=posY-1;}}else{godraw=false;}}
if(dire==1){if (posX<9){if ($("#"+col[posX+1]+posY.toString()).css("fill")!==$("#" + col[pos0X] + pos0Y.toString()).css("fill")){godraw=false;}else{posX=posX+1;}}else{godraw=false;}}
if(dire==2){if (posY<10){if ($("#"+col[posX]+(posY+1).toString()).css("fill")!==$("#"+col[pos0X]+pos0Y.toString()).css("fill")){godraw = false;}else{posY=posY+1;}}else{godraw=false;}}
if(dire==3){if (posX>0){if ($("#"+col[posX-1]+posY.toString()).css("fill")!==$("#"+col[pos0X]+pos0Y.toString()).css("fill")){godraw=false;}else{posX=posX-1;}}else{godraw=false;}}
if (!godraw){goerror();}}
function gook(){var counter = 0;var colors=["#c6fc02","#ffe500","#759307"];var i_color=0;$("#obj02").css("opacity",0);
var z = setInterval(function(){$("#obj01").css("fill",colors[i_color]);i_color++;if (i_color>2){i_color=0;}counter++;
if(counter === 10) {clearInterval(z);
godraw=true;$("#obj01").attr("fill","#ff0000");$("#obj02").css("opacity",0.9);showMessage("Ok");}}, 200);}
function goerror() {var counter=0;var colors=["#ff0000", "#ff7700", "#ffe500"];var i_color = 0;while (counter<100){$("#obj01").css("fill", colors[i_color]);i_color++;if (i_color>2){i_color=0;} counter++;}
godraw=true;posX=pos0X;posY=pos0Y;dire=dire0;attempts++;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}
datamove=[];$("#obj01").attr("fill", colors[0]);drawObj();}
function drawObj(){var w=$("#A1").attr("width");var h=$("#A1").attr("height");var nx=$("#"+col[posX]+posY.toString()).attr("x");var ny=$("#"+col[posX]+posY.toString()).attr("y");$("#obj01").attr("cx",parseFloat(nx)+(parseFloat(w)/2));$("#obj01").attr("cy",parseFloat(ny)+(parseFloat(h)/2));
if (dire==0){$("#tr_obj01").attr("x",parseFloat(nx)+(parseFloat(w)/2));$("#tr_obj01").attr("y",parseFloat(ny));$("#tr_obj01").attr("width",0.6);$("#tr_obj01").attr("height",4.8);}
if (dire==1){$("#tr_obj01").attr("x",parseFloat(nx)+(parseFloat(w)/2));$("#tr_obj01").attr("y",parseFloat(ny)+(parseFloat(h)/2));$("#tr_obj01").attr("width",4.8);$("#tr_obj01").attr("height",0.6);}
if (dire==2){$("#tr_obj01").attr("x",parseFloat(nx)+(parseFloat(w)/2));$("#tr_obj01").attr("y",parseFloat(ny)+(parseFloat(h)/2));$("#tr_obj01").attr("width",0.6);$("#tr_obj01").attr("height",4.8);}
if (dire==3){$("#tr_obj01").attr("x",parseFloat(nx));$("#tr_obj01").attr("y",parseFloat(ny)+(parseFloat(h)/2));$("#tr_obj01").attr("width",4.8);$("#tr_obj01").attr("height",0.6);}
}
function FR(dummy){getVirtualPos();if (px==-1 || py==-1){return false;}else{
if (dirv==0){if (py>1) {if ($("#" + col[px] + (py - 1).toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}} else {return false;}}
if (dirv==1){if (px<9){if ($("#" + col[px + 1] + py.toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}}else{return false;}}
if (dirv==2){if (py<10) {if ($("#" + col[px] + (py + 1).toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}} else {return false;}}
if (dirv==3){if (px > 0) {if ($("#" + col[px - 1] + py.toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}} else {return false;}}}}
function ES(dummy){getVirtualPos();if (px==-1 || py==-1){return false;}else{
if (dirv==0){if (px>0) {if ($("#" + col[px-1] + py.toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}} else {return false;}}
if (dirv==1){if (py>1) {if ($("#"+col[px] + (py-1).toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}}else{return false;}}
if (dirv==2){if (px<9) {if ($("#"+col[px+1] + py.toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}} else {return false;}}
if (dirv==3){if (py <10) {if ($("#"+col[px]+(py+1).toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}} else {return false;}}}}
function DE(dummy){getVirtualPos();if (px==-1 || py==-1){return false;}else{
if (dirv==0){if (px <9) {if ($("#"+col[px+1] + py.toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}} else {return false;}}
if (dirv==1){if (py<10) {if ($("#"+col[px] + (py+1).toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}}else{return false;}}
if (dirv==2){if (px>0) {if ($("#"+col[px-1] + py.toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}} else {return false;}}
if (dirv==3){if (py > 1) {if ($("#"+col[px] + (py-1).toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {return false;} else {return true;}} else {return false;}}}}
function getVirtualPos(){px=pos0X;py=pos0Y;dirv=dire0;
for (var i = 0; i < datamove.length; i++) {if (px!=-1 && py!=-1){if (datamove[i].s>0) {move_v(datamove[i].s);} if (datamove[i].s==-1) {rot_v(datamove[i].r);}}}}
function rot_v(dir) {if (dir==0) {dirv=dirv-1;if (dirv < 0) {dirv=3;}} else {dirv=dirv+1;if (dirv > 3) {dirv = 0;}}}
function move_v(num) {var gov=true;
if (dirv==0) {if (py > 1) {if ($("#"+col[px] + (py - 1).toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {gov = false;} else {py=py-1;}} else {gov=false;}}
if (dirv==1) {if (px<9) {if ($("#"+col[px+1] + py.toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {gov=false;} else {px=px+1;}} else {gov=false;}}
if (dirv==2) {if (py<10) {if ($("#" + col[px] + (py + 1).toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {gov=false;} else {py=py+1;}} else {gov=false;}}
if (dirv==3) {if (px>0) {if ($("#"+col[px-1] + py.toString()).css("fill") !== $("#" + col[pos0X] + pos0Y.toString()).css("fill")) {gov=false;} else {px=px-1;}} else {gov=false;}}
if (!gov){px=-1;py=-1;}}
function notDone(){getVirtualPos();if (px==-1 || py==-1){return false;}else{if (px==posObX && py==posObY){return false;}else{return true;}}}
function touchHandler(event) {var touch = event.changedTouches[0];var simulatedEvent = document.createEvent("MouseEvent");simulatedEvent.initMouseEvent({touchstart: "mousedown",touchmove: "mousemove",touchend: "mouseup"}[event.type], true, true, window, 1,
touch.screenX, touch.screenY,touch.clientX, touch.clientY, false,false, false, false, 0, null);touch.target.dispatchEvent(simulatedEvent);event.preventDefault();};
function randomSort(){
}
function isCorrect(){
run_code()
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function Blockly_MoverWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
