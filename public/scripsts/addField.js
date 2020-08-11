document.querySelector("#add-time")
.addEventListener('click', cloneField);

function cloneField(){
 const newFielContainer = document.querySelector('.schedule-item').cloneNode(true)
    
 const fields = newFielContainer.querySelectorAll('input')
 
 fields.forEach(function(field){
        field.value = ""

 })
 
 document.querySelector('#schedule-items').appendChild(newFielContainer)

}
