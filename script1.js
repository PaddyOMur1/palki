let palnum = 0
let palkiBot = 0
let pobeda = true
let hody1 = 0
let hody2 = 0
function palnum1 (){
 palnum = Math.round(Math.random()*15);
}
function palkiBot1(){  
    palkiBot = Math.round(Math.random()*3);}
palkiBot1()
do {
  palnum1()
} while (palnum<10)
document.getElementById('dv').textContent=(palnum + ' nachalnoe chislo')
let palki = 0
let palnum2 = 0
function palki1(){
palki = document.getElementById("vvod").value
  if (palki<= 3 && palki > 0 && palnum>=palki){
    palnum = palnum - palki
    hody1++
  if (palnum>=palki){
  (palki, 'skolko ty wichel')}
    else {
   /*document.getElementById('dv').textContent='bot wyigral'
      pobeda = false
      location.reload()*/
    }
} else{
  alert('nelza stolko ybrat')
  } palnum = palnum- palkiBot
  if (palkiBot>0){
    console.log(palkiBot,'hod bota'); 
    hody2++
    palkiBot1()
   if(palnum>=palkiBot) {
  document.getElementById('dv').textContent=(palnum + ' itog hodov')}else{
   /*document.getElementById('dv').textContent= 'ty wyigral'*/
  }
  } else {
    palkiBot1()
    palki1()
  }
}
function relpg(){
  location.reload()
}
function pobeditel(){
  if (hody1>hody2 && palki>=palnum){
     document.getElementById('dv').textContent='bot wyigral'
  } else if (hody2>hody1 && palkiBot>=palnum){
    document.getElementById('dv').textContent= 'ty wyigral'
  }
}
btn.addEventListener("click", function() {
 pobeditel()
})