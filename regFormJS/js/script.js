/*
Передается:
- макс длина
- id textarea
- id счетчика
*/
function length_check(len_max, field_id, counter_id) { 	
	var current_length = document.getElementById(field_id).value.length; // текущая длина поля ввода
	var rest = len_max - current_length; // кол-во оставшихся символов
	if (current_length> len_max ) {	
		document.getElementById(field_id).value = document.getElementById(field_id).value.substr (0, len_max); // укорачивает строку
		if (rest < 0) { 
			rest = 0;	// в осташиеся символы записывает 0
		} 
		alert('Максимальная длина содержимого поля: ' + len_max + ' символа(-ов)');	
		} else {	
		document.getElementById(counter_id).firstChild.data = rest + ' символов '; // вывод на страницу	
	} 
}


function check_data(obj){
	
	var log = document.getElementById('login').value; // obj.login.value;	
	var pass = document.getElementById('password').value; // obj.password.value;
	var about = document.getElementById('textAbout').value;
	
	
	var check_log = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i.test(log);
	var check_pass = /[0-9a-z]+/i.test(pass);
	
	if(check_log === true && check_pass === true && about != ""){
		alert('Данные введены верно');
	}
	else{
		if(check_log === false){
			alert('Неправильный email.');
		}
		if(check_pass === false){
			alert('Неправильный пароль.');
		}
		if(about === ""){
			alert('Заполните поле "О себе".');
		}
	}
}
