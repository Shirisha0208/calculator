(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');


    buttons.forEach(function(button,index){
        button.addEventListener("click", function(e){
            let value = e.target.dataset.num;
            if(value === undefined){
                return;
            }
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value ="please enter"
        } else {
            screen.value = eval(screen.value)

        }


    })

    clear.addEventListener("click",(()=>{
        screen.value = "";
    }))

})();

const test = (e)=>{
    console.log(e)
}