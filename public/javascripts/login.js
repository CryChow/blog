/**
 * Created by Cry on 2017/4/15.
 */
var check = true;
function  checkLogin() {
	return check;
}
$(function () {
	$('#loginSbmt').click(function () {
		$.ajax({
			url: '/login/find',
			type: 'post',
			data: {
				userName: $('#logUserName').val(),
				password: $('#logPW').val()
			},
			success: function (data, textStatus) {
				if (data.status == "success") {
					check = true;
					location.href = "http://localhost:3000/";
					/*$('#loginForm').action = 'http://localhost:3000';*/

				}
			},
			error: function(data,err){
				location.href = 'http://localhost:3000/login';
			}
		});
		/*window.open('http://localhost:3000/login');*/
	});
});