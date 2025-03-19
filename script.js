const addBtn=document.getElementById('add-btn');
const todoInput=document.getElementById('todo-input')
const todoItemsContainer=document.getElementById('todo-items-container')


addBtn.addEventListener('click',()=>{
    const value=todoInput.value
    // console.log('user entered', value);

    const li=document.createElement('li');  // make li tag <li></li>
     li.innerText=value //  user ki value ko li tag me daal diya


     const delButton=document.createElement('button')
     delButton.innerText='X';

     delButton.addEventListener('click',function(){
        li.remove();
     })
     li.appendChild(delButton);


        todoItemsContainer.appendChild(li);
        todoInput.value='';
    
    });
