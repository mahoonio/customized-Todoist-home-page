function showAddField()
{
   var x =  document.getElementById('AddField');
   x.style.display = "block";
}
function hideAddField()
{
   var x =  document.getElementById('AddField');
   x.style.display = "none";
}


const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");




function addToList(e){
   const taskList = document.getElementById("pls");
   console.log(addBtn);
   ;
   // var length = document.querySelectorAll("li").length;
   // var id = "li"+length;
   // const label = document.createElement('label');
   // label.htmlFor = id;
   const newLi = document.createElement('li');
   const btn = document.createElement('button');
   
   
   
      newLi.appendChild(btn);
      
      // newLi.appendChild(btn);
      // newLi.appendChild(label);
      // taskInput.value = '';
      taskList.appendChild(newLi);
   
}