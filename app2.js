// es5 --> var onclick es6 --> let,const, eventListener

//var input = document.getElementsByTagName('input')[0];
//var adder = document.querySelector('.add');
//var ol = document.getElementsByTagName('ol')[0];

//function add(){
//	var li = document.createElement('li');
//	console.log(li);
//	li.innerText=input.value;
//	ol.append(li);
//}


const input = document.getElementsByTagName('input')[0];
const addBtn = document.getElementsByTagName('button')[0];
const ol=document.getElementsByTagName('ol')[0];
// click,scroll,key,doubleclick
	addBtn.addEventListener("click",()=>{
	// 1. create li -> createElement('tagName');
	let li = document.createElement('li');
	// 2. check li	
	console.log(li);
	// 3. li dotor inputiin text oruulna
	li.innerText = input.value;
	// 4.ol dotor li-iing oruulna
	ol.append(li);
	
	input.value="";
	
	let deletebutton = document.createElement('button');
	deletebutton.innerHTML = '<i class="bi bi-trash2-fill"></i>';
	li.append(deletebutton);
	
	let checkbutton = document.createElement('button');
	checkbutton.innerHTML = '<i class="bi bi-clipboard-check"></i>';
	li.append(checkbutton);
	
	// tag d class Name uguh ->className
	deletebutton.className = "delete";
	savaData();
});

ol.addEventListener("click",(e)=>{
	console.log(e.target);
	let targetEl= e.target;
	//let parentEl = targetEl.parentElement;
	//let grandfatherEl= parentEl.parentElement;
	let parentEl = (targetEl.parentElement).parentElement;
	if(e.target.className=="bi bi-trash2-fill"){
		grandfatherEl.remove();
		parentEl.remove();
	}else if(e.target.className=="bi bi-clipboard-check"){
		parentEl.classList.toggle("checked");
	}
	savaData();
});
 

// database -> ugugdliin san -> mysql, sql
// browser-iin database -> localstorage
// setitem() -> hadgalah, getitem() ->avah
	localStorage.setItem("ner","bayarbolod");

function savaData(){
	localStorage.setItem("todoapp",ol.innerHTML);
}
function getData(){
	ol.innerHTML = localStorage.getItem("todoapp");
}
getData();