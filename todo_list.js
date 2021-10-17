var createTask;
var addItemButton = document.getElementById('addItem');
var teamMember = document.getElementsByClassName('team');
var counter = 0;

/*** Create Individual Task Container ***/
function createTaskContainer(){
    var textInput = document.getElementById('taskInput');
    createTask = document.createElement('li');
    createTask.setAttribute('class', 'list-group-item');
    createTask.id = 'task-' + counter;
    var taskTitle = document.createElement('span');
    icon = document.createElement('I');
    icon.setAttribute('class', 'fas fa-arrow-circle-right')
    taskTitle.appendChild(icon);
    var text = document.createTextNode(taskInput.value);
    taskTitle.appendChild(text);
    createTask.appendChild(taskTitle);
    counter++;
    textInput.value = '';
    addDeleteButton();
    addDropdownToTask();
    addReassignButton();
}

/***Add Task to selected team member's column***/
function addItemToList(){
  var input = document.getElementById('taskInput');
  if(input.value != ''){
  var selectMember=document.getElementById("selectTeamMember").value;
    for (let i=0; i< teamMember.length; i++ ){
      if (selectMember === teamMember[i].id){
        selectMember.value;
        createTaskContainer();
        document.getElementById(teamMember[i].id).appendChild(createTask);
      }
    }
  }
}

/*** Task's Delete Button ***/
function addDeleteButton(){
  var listItem = createTask;
  var deleteButton = document.createElement('I');
  deleteButton.setAttribute('class', 'fas fa-times-circle text-danger delete');
  listItem.appendChild(deleteButton);
  deleteButton.onclick = function(){
    listItem.remove();
  }
}

/***Task's Reassign Button***/
function addReassignButton(){
  var li = document.getElementsByTagName('li');
  var reassignButton = document.createElement('BUTTON');
  var buttonText = document.createTextNode('Reassign Task');
  reassignButton.setAttribute('class', 'assign');
  reassignButton.appendChild(buttonText);
  createTask.appendChild(reassignButton);
  //console.log(reassignButton);

  reassignButton.onclick = function(){
    //console.log('1');
    for (let i=0; i< li.length; i++ ){
      console.log(li[i]);
      if (li[i].id === this.parentNode.id){
        //console.log(li[i].id);
        //console.log(reassignButton.parentNode.id);
        reassignTask();
      }
    }
  }
}

/***Add Reassign Select Dropdown to Task***/
function addDropdownToTask(){
  var array = ["Eileen","John","Sara","Urusa"];

  //Create and append select list
  var selectList = document.createElement("select");
  selectList.id = "reassign";
  createTask.appendChild(selectList);
  //Create and append the options
  for (var i = 0; i < array.length; i++) {
      var option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      selectList.appendChild(option);
  }
}

/***Reassign Task***/
function reassignTask(){
  var li = document.getElementsByTagName('li');
  var teamMember = document.getElementsByClassName('team');

  for (let i=0; i< teamMember.length; i++ ){
      for (let j = 0; j< li.length; j++){
        //console.log(li)
        var reassignToDropdown = li[j].childNodes[2].value;
        console.log(li[j].childNodes[2].value)
        if (reassignToDropdown === teamMember[i].id){
          document.getElementById(teamMember[i].id).appendChild(li[j]);
        }
      }
   }
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
    $('.list-group-item').slideDown(500);
  });


  $(document).keydown(function(){
    $('.list-group-item').slideDown(500);
  });

});
