// Ignore
// for (i=1;i<=n;i++){
     
//     let num = ran()
//     if (num>max){
//         num%=max;

//     }
//     console.log(num)

// }

// function ran(){
//     let rand;
//     rand =(((new Date().getTime())%max)*10).toFixed(0);
//     return rand;
// }

// const min=document.getElementById('min').value;
// const max=document.getElementById('max').value;
// const n= document.getElementById('range').value;

// const min=0
// const max=100
// const n=5



const min = prompt('enter minimum range') // user input
const max = prompt('enter max range')
const n = prompt('enter the number')



let ul= document.querySelector('ul')

function random(i){
    let result = (((new Date().getMilliseconds())%max)); // using Epoch time for a number
    result*=i;
    if (result>max){
        result%=(max-min);
    }else if (result<min){  // prevent result to fall lower than Lower limit
        result+=min
    }
    //  console.log(result)
    return result
}
 
function generate(){
    
    for (let i=1;i<=n;i++){
        let num = random(i);
        const listElement= document.createElement('li')// creating list
        listElement.textContent=num;
        ul.appendChild(listElement);
        console.log(num)
    }
}


generate();


// Ignore
// function handler(event){
// event.preventDefault();
//     generate();
// }
// form.addEventListener('submit',handler)

 // new Date().getMilliseconds().toFixed(0)
 