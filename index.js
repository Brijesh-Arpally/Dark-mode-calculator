const switchbtn = document.getElementById("switch");
const display = document.getElementById("display");
const input = document.querySelectorAll("input");
let value = "";
switchbtn.addEventListener("click", ()=> {
    if(switchbtn.checked == true){
        document.body.setAttribute("data-theme", "dark");
    }else{
        document.body.setAttribute("data-theme", "");
    }
});
input.forEach((e)=>{
    e.addEventListener("click", (Event)=>{
        if(Event.target.value == "="){
            if(value.length !=0){
                let newval = eval(value);
                value = newval;
                display.value = value;
            }
        }else if(Event.target.value == 'C'){
            value = "";
            display.value = value;
        }else if(Event.target.value == "switch"){
        }else{
            value += Event.target.value;
            display.value = value;
        }
        if(!Event.target.classList.contains("switch")){
            Event.target.classList.add("active");
            setTimeout(()=>{
                Event.target.classList.remove("active");
            },400);
        }
    });
})
