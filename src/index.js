import "./style.scss";

let url = new URL(window.location.href);
let params = url.searchParams;
let campaign = params.get('campaign');
let winW;
let tb = 768;
let modalSP = document.querySelector('.p-modalSP');
let modalPC = document.querySelector('.p-modalPC');
//let getScrollY;
//let Offset;

if (campaign && campaign == 'register' || campaign && campaign == '202105') {
	window.onload = function () {
		winW = window.innerWidth;
		if (winW >= tb) {
			modalPC.click();
		} else {
			modalSP.click();
		}
	}
}

window.addEventListener('DOMContentLoaded', () => {
	const anchorLinks = document.querySelectorAll('a[href^="#"]');
	const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  
	anchorLinksArr.forEach(link => {
	  link.addEventListener('click', e => {
		e.preventDefault();
		const targetId = link.hash;
		const targetElement = document.querySelector(targetId);
		const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
		window.scrollTo({
		  top: targetOffsetTop,
		  behavior: "smooth"
		});
	  });
	});
  });
/*
getWidth();
window.onresize = getWidth;
function getWidth() {
	winW = window.innerWidth;
	getScrollY = window.pageYOffset;
	if (winW >= tb) {
		Offset = 510
	} else {
		Offset = 370;
	}
}

window.addEventListener ('scroll', function () {
	if (getScrollY >= Offset) {
		setTimeout (() => {
			registerBTN.classList.add('is-appered');
		}, 500);
	} else {
		setTimeout (() => {
			registerBTN.classList.remove('is-appered');
		}, 500);
	}
});
*/