
(function() {
    
    // to add close button on every li
    var myTaskList = document.getElementsByTagName('li');
    for(var i = 0; i < myTaskList.length; i++){
        var spanNode = document.createElement('span');
        var textNode = document.createTextNode('\u00D7');
        spanNode.className = 'close';
        spanNode.appendChild(textNode);
        myTaskList[i].appendChild(spanNode)
    }
   
    // click on close button to hide the task 
    var closeButtons = document.getElementsByClassName('close');
    var i;
    for(i = 0; i < closeButtons.length; i++){
        closeButtons[i].addEventListener('click', function(){
            var parentElement = this.parentElement;
            parentElement.style.display = 'none';
        })
    }

    // add a 'checked' sign when someone click on task
    var ul = document.querySelector('ul'); //document.getElementsByTagName('ul');
    ul.addEventListener('click', function(ev){
        if(ev.target.tagName === 'LI'){
            ev.target.classList.toggle('checked');
        }
    }, false)

    // add new task
    var addButton = document.getElementById('taskAddButton')
     addButton.addEventListener('click', function addNewTask(){
        var li = document.createElement('li');
        var taskInput = document.getElementById('taskInputBox').value;
        var liText = document.createTextNode(taskInput);
        li.appendChild(liText);
        
        if(taskInput === ''){
            alert('Please enter any task!!')
        }  else {
            document.getElementById('taskList').appendChild(li)
        }

        var span = document.createElement('span');
        var spanText = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(spanText);

        li.appendChild(span);

        for(i = 0; i < closeButtons.length; i++){
            closeButtons[i].addEventListener('click', function(){
                var parentElement = this.parentElement;
                parentElement.style.display = 'none';
            })
        }
      
        document.getElementById('taskInputBox').value = '';
    })
 
 })();