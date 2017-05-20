/**
 * Created by Cry on 2017/4/1.
 */

var check = false;
function checkSubmit(){
	return check;
}
$(function () {
	$('#blgSbmt').click(function () {
		var title = $('#title').val();
		var content = $('#content').val();
		if(title.length >= 5 && content.length >= 20){
			check = true;
			var now = new Date();
			var time = now.getFullYear().toString() + "-" + now.getMonth().toString() + "-" + now.getDate().toString();
			$.get('/write/submit',{
				title: $('#title').val(),
				content: $('#content').val(),
				time: time
			});
		}
		else if(title.length < 5){

			alert("标题不能少于5个字！！！");
		}
		else{
			alert("内容不能少于20字！！！");
		}

	});

});