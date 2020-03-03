var createItem;
var listParent = document.getElementById('todo-list');
var addItemButton = document.getElementById('addItem');


function createTask(){
    var itemInput = document.getElementById('item');
      if(itemInput.value != ''){
        createItem = document.createElement('p');
        createItem.setAttribute('class', 'list-group-item list-group-item-white');
        var parent = document.createElement('p');
        icon = document.createElement('I');
        icon.setAttribute('class', 'fas fa-arrow-circle-right')
        parent.appendChild(icon);
        var text = document.createTextNode(itemInput.value);
        parent.appendChild(text);
        createItem.appendChild(parent);
        itemInput.value = '';
        addDeleteButton();
        disableTeamMember();
        addReassignButton();
      }
}

function addItemToList(){
  var member = answers();
if (member === 'Eileen'){
  createTask();
  document.getElementById('todo-list1').appendChild(createItem);
}else if(member === 'John'){
  createTask();
  document.getElementById('todo-list2').appendChild(createItem);
}else if(member === 'Sara'){
  createTask();
  document.getElementById('todo-list3').appendChild(createItem);
}else if(member === 'Urusa'){
  createTask();
  document.getElementById('todo-list4').appendChild(createItem);
 }
}


function addDeleteButton(){
  var listItem = createItem;
  var deleteButton = document.createElement('I');
  deleteButton.setAttribute('class', 'fas fa-times-circle text-danger');
  listItem.appendChild(deleteButton);
  deleteButton.onclick = function(){
    listItem.remove();
  }
}

function addReassignButton(){
  var listItem = createItem;
  var reassignButton = document.createElement('BUTTON');
  var buttonText = document.createTextNode('Reassign Task');
  reassignButton.appendChild(buttonText);
  listItem.appendChild(reassignButton);

  reassignButton.addEventListener('click', reassignTask);
}

/***Add Reassign Button to Task***/
function disableTeamMember(){
  var team = answers();
  var list = createItem;
  var reassignSelect = document.getElementById('selectTeamMember');
  var option = document.getElementsByTagName('option');

   for (let i = 0; i< option.length; i++){
     if(team === option[i].value){
         option[i].disabled = true;
     }else{
         option[i].disabled =false;
     }
   }
   var clone = reassignSelect.cloneNode(true);
   clone.id= 'reassign';
  list.appendChild(clone);
}

function keyPress(e){
      var keycode = (e.keyCode ? e.keyCode : e.which)
      if(keycode === 13){
        addItemToList();
      }
}
document.addEventListener('keydown', keyPress);

$(document).ready(function(){

  $('#addItem').click(function(){
    $('li').slideDown(500);
  });
  $(document).keydown(function(){
    $('li').slideDown(500);
  });
});

function answers() {
var answer=document.getElementById("selectTeamMember").value;
 return answer;
}

function reassignTask(){
  var answer1=document.getElementById("reassign").value;
  var member1 = answer1;
if (member1 === 'Eileen'){
  createTask();
  document.getElementById('todo-list1').appendChild(createItem);
}else if(member1 === 'John'){
  createTask();
  document.getElementById('todo-list2').appendChild(createItem);
}else if(member1 === 'Sara'){
  createTask();
  document.getElementById('todo-list3').appendChild(createItem);
}else if(member1 === 'Urusa'){
  createTask();
  document.getElementById('todo-list4').appendChild(createItem);
 }
}
