let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let inpNewTask = $('#inpNewTask')

btnAdd.click(() => {
 
    console.log(inpNewTask.val())

    inpNewTask.val("")
})

