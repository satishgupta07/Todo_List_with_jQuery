let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')

function addItem() {
  let listItem = $('<li>', {
    'class': 'list-group-item',
    text: inpNewTask.val()
  })
  listItem.click(() => {
    listItem.toggleClass('done')
  })
  ulTasks.append(listItem)
  inpNewTask.val('')
}
 
function clearDone() {
    $('#ulTasks .done').remove()
  }

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
  }

  function toggleInputButtons(valIsEmpty) {
    if(!valIsEmpty) {
        btnReset.prop('disabled', false)
        btnAdd.prop('disabled', false)
    }
    else {
        btnReset.prop('disabled', true)
        btnAdd.prop('disabled', true)
    }
  }

inpNewTask.keypress((e) => {
  if (e.which == 13) addItem()
})

inpNewTask.on('input', () => {
    toggleInputButtons(inpNewTask.val() == '')
    
})


btnAdd.click(addItem)
btnReset.click(() => {
    inpNewTask.val('')
    toggleInputButtons(true)
})
btnCleanup.click(clearDone)
btnSort.click(sortTasks)
