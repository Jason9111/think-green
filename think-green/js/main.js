const mobBtn = document.querySelector('.hamburger-bar');
const secondBar =  document.querySelector('.bar-2');
const thirdBar =  document.querySelector('.bar-3');
const navContent = document.querySelector('.nav-content');
const loadUrl = 'http://localhost:8888/tran-hungson-final-edited/xml/xml.txt';
const seeMore = document.querySelector('.see-more');
const fetchedContent = document.querySelector('.fetched-content');

function slideBar(){
	secondBar.classList.toggle('slide-bar-2');
	thirdBar.classList.toggle('slide-bar-3');
	navContent.classList.toggle('active-1');
}



mobBtn.addEventListener('click', slideBar)

//load data

function loadContent(){
	let p = document.createElement('p');
	fetchedContent.appendChild(p);
	fetch (loadUrl).
	then(function(response){
		if(response.statusText === "OK"){
			return response.text();
		}
	}).
	then(function(data){
		p.innerHTML = data;
	}).
	catch()
	fetchedContent.classList.add('fade');
	seeMore.classList.add('disactive');

}

seeMore.addEventListener('click', loadContent);


