// Start for project
var box = document.getElementById('box');
box.style.border='1px solid black';
box.style.padding='30px';


//green,black,blue,orange,purple,yellow,red
var button = document.getElementById('button').children;
button[0].addEventListener('click',function(){
	box.style.backgroundColor='green';
});

var button = document.getElementById('button').children;
button[1].addEventListener('click',function(){
	box.style.backgroundColor='black';
});

var button = document.getElementById('button').children;
button[2].addEventListener('click',function(){
	box.style.backgroundColor='blue';
});

var button = document.getElementById('button').children;
button[3].addEventListener('click',function(){
	box.style.backgroundColor='orange';
});

var button = document.getElementById('button').children;
button[4].addEventListener('click',function(){
	box.style.backgroundColor='purple';
});

var button = document.getElementById('button').children;
button[5].addEventListener('click',function(){
	box.style.backgroundColor='yellow';
});

var button = document.getElementById('button').children;
button[6].addEventListener('click',(e)=>{
	e.preventDefault();
	box.style.backgroundColor='red';
});

// End for project