

function getTodos() {       //This function gets the task from input
    var List = new Array;
    var ListString = localStorage.getItem('todo');
    if (ListString !== null) {
        List = JSON.parse(ListString);
    }
    return List;
}

function add() {        //This funcion add the inputed task to the getTodos function array
    var task = document.getElementById('task').value;
    var List = getTodos();
    List.push(task);
    localStorage.setItem('todo', JSON.stringify(List));
    document.getElementById('task').value = "";
    show();
    return false;
}

function show() { //this function keeps the task permanently displayed on the screen
    var List = getTodos(); //this set the task that was retrived as a variable
    var html = "<ul>";      //this set up each task as a an unordered list
    for ( var i=0; i<List.length; i++ ) {
        html += "<li>" + List[i] + "<button class='remove' id='" + i + "'>&times;</button></li>"; //This display the task as a list and creates the button with the x
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html; //This display the task as list

    var buttons = document.getElementsByClassName("remove");
    for (var i=0;i<buttons.length;i++) {
        buttons[i].addEventListener('click', remove);
    }

}

function remove() {
    var item = this.getAttribute('id');
    var List = getTodos();
    List.splice(item,1);
    localStorage.setItem('todo', JSON.stringify(List));
    show();
    return false;
}

document.getElementById('add').addEventListener('click', add); //This display the inputed task when the 'Add Item' button is clicked
show();                                                         //This will keep the inputs displayed permanentaly on the screen