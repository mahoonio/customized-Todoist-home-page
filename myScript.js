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


var inputnode = document.querySelector('.text-area-container > input');
inputnode.addEventListener('keyup',(e) => {
   (e.keyCode === 13? addList() : null )
})
var addbtn = document.getElementById("pbtn");

function addList()
{
   if(inputnode.value!=='')
   {
      var text = inputnode.value;
  var button = document.createElement('button');
  button.innerHTML = text;
  var Li = document.createElement('LI');
  var Ul = document.getElementById("ulist");
  Li.appendChild(button);
  Ul.appendChild(Li);
   }
  
  button.addEventListener('click' , function(){
     const parent = this.parentNode;
     parent.remove();
  })
}