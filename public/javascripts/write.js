/**
 * Created by Cry on 2017/4/1.
 */
$(function () {
	$('#blgSbmt').click(function () {
		$.get('/write/submit',{
			title: $('#title').val(),
			content: $('#content').val()
		});
		window.open('http://localhost:3000/blog');
	});
});