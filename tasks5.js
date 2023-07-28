
//*-----------------------------------  Уровень 5.1 задачника JavaScript  --------------------------------------


// Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел.

const inp1 = document.querySelector('.inp1');
const inp2 = document.querySelector('.inp2');
const p1 = document.querySelector('.p1');
const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', () => {
	p1.textContent = +inp1.value + +inp2.value;
	inp1.value = '';
	inp2.value = '';
})



// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.

const p2 = document.querySelector('.p2');
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () => {
	p2.textContent = p2.textContent ** 2;
})



// Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.

const p30 = document.querySelector('.p30');
const p31 = document.querySelector('.p31');
const p32 = document.querySelector('.p32');
const btn3 = document.querySelector('.btn3');

btn3.addEventListener('click', () => {
	p32.textContent = +p30.textContent + +p31.textContent;
})



// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат.

const pars = document.querySelectorAll('.p4');
for (let p of pars) {
	p.addEventListener('click', () => {
		p.innerHTML = p.innerHTML ** 2;
	})
}



// Даны инпуты, в которые вводятся числа. Сделайте так, чтобы по потери фокуса в любом инпуте его значение возводилось в квадрат.

const inputs = document.querySelectorAll('.inp5');
inputs.forEach(input => {
	input.addEventListener('blur', () => {
		input.value = input.value ** 2
	})
})



//*-----------------------------------  Уровень 5.2 задачника JavaScript  --------------------------------------


// Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.

const p6 = document.querySelector('.p6');
const btn6 = document.querySelector('.btn6');

btn6.addEventListener('click', () => {
	let res = 0;
	for (let i = 1; i < 100; i++) {
		res += i;
	}
	p6.textContent = res;
})



// Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел.

const inp70 = document.querySelector('.inp70');
const inp71 = document.querySelector('.inp71');
const p7 = document.querySelector('.p7');
const btn7 = document.querySelector('.btn7');

btn7.addEventListener('click', () => {
	p7.textContent = Number(inp70.value) + Number(inp71.value);
})



// Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.

const pars8 = document.querySelectorAll('.p8');
const div8 = document.querySelector('.div8');
const btn8 = document.querySelector('.btn8');

btn8.addEventListener('click', () => {
	let count = 0;
	for (let p of pars8) {
		count++;
	}
	div8.textContent = `Количество абзацев: ${count}`;
})



// Дана кнопка и инпут. В инпут вводится строка. По нажатию на кнопку определите, сколько символов в введенной строке.


const div9 = document.querySelector('.div9');
const btn9 = document.querySelector('.btn9');
const inp9 = document.querySelector('.inp9');

btn9.addEventListener('click', () => {
	div9.textContent = `Количество символов в строке: ${inp9.value.length}`;
})



//*-----------------------------------  Уровень 5.3 задачника JavaScript  --------------------------------------


// Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал введенного числа.

const p10 = document.querySelector('.p10');
const btn10 = document.querySelector('.btn10');
const inp10 = document.querySelector('.inp10');

btn10.addEventListener('click', () => {
	let sum = 1;
	for (let i = 2; i <= inp10.value; i++) {
		sum *= i;
	}
	p10.textContent = `Факториал числа ${inp10.value} равен - ${sum}.`;
})



// Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. Определите, какое из введенных чисел больше и выведите его в абзац.

const p11 = document.querySelector('.p11');
const btn11 = document.querySelector('.btn11');
const inp111 = document.querySelector('.inp111');
const inp112 = document.querySelector('.inp112');

btn11.addEventListener('click', () => {
	if (Number(inp111.value) > Number(inp112.value)) {
		p11.textContent = inp111.value;
	} else {
		p11.textContent = inp112.value;
	}
})



// Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите сумму цифр введеного числа.

const p12 = document.querySelector('.p12');
const btn12 = document.querySelector('.btn12');
const inp12 = document.querySelector('.inp12');

