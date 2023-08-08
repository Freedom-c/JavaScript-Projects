const checkboxes=document.querySelectorAll('.inbox input [type="checkbox"]');

let lastChecked;

function checkTheBox(e){
    let inBetween=false;

    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox =>{
            console.log(checkbox);

            if(checkbox===this || checkbox===lastChecked){
                console.log("started")
            }
        })
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', checkTheBox);
});