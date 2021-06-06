let task = prompt("Enter the task");

let todo = [];

while (task !== 'quit') {

    if (task === 'new') {
        let newList = prompt("Add A new todo");
        todo.push(newList);
        console.log("todo is added");
    }

    else if (task === 'list') {
        if (todo.length === 0)
            console.log("The list is empty");

        else {
            for (let i = 0; i < todo.length; i++) {
                console.log(`${i} : ${todo[i]}`);
            }
        }
    }

    else if (task === "delete") {
        if (todo.length === 0)
            console.log("The list is empty");

        else {
            let index = parseInt(prompt("enter the index you want to delete"));
            todo.splice(index, 1);
            console.log("todo is deleted");
        }

    }

    task = prompt("Enter the task");

}

console.log("You quit the app!");


