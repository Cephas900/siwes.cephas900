let time = document.querySelector('.time'),
    Greeting=document.querySelector('.Greeting'),
    task=document.querySelector('.task'),
    tasks_container=document.querySelector('.tasks-container'),
    view_container=document.querySelector('.view-container'),
    add_container=document.querySelector('.add-container');

function addZeros(value){
    return value<10 ? `0${value}`: value;
}


setInterval(function(){
    let Mydate= new Date(),
    hours=Mydate.getHours(),
    amPm=hours >= 12 ? "PM" : "AM",
    minutes=Mydate.getMinutes(),
    seconds=Mydate.getSeconds();
    hours= hours>12 ? Mydate.getHours() % 12 : hours;
    time.textContent=`${addZeros(hours)}:${addZeros(minutes)}:${addZeros(seconds)}${amPm}`
    let newHour = Mydate.getHours();
if (newHour >=12 && newHour <16){
    Greeting.textContent="Good Afternoon";
} 
else if(newHour < 12){
    Greeting.textContent-"Good Morning";
}
else if(newHour >=16 && newHour<=23){
    Greeting.textContent="Good Evening";
}
    },1000)
    function add_task (){
    add_container.style.display="block";
    }
    function Close_task (){
    add_container.style.display="none";
    }
    let tasks =[];
    function Save_task(){
    tasks.push(task.value);
    
}
function view_task(){
    view_container.style.display="block";
}
function close_view(){
    view_container.style.display="none";
}
let tasks_markup='';
if(tasks.length == 0){
    tasks_container.innerHTML+="<span>There are no tasks yet!!!</span>";
} else{
tasks.forEach(each =>{
    tasks_container.innerHTML+=`<div class='.task'><span>${each}</span><button>Delete</button></div>`;   
})
}