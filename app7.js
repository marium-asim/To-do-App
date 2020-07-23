var list=document.getElementById("list");

function addTodo()
{
    var todo_item=document.getElementById("todo-item");

    var li=document.createElement('li');
    var liTxt=document.createTextNode(todo_item.value);
    li.appendChild(liTxt);

    var del=document.createElement('button');
    var delTxt=document.createTextNode("Delete");
    del.appendChild(delTxt);
    del.setAttribute("id","delBtn");
    del.setAttribute("onclick","deleteItem(this)");
    li.appendChild(del);

    var edit=document.createElement('button');
    var editTxt=document.createTextNode("Edit");
    edit.appendChild(editTxt);
    edit.setAttribute("id","editBtn");
    edit.setAttribute("onclick","editItem(this)");
    li.appendChild(edit);

    list.appendChild(li);
    todo_item.value=" ";

}

function delAll()
{
   list.innerHTML="";
}

function deleteItem(e)
{
    e.parentNode.remove();
}

function editItem(e)
{
    var update=prompt("Enter new item", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=update;
}