const newNoteButton = document.getElementById("new-note-button")
newNoteButton.addEventListener("click",  function() {
    alert("clicked new note")//shes working

    const div1 = document.getElementById("div1");
    const form1 = document.getElementById("form1")
    
    

    const addInputText = document.createElement("input")//create my input
    addInputText.setAttribute("type", "text")
    addInputText.setAttribute("id", "note")
    addInputText.setAttribute("placeholder", "Add a note here!")
    addInputText.setAttribute("name", "note")
    form1.appendChild(addInputText)

    const addInputButton = document.createElement("input")
    addInputButton.setAttribute("type", "submit")
    addInputButton.setAttribute("value", "Submit")
    form1.appendChild(addInputButton)


    /*const addLabel = document.createElement("label"); 
    const testTextNode = document.createTextNode("Testing")
    addLabel.setAttribute("for", "note")
    addLabel.appendChild(testTextNode)
    div1.appendChild(addLabel)
    */ 
    //dont think i need a label right now unless it has to do with forms
   
    
    

})

const deleteNoteButton = document.getElementById("delete-note-button")
deleteNoteButton.addEventListener("click", function() {
    alert("clicked delete")//shes working
    document.querySelector("input").remove()//removes each new line one by one
})

const saveNoteButton = document.getElementById("save-note-button")//hoping it will save note to array or w/e I think of
saveNoteButton.addEventListener("click", function() {
    alert("clicked save")
})