var exports=module.exports;
function test(){
	
	alert("test");
}
var name="hh";
exports.test=test;
exports.name=name;
$(function(){
	alert("onload");
})