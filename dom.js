// EXAMINE THE DOCUMENT OBJECT//

// console.dir(document);
// console.log(document.domain);
// console.log(document.title);
// console.log(document.doctype);

// GETELEMENTBY ID//

// console.log(document.getElementById('header-title'));

// QUERYSELECTOR // 

//var input = document.querySelector('input');
//input.value = 'To Do'

//var submit = document.querySelector('input[type="submit"]')
//submit.value="Add"

//Add an item when the button is clicked//

//var itemInput = document.querySelector('input[type="text"]');
//var form = document.querySelector('form');

//form.addEventListener('submit', runEvent);


//function runEvent(e){
    //e.preventDefault();
    //console.log('EVENT TYPE: '+e.type);

//}

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', removeItem);

//add item

function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    var deleteBtn = document.createElement('button');

    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}




