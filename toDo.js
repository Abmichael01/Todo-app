alert("TODO APP\n\nCOMMANDS:\nEnter TODO to view your todo list\nEnter ADD to add a new todo\nEnter DELETE to delete an existing todo \nEnter EXIT to stop running the app\nEnter CMD to view the commands again")
var myToDo = []
var commands = ["ADD", "EXIT", "TODO", "CMD", "DELETE"]
let invalidCmd = 0
function addToDo(){
    let newToDo = prompt("TODO APP\n\nADD TODO\nEnter a new Todo");
    let toDo = newToDo.trim().toUpperCase();
    if (myToDo.includes(toDo)){
        alert("TODO APP\n\n**Already in your todo list**".toUpperCase());
    }else{
        myToDo.push(toDo);
        alert("TODO APP\n\n**Todo Added**".toUpperCase());
    }
    

}
function deleteToDo(){
    let n = [];
    for(let i = 0; i< myToDo.length; i++){
        n.push(myToDo[i])
        n[i] = i+1 + ". " + n[i];
    }
    let list = n.join('\n')
    
    if (myToDo.length === 0){
        alert("TODO APP\n\nDELETE TODO\n"+"**Sorry, You don't have any todo to delete from**".toUpperCase())
    }else{
        let dele = Number(prompt("TODO APP\n\n\n" + "Here are your Todos:\n\n" + list + "\n\nEnter todo's corresponding number to delete"));
        while (isNaN(dele)){
            alert("TODO APP\n\nDELETE TODO\n*Enter the valid number corresponding to the todo you want to delete**".toUpperCase());
            dele = Number(prompt("TODO APP\n\nDELETE TODO\n" + "Here are your Todos:\n" + list + "\n\nEnter todo's corresponding number to delete"));
            
        }
        myToDo.splice(dele-1, 1);
        alert("TODO APP\n\n**Todo Deleted**".toUpperCase());
        
        
    }  
}
function exit(){
    appRunning = false;
}
function cmd(){
    alert("TODO APP\n\nCOMMANDS:\nEnter ADD to add a new todo\nEnter DELETE to delete an existing todo \nEnter EXIT to stop running to app\nEnter CMD to view the commands again");
}
function toDoList(){
    let n = [];
    for(let i = 0; i< myToDo.length; i++){
        n.push(myToDo[i]);
        n[i] = i+1 + ". " + n[i];
    }
    let msg =
    myToDo.length === 0
    ? "TODO APP\n\nYOUR TODO LIST:\n"+"**Sorry, You haven't added any todo**".toUpperCase()
    : "TODO APP\n\nYOUR TODO LIST:\n" + n.join('\n')
    alert(msg);
}

appRunning = true
while(appRunning){
    let userInput = prompt("TODO APP\n\nENTER COMMAND");
    let input = userInput.trim().toUpperCase();
    if (commands.includes(input)){ 
        invalidCmd = 0;   
        if (input === "ADD"){
            addToDo();
        }else if(input === "EXIT"){
            exit();
        }else if(input === "CMD"){
            cmd();
        }else if(input === "DELETE"){
            deleteToDo();
        }else if(input === "TODO"){
            toDoList();
        }
    }else{
        invalidCmd++
        if(invalidCmd === 3){
            invalidCmd = 0;
            alert("TODO APP\n\nEnter ADD to add a new todo\nEnter DELETE to delete an existing todo \nEnter EXIT to stop running to app\nEnter CMD to view the commands again")
            
        }else{           
            alert("You have entered an invalid command\nEnter CMD to view the commands again");
        }
        
    }
}