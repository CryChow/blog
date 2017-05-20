/**
 * Created by Cry on 2017/4/13.
 */
$(function () {
	$('#regSbmt').click(function () {
		var userName = $('#userName').val();
		var passport = $('#passport').val();
		var	pssprtMkSure = $('#pssprtMkSure').val();
		if(userName == '' || passport == '' || pssprtMkSure == ''){
			alert('can not accept null');
		}
		else if (passport == pssprtMkSure){
			$.post('/reg/save',{
				userName: userName,
				passport: passport,
				pssprtMkSure: pssprtMkSure
			},function (data, textStatus) {
				var username = data.userName;
				if(username == 'exist'){
					alert('username exist');
				}
				else{

				}
			});
		}
		else{
			alert('passport error');
		}
	});
});