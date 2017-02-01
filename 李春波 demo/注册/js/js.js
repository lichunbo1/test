// JavaScript Document

//用户名输入框获得焦点
function nameFocus(){
	var reminderName=document.getElementById("reminderName");
	reminderName.innerHTML="6-12位的数字与字母组合";
	};
	
//用户名文本框失去焦点
function nameBlur(){
	var name=/[A-Za-z][A-Za-z0-9_]{6,12}/;
	var userName= new RegExp(document.getElementById("userName").value);
	var reminderName=document.getElementById("reminderName");
	if(name.test(userName)==false){
		reminderName.innerHTML="6-12位的数字与字母组合";
		reminderName.style.color="red";
		}
	else{
		reminderName.innerHTML="";	
		reminderName.style.color="#999";
		}
	};

//密码输入框获得焦点
function pwdFocus(){
	var reminderPwd=document.getElementById("reminderPwd");
	reminderPwd.innerHTML="密码长度不能小于6";
	}
//密码输入框失去焦点
function pwdBlur(){
	var pwd=/\S{5,}/;
	var userPwd=new RegExp(document.getElementById("userPwd").value);
	var reminderPwd=document.getElementById("reminderPwd");
	if(pwd.test(userPwd)==false||document.getElementById("userPwd").value==""){
		reminderPwd.innerHTML="密码长度不能小于6";
		reminderPwd.style.color="red";
		}
	else{
		reminderPwd.innerHTML="";
		reminderPwd.style.color="#999";
		}
};

//确认密码框获得焦点
function conPwdFocus(){
	var reminderConPwd=document.getElementById("reminderConPwd");
	reminderConPwd.innerHTML="请再次输入密码";
	}
//确认密码框失去焦点
function conPwdBlur(){
	var userPwd=document.getElementById("userPwd").value;
	var reminderConPwd=document.getElementById("reminderConPwd");
	if(document.getElementById("userConPwd").value!==userPwd){
		reminderConPwd.innerHTML="两次密码输入不相同";
		reminderConPwd.style.color="red";
		}
	else{
		reminderConPwd.innerHTML="";
		reminderConPwd.style.color="#999";
	}
}

//邮箱输入框获得焦点
function emailFocus(){
	var reminderEmail=document.getElementById("reminderEmail");
	reminderEmail.innerHTML="请输入正确的邮箱";
	}
//邮箱输入框失去焦点
function emailBlur(){
	var email=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	var userEmail=new RegExp(document.getElementById("userEmail").value);
	var reminderEmail=document.getElementById("reminderEmail");
	if(email.test(userEmail)==false){
		reminderEmail.innerHTML="请输入正确的邮箱格式";
		reminderEmail.style.color="red";
		}
	else{
		reminderEmail.innerHTML="";
		reminderEmail.style.color="#999";
		}
	}
	
//年月日
	//获取年
	function creationYear(n){
	var year=document.getElementById("year");
	var opt = document.createElement ("option");
    opt.value = n;
    opt.innerText = n;
    year.appendChild (opt);
	};
	var now=new Date;
	var nowYear=now.getFullYear();
	for(var i=nowYear;i>nowYear-99;i--){
	creationYear(i);
	};
	
	//获取月
	function creationMonth(n){
	var month=document.getElementById("month");
	var opt = document.createElement ("option");
    opt.value = n;
    opt.innerText =n+"月";
    month.appendChild(opt);
	};
	for(var i=1;i<=12;i++){
	creationMonth(i);
	};

	//获取日
	function creationDay(n){
	var day=document.getElementById("day");
	//创建一个节点<option>
	var opt = document.createElement ("option");
    opt.value = n;
    opt.innerText =n;
	//在父节点<select>下添加此节点
    day.appendChild(opt);
	//添加属性class
	opt.setAttribute("class","option");
	};
	//循环创建31个<option>
	for(var i=1;i<=31;i++){
		creationDay(i);
		}
		
//当月或者年份发生改变时运行	
function resultDay(){	
	//获取class=option的标签；得到的是一个数组
	var option=document.getElementsByClassName("option");
	var selMonth=document.getElementById("month");
	var selYear=document.getElementById("year");
	var month=selMonth.value;
	var year=selYear.value;
	var i=0;
	var j=1
	//判断闰年2月
	if((year%400==0||(year%4==0&&year%100!=0))&&month==2){
		option.item(30).innerHTML="";
		option.item(29).innerHTML="";
		option.item(28).innerHTML="29";
		}
	
	else if(month==2){
		option.item(30).innerHTML="";
		option.item(29).innerHTML="";
		option.item(28).innerHTML="";
		}
	else if(month==4||month==6||month==9||month==11){
		option.item(30).innerHTML="";
		option.item(29).innerHTML="30";
		option.item(28).innerHTML="29";
		}
	else{
		option.item(30).innerHTML="31";
		option.item(29).innerHTML="30";
		option.item(28).innerHTML="29";
		}
}

$(document).ready(function(e) {
	$('#registerBtn').click(function(){
		if($('#chb').is(':checked')){
			$("form").append("<div id='showMessage'></div>");

		alert($('#showMessage'));
		
		$('#showMessage').css({"width":"398px","bolder":"1px solid #999","margin":"auto","padding-top":"20px;","padding-left":"50px;","background":"#999","color":"#00F"});
		var nameVal="姓名："+$('#userName').val();
		var pwdVal="密码："+$('#userPwd').val();
		//判断性别
		var sexVal="性别：男";
		if($('#nan').is(':checked')){
			sexVal="性别：男";
			}
		else{
			sexVal="性别：女";
			}
		var dateVal="生日:"+$('#year').val()+"年"+$('#month').val()+"月"+$('#day').val()+"日";
		var emailVal="电子邮箱:"+$('#userEmail').val();
		$('#showMessage').html(nameVal+"<br>"+pwdVal+"<br>"+sexVal+"<br>"+dateVal+"<br>"+emailVal+"<br>");
		}
	else{
		alert("必须同意遵守会员协议才可注册");
		}
	})
});


