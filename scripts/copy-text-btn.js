//*Knap kopier P*//

function copyText(htmlElement)
{
  if (!htmlElement){
    return;
}

let elementText = htmlElement.innerText;

let inputElement = document.createElement('input');
inputElement.setAttribute('value', elementText);
document.body.appendChild(inputElement);
inputElement.select();
document.execCommand('copy');
inputElement.parentNode.removeChild(inputElement);

}
//*Knap kopier Pentia Invisible*//
document.querySelector('#copy-text-btn-1').onclick =
function ()
{
  copyText(document.querySelector('#text-1'));

  alert("Hex kode kopiret")
}

//*Knap kopier lyseblå*//

document.querySelector('#copy-text-btn-2').onclick =
function ()
{
  copyText(document.querySelector('#text-2'));

  alert("Hex kode kopiret")
}

//*Knap kopier lyserød*//

document.querySelector('#copy-text-btn-3').onclick =
function ()
{
  copyText(document.querySelector('#text-3'));

  alert("Hex kode kopiret")
}

//*Knap kopier lysegul*//

document.querySelector('#copy-text-btn-4').onclick =
function ()
{
  copyText(document.querySelector('#text-4'));

  alert("Hex kode kopiret")
}

//*Knap kopier rød*//

document.querySelector('#copy-text-btn-5').onclick =
function ()
{
  copyText(document.querySelector('#text-5'));

  alert("Hex kode kopiret")
}

//*Knap kopier hvid*//

document.querySelector('#copy-text-btn-6').onclick =
function ()
{
  copyText(document.querySelector('#text-6'));

  alert("Hex kode kopiret")
}

//*Knap kopier hvid*//

document.querySelector('#copy-text-btn-7').onclick =
function ()
{
  copyText(document.querySelector('#text-7'));

  alert("Hex kode kopiret")
}