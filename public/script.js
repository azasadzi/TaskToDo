console.log("script.js");

var template= document.getElementById("category-template");
console.log(template);

var categories = ["Work","Life"];

var content = document.getElementById("category-content");
for( var i=0; i< categories.length; i++){
    var category = categories[i];
    //Dynamic html: copying category-template, stuffing it into variable template, grabbing last <div> of html (category-content) and appending (pasting) cloned html to content
    var newNode = template.cloneNode(true);
    //changing id of node so we can access it correctly
    newNode.id = category;
    content.appendChild(newNode);
    //going into the html and making the header title whatever is in the varible category, which is the array of category names
    newNode.getElementsByClassName("category-header-title")[0].innerHTML = category;
}

//once we copy the template and add in the names of the categories, we can delete the original template
template.parentNode.removeChild(template);