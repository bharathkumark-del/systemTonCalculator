const clear=document.querySelector('#clear');
const input=document.querySelector('#field')

function display(val){
    input.value += val;

}
function sum(){
    let x= input.value;
    let y = eval(x);
    input.value=y
}
clear.addEventListener('click',()=>{
    input.value=''
})