btn12.addEventListener('click', () => {
	let sum = 0;
	for (let i = 0; i < inp12.value.length; i++) {
		sum += Number(inp12.value[i]);
	}
	p12.textContent = sum;
})



// Дан абзац, инпут и кнопка. В инпут вводится слово. По нажатию на кнопку переверните слово и запишите его в абзац.

const p13 = document.querySelector('.p13');
const btn13 = document.querySelector('.btn13');
const inp13 = document.querySelector('.inp13');

btn13.addEventListener('click', () => {
	p13.textContent = inp13.value.split('').reverse().join('');
})



// Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.

const pars14 = document.querySelectorAll('.p14');
const btn14 = document.querySelector('.btn14');

btn14.addEventListener('click', () => {
	let num = 1;
	pars14.forEach(el => {
		el.textContent = num++;
	})
})



// Дан инпут, абзац и кнопка. В инпут вводится число. По клику на кнопку выведите в абзац факториал этого числа.

const p15 = document.querySelector('.p15');
const btn15 = document.querySelector('.btn15');
const inp15 = document.querySelector('.inp15');

btn15.addEventListener('click', () => {
	let sum = 1;
	for (let i = 2; i <= inp15.value; i++) {
		sum *= i;
	}
	p15.textContent = `Факториал числа ${inp15.value} равен - ${sum}.`;
})



//*-----------------------------------  Уровень 5.4 задачника JavaScript  --------------------------------------


// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текстом становилось значение '!'.

document.querySelectorAll('.p16').forEach(el => {
	el.addEventListener('click', function () {
		el.textContent = '!'
	})
})



// Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.

const arr17 = [];
const p17 = document.querySelector('.p17');
const links17 = document.querySelectorAll('.a17');
document.querySelector('.btn17').addEventListener('click', () => {
	for (let link of links17) {
		arr17.push(link.href);
	}
	p17.textContent = `${arr17}`;
	console.log(arr17);
})



// Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац.

const p18 = document.querySelector('.p18');
document.querySelector('.btn18').addEventListener('click', () => {
	string = '';
	for (let i = 1; i < 10; i++) {
		string += String(i);
	}
	p18.textContent = string;
})



// Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день.

document.querySelector('.btn19').addEventListener('click', () => {

	let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
	let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

	document.querySelector('.p191').textContent = `Текущий год: ${new Date().getFullYear()}`
	document.querySelector('.p192').textContent = `Текущий месяц: ${months[new Date().getMonth()]}`
	document.querySelector('.p193').textContent = `Текущий день: ${days[new Date().getDay()]}`
})



// Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.

document.querySelector('.btn20').addEventListener('click', () => {
	document.querySelector('.p20').textContent = document.querySelector('.a20').href;
})



//*-----------------------------------  Уровень 5.5 задачника JavaScript  --------------------------------------


// Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате 2025-12-31. 
// По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день.

document.querySelector('.btn21').addEventListener('click', () => {
	let arr21 = document.querySelector('.inp21').value.split('-');
	document.querySelector('.p211').textContent = arr21[0];
	document.querySelector('.p212').textContent = arr21[1];
	document.querySelector('.p213').textContent = arr21[2];
})



// Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.

document.querySelector('.btn22').addEventListener('click', () => {
	let arr22 = [];
	let num1 = Number(document.querySelector('.inp221').value);
	let num2 = Number(document.querySelector('.inp222').value);
	for (let i = num1; i <= num2; i++) {
		arr22.push(i);
	}
	document.querySelector('.p22').textContent = arr22;
	console.log(arr22);
})



// Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите в абзац последний символ введенной строки.

const inp23 = document.querySelector('.inp23');
const p23 = document.querySelector('.p23');

document.querySelector('.btn23').addEventListener('click', () => {
	p23.textContent = inp23.value[inp23.value.length - 1];
	console.log(p23.textContent);
})



// Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в абзаце на единицу.

document.querySelector('.btn24').addEventListener('click', () => {
	document.querySelector('.p24').textContent++;
})



// Дан инпут и абзац. В инпут вводится строка со словами. По потери фокуса выведите в абзац количество слов во введенной строке.

const inp25 = document.querySelector('.inp25');

inp25.addEventListener('blur', () => {
	let arr25 = inp25.value.split(' ');
	document.querySelector('.p25').textContent = `количество слов: ${arr25.length}`;
	// document.querySelector('.p25').textContent = `количество слов: ${inp25.value.split(' ').length}`;
})



//*-----------------------------------  Уровень 5.6 задачника JavaScript  --------------------------------------


// Дан инпут, кнопка и абзац. В инпут вводится год.
// По нажатию на кнопку определите, введен високосный год или нет и выведите информацию об этом в абзац.

const inp26 = document.querySelector('.inp26');
const p26 = document.querySelector('.p26');
const btn26 = document.querySelector('.btn26');

btn26.addEventListener('click', () => {
	let date = new Date(inp26.value, 2, 0);
	if (date.getDate() == 29) {
		p26.innerText = `${inp26.value} год - високосный`
	} else {
		p26.innerText = `${inp26.value} год - НЕ 
		високосный`
	}
})



// Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число из диапазона от 1 до 100.

const inp27 = document.querySelector('.inp27');
const btn27 = document.querySelector('.btn27');

btn27.addEventListener('click', () => {
	inp27.value = Math.ceil(Math.random() * 100 + 1);
})



// Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31.
// По нажатию на кнопку выведите в абзац день недели, соответствующий этой дате.

const inp28 = document.querySelector('.inp28');
const p28 = document.querySelector('.p28');

document.querySelector('.btn28').addEventListener('click', () => {
	let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
	let arr28 = inp28.value.split('-');
	let date = new Date(+arr28[0], +arr28[1] - 1, +arr28[2]);
	p28.textContent = days[date.getDay()];
})



// Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.

const div29 = document.querySelector('.div29');
document.querySelector('.btn29').addEventListener('click', () => {
	div29.style.width = '200px';
	div29.style.height = '100px';
})



// Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку появлялось значение ее атрибута href.

const links30 = document.querySelectorAll('.a30');
links30.forEach(link => {
	link.title = link.href;
})



//*-----------------------------------  Уровень 5.7 задачника JavaScript  --------------------------------------


// Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут.

const list31 = document.querySelectorAll('.li31');
const inp31 = document.querySelector('.inp31');

document.querySelector('.btn31').addEventListener('click', () => {
	let sum = 0;
	list31.forEach(li => {
		sum += Number(li.textContent);
	})
	inp31.value = sum;
})



// Даны теги li с числами и кнопка. По нажатию на кнопку увеличьте все числа в тегах li на единицу.

document.querySelector('.btn32').addEventListener('click', () => {
	document.querySelectorAll('.li32').forEach(li => {
		li.textContent = Number(li.textContent) + 1;
	})
})



// Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку получите массив делителей числа и выведите их в абзац через запятую.

const inp33 = document.querySelector('.inp33');
const p33 = document.querySelector('.p33');
const btn33 = document.querySelector('.btn33');

btn33.addEventListener('click', () => {
	let dividers = [];
	for (let i = 1; i <= inp33.value; i++) {
		if (inp33.value % i == 0) {
			dividers.push(i)
		}
	}
	p33.textContent = dividers;
})



// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст переворачивался.

const pars34 = document.querySelectorAll('.p34');
pars34.forEach(p => {
	p.addEventListener('click', () => {
		p.textContent = p.textContent.split('').reverse().join('');
	})
})



// В инпут вводится число из 6-ти цифр. По нажатию на кнопку проверьте, равна ли сумма первых трех цифр сумме вторых трех цифр.

const inp35 = document.querySelector('.inp35');
const p35 = document.querySelector('.p35');
document.querySelector('.btn35').addEventListener('click', () => {
	if (+inp35.value[0] + +inp35.value[1] + +inp35.value[2] == +inp35.value[3] + +inp35.value[4] + +inp35.value[5]) {
		p35.textContent = 'РАВНА';
	} else {
		p35.textContent = 'НЕРАВНА';
	}
})



//*-----------------------------------  Уровень 5.8 задачника JavaScript  --------------------------------------


// Даны инпуты. В них вводятся числа. Сделайте так, чтобы при потери фокуса в любом из инпутов в нем появлялся квадрат введенного в него числа.

const inputs36 = document.querySelectorAll('.inp36');
inputs36.forEach(inp => {
	inp.addEventListener('blur', () => {
		inp.value = Number(inp.value) ** 2;
	})
})



// Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился случайный элемент массива.

const nums37 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const p37 = document.querySelector('.p37');
const inp37 = document.querySelector('.inp37');
p37.textContent = nums37;

document.querySelector('.btn37').addEventListener('click', () => {
	inp37.value = Math.ceil(Math.random() * nums37.length);
});



// Дан инпут и абзац. В него через запятую вводятся числа. По потери фокуса найдите сумму введенных чисел и выведите ее в абзац.

const p38 = document.querySelector('.p38');
const inp38 = document.querySelector('.inp38');

inp38.addEventListener('blur', () => {
	let sum = 0;
	let arr38 = inp38.value.split(',');
	for (let el of arr38) {
		sum += +el;
	}
	p38.textContent = sum;
})



// Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку получите массив общих делителей этих чисел и выведите его в консоль.

const btn39 = document.querySelector('.btn39');
const p39 = document.querySelector('.p39');
const inp391 = document.querySelector('.inp391');
const inp392 = document.querySelector('.inp392');

btn39.addEventListener('click', () => {
	let arr39New = [];
	let arr39 = [+inp391.value, +inp392.value];
	arr39.sort();
	for (let i = 1; i <= arr39[1]; i++) {
		if (arr39[0] % i == 0 && arr39[1] % i == 0) {
			arr39New.push(i);
		}
	}
	console.log(arr39New);
	p39.textContent = arr39New;
})



// Дан инпут и кнопка. В инпут через запятую вводятся числа. По нажатию на кнопку проверьте, есть ли среди введенных число 13.

const btn40 = document.querySelector('.btn40');
const p40 = document.querySelector('.p40');
const inp40 = document.querySelector('.inp40');

btn40.addEventListener('click', () => {
	let arr40 = inp40.value.split(',');
	for (let el of arr40) {
		if (el == 13) {
			p40.textContent = 'В инпуте ЕСТЬ число 13';
			break;
		} else {
			p40.textContent = 'В инпуте НЕТ числа 13';
		}
	}
})



// Дан инпут и кнопка. В него вводится число из шести цифр.
// По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма первых трех цифр равна сумме вторых трех цифр.

const inp41 = document.querySelector('.inp41');
const p41 = document.querySelector('.p41');
document.querySelector('.btn41').addEventListener('click', () => {
	if (+inp41.value[0] + +inp41.value[1] + +inp41.value[2] == +inp41.value[3] + +inp41.value[4] + +inp41.value[5]) {
		p41.textContent = 'Да, это "Счастливое число" :)';
	} else {
		p41.textContent = 'Нет, это "НЕсчастливое число" :(';
	}
})



//*-----------------------------------  Уровень 5.9 задачника JavaScript  --------------------------------------

// Дан массив с числами, кнопка и инпут. По нажатию на кнопку запишите в инпут все числа из массива, разделив их запятыми.

const inp42 = document.querySelector('.inp42');
const p42 = document.querySelector('.p42');
const arr42 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
p42.textContent = arr42;
document.querySelector('.btn42').addEventListener('click', () => {
	inp42.value = arr42.join();
})



// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в красный цвет.

const pars43 = document.querySelectorAll('.p43');
pars43.forEach(p => {
	p.addEventListener('click', () => {
		p.style.color = "red";
	})
})



// Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.

const inp44 = document.querySelector('.inp44');

inp44.addEventListener('input', () => {
	if (inp44.value == 0 || inp44.value == '') {
		inp44.style.border = '1px solid black';
	} else if (inp44.value % 2 == 0) {
		inp44.style.border = '3px solid green';
	} else {
		inp44.style.border = '3px solid red';
	}
})



// В инпут вводится дата в формате 2025-12-31. По потери фокуса сделайте так, чтобы в инпуте стала дата в формате 35.12.2025.

const inp45 = document.querySelector('.inp45');
inp45.addEventListener('blur', () => {
	inp45.value = inp45.value.split('-').reverse().join('.')
})



// Дан пустой список ul и текстареа. В него вводится текст со знаками препинания.
// По потери фокуса запишите каждое предложение из текста в свой тег li.

const list46 = document.querySelectorAll('.li46');
const textarea46 = document.querySelector('#textarea46');
textarea46.focus();

textarea46.addEventListener('blur', () => {
	let arr46 = textarea46.value.split('.');
	for (let i = 0; i < list46.length; i++) {
		list46[i].textContent = arr46[i];
	}
})



// Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.

const inp47 = document.querySelector('.inp47');

inp47.addEventListener('input', () => {
	if (inp47.value == 0 || inp47.value == '') {
		inp47.style.border = '1px solid black';
	} else if (inp47.value % 2 == 0) {
		inp47.style.border = '3px solid green';
	} else {
		inp47.style.border = '3px solid red';
	}
})



// Дан массив с числами и кнопка. По нажатию на кнопку добавьте в массив случайное число и выведите массив в консоль.

const arr48 = [1, 2, 3];
const btn48 = document.querySelector('.btn48');
const p48 = document.querySelector('.p48');
p48.textContent = arr48;
btn48.addEventListener('click', () => {
	arr48.push(Math.ceil(Math.random() * 100) + 1);
	p48.textContent = arr48;
	console.log(arr48);
})



// Дан массив с названиями цвета. Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в случайный цвет из массива.

const colors49 = ['gray', 'blue', 'yellow', 'green', 'mistyrose', 'olive', 'skyblue'];
const pars49 = document.querySelectorAll('.p49');
pars49.forEach(p => {
	p.addEventListener('click', () => {
		p.style.color = colors49[Math.floor(Math.random() * colors49.length)];
	})
})



// Дан массив с числами, кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац через запятую выводились четные числа из этого массива.

const arr50 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const btn50 = document.querySelector('.btn50');
const p501 = document.querySelector('.p501');
const p502 = document.querySelector('.p502');
p501.textContent = arr50;
btn50.addEventListener('click', () => {
	let arrNew = [];
	for (let elem of arr50) {
		if (elem % 2 == 0) {
			arrNew.push(elem);
		}
	}
	p502.textContent = arrNew;
})



// Дана кнопка и див. По нажатию на кнопку выведите, сколько дней осталось до Нового Года.

const p51 = document.querySelector('.p51');
document.querySelector('.btn51').addEventListener('click', () => {
	let date = new Date();
	let year = date.getFullYear();
	let date1 = new Date(year + 1, 0, 1, 0, 0, 0);
	p51.textContent = `${Math.floor((date1 - date) / 86400000)} дней`;
});



// Дана кнопка и ul. По клику на кнопку выведите список всех годов за сто лет назад и вперед.

const ul52 = document.querySelector('.ul52');
document.querySelector('.btn52').addEventListener('click', () => {
	let year = new Date().getFullYear();
	for (let i = year - 100; i <= year + 100; i++) {
		let li = document.createElement('li');
		li.textContent = `${i} год`;
		ul52.appendChild(li);
	}
})

