
let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';

let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';


$('#add').click(function() {

    let inputTask = $('#task');


    let task = inputTask.val();


    if (task == '') {

        return;
    }

    let li = $('<li>');


    li.text(task);


    let buttons = $('<div>');
    buttons.addClass('buttons');


    let remove = $('<button>');
    remove.addClass('remove');
    remove.html(removeIcon);


    remove.click(removeTask);


    let done = $('<button>');
    done.addClass('done');
    done.html(doneIcon);


    done.click(doneTask);


    buttons.append(remove);
    buttons.append(done);


    li.append(buttons);


   li.prependTo($('#not-yet')).hide().fadeIn('slow');


    inputTask.val('');
});


function removeTask() {
    let task = $(this).closest('li');
    task.fadeOut('slow', function() {
        task.remove();
    })
}


function doneTask() {

    let task = $(this).closest('li');


    let id = task.parent().attr('id');
    

    if (id == 'done') {
        return;
    }

    task.fadeOut('slow', function() {


        task.prependTo($('#done')).fadeIn('slow');
    });

}