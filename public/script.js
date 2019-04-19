console.log("script.js");

var template= document.getElementById("category-template");
console.log(template);

//array of objects (the object is the task, it includes boolean of whether or not the check mark is checked, a string of the task, and a dateTime object for the due date)
var categories = [
    {
        categoryTitle: "Work",
        color:"purple",
        toDos: [
            {
                isChecked: false,
                task: "Our new task",
                dueDate: new Date()
            },
            {
                isChecked: true,
                task: "Complete task that i completed yesterday",
                dueDate: new Date()
            }
        ]
    }
]

var createCategory = ()=>{
    //prompt creates popup window
    var newCategoryName = prompt("What is the title of your category?");
    var newCategoryColor = prompt("What color do you want your category to be?");
    //add to categories array
    categories.push({
        categoryTitle: newCategoryName,
        color: newCategoryColor,
        toDos:[]
    })
    console.log(categories);
    render();
}

var createTask = (node)=> {
    var id = node.parentNode.parentNode.id;
    var newTask= prompt("What is your task?")
    var newDate = new Date(Date.parse(prompt("When is the task due?")));
    //determine which category to add the task to, shorthand instead of for loop
    var index = categories.findIndex(o=>o.categoryTitle ===id);
    categories[index].toDos.push({
        isChecked:false,
        task:newTask,
        dueDate:newDate,
    })
    render();
}
//${isChecked?} is a ternerary expression, basically an if/else
var generateTableRow= (isChecked, task, dueDate)=>{
    var checkStyle = `style= "background-color:gray; color:white; border-radius:25px;"`; //25 px means circle
    var dateFormat = `${dueDate.getMonth()+1}/${dueDate.getDate()}/${dueDate.getYear()+1900}`
    return `
    <tr class="tr-toDo">
    <td class="td-check">    
    <i ${isChecked?checkStyle:""} class="far fa-check-circle icon"></i>
    </td>
    <td class="td-task">
        ${task}
    </td>
    <td class="td-date">
        ${dateFormat}
    </td>
    <td class="td-trash">
        <i class="far fa-trash-alt icon"></i>
    </td>
</tr>
    `;
}

var content = document.getElementById("category-content");

var render = ()=> {
    content.innerHTML=""
    for( var i=0; i< categories.length; i++){
        var category = categories[i];
        var categoryTitle = category.categoryTitle;
        //Dynamic html: copying category-template, stuffing it into variable template, grabbing last <div> of html (category-content) and appending (pasting) cloned html to content
        var newNode = template.cloneNode(true);
        newNode.style.display = "inline-block";
        //changing id of node so we can access it correctly
        newNode.id = categoryTitle;
        content.appendChild(newNode);
        //going into the html and making the header title whatever is in the varible category, which is the array of category names
        newNode.getElementsByClassName("category-header-title")[0].innerHTML = categoryTitle;
        newNode.style.border ="1px solid " +category.color;
        newNode.getElementsByClassName("category-header")[0].style.backgroundColor = category.color;
        //looping through our object array
        var temp= ""
        for(var j=0; j< category.toDos.length; j++){
            var toDo=category.toDos[j];
            temp += generateTableRow(toDo.isChecked, toDo.task, toDo.dueDate)
    
        }
        newNode.getElementsByClassName("tbody")[0].innerHTML = temp;
    }
}
render();

//once we copy the template and add in the names of the categories, we can delete the original template
template.style.display="none";