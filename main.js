const outputElement=document.querySelector('#output');
const btnCopy=document.querySelector('#copy');
const passwordLengthElement=document.querySelector('#length');
const capitalElement=document.querySelector('#Capital');
const smallElement=document.querySelector('#Small');
const numberElement=document.querySelector('#number');
const symbolElement=document.querySelector('#Symbol');
const form=document.querySelector('#frm');




btnCopy.addEventListener('click',async()=>{
    const pass=outputElement.value;
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert('Copied!!!')
    }else{
        alert("There is No password to copy")
    }
})



function generateRandomChar(min,max)
{
    const n=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*n)+min);
}

function capitalValue(){
    return generateRandomChar(65,90);

}
function smallValue(){
    return generateRandomChar(97,122);

}
function numberValue(){
    return generateRandomChar(48,57);

}

function symbolValue(){
    const symbol="~!@#$&*_-";
    return symbol[Math.floor(Math.random()*symbol.length)];
}



const functionArray=[
    {
        element:capitalElement,
        fun:capitalValue
    },
    {
        element:smallElement,
        fun:smallValue
    },
    {
        element:numberElement,
        fun:numberValue
    },
    {
        element:symbolElement,
        fun:symbolValue
    }
];


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const limit=passwordLengthElement.value;



    let generatedPassword="";

    const funArray=functionArray.filter(({element})=>element.checked);

    console.log(funArray);
    for(i=0;i<limit;i++){
        const index=Math.floor(Math.random()*funArray.length);
        const letter=funArray[index].fun();
        generatedPassword+=letter;
    }


    outputElement.value=generatedPassword;

    
});