let counter= document.querySelector('.counter');
const addCount= document.querySelector('#addCountBtn');
const lowerCount= document.querySelector('#lowerCountBtn');


let count =0;
addCount.addEventListener('click', increamentCounter);
lowerCount.addEventListener('click', decreamentCounter);


function increamentCounter(){
    count++;
    counter.innerHTML=count;
    if(counter.innerHTML > '0'){
        counter.style.color ='#4caf50'
    }
    else if(counter.innerHTML==='0' ){
        counter.style.color='white';
    }

    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
    {duration:800,fill:'forwards'});
}

function decreamentCounter(){
    count--;
    counter.innerHTML=count;
    if(counter.innerHTML < '0'){
        counter.style.color ='red'
    }
    else if(counter.innerHTML==='0' ){
        counter.style.color='white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
    {duration:800,fill:'forwards'});
}