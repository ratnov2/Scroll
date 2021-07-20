let prot = document.querySelector('.prot');
window.k = true;
window.u = true;
document.addEventListener('scroll', func1)

function func1() {

  console.log(pageYOffset);
  if (pageYOffset > 100 && k) {
    console.log('f');
    if (u) {
      window.button = document.createElement('buttom');
      document.body.appendChild(button);
      let img = document.createElement('img');
      img.src = 'but.png';
      img.classList.add('button');
      img.addEventListener('click', func2);
      button.appendChild(img);
      u = false;
    }




    //document.body.style.height = 400 + 'px';
    //document.removeEventListener('scroll', func1);
    k = false;
  }
}
function func2() {
  let i = document.querySelector('buttom');
  console.log(document.body.removeChild(i));

  document.documentElement.scrollTop = 0;

  setTimeout(func3, 1000);
  //document.body.style.height = 200 + 'px';
  //document.removeEventListener('click',func2());
  //pageYOffset = 0;
}
function func3() {
  k = true;
  u = true;
}