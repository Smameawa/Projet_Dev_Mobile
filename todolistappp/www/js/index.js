function ajouterTache() {
    const tache = document.getElementById('tache');
    const taskListEnCours = document.getElementById('taskListEnCours');

    const newTask = '<li>' + tache.value + '</li>';
    taskListEnCours.innerHTML += newTask;
    tache.value = '';
    tache.focus();
    $(taskListEnCours).listview('refresh');
}


function reinitialiser() {
    const taskListEnCours = document.getElementById('taskListEnCours');
    const taskListTerminees = document.getElementById('taskListTerminees');
    taskListEnCours.innerHTML = '';
    taskListTerminees.innerHTML = '';
    $(taskListEnCours).listview('refresh');
    $(taskListTerminees).listview('refresh');
}


$(document).on('pagecreate', function() {
    $('#taskListEnCours, #taskListTerminees').on('swipeleft', 'li', function() {
        $(this).hide('slow', function() {
            $(this).remove();
        });
    });
});
$(document).on('pagecreate', function() {
    $('#taskListEnCours').on('swiperight', 'li', function() {
        const taskItem = $(this).detach('slow');
        $('#taskListTerminees').append(taskItem);
        $(this).show('slow');
    });
});

$(document).on('pagecreate', function() {
    $('#taskListTerminees').on('swiperight', 'li', function() {
        const taskItem = $(this).detach('slow');
        $('#taskListEnCours').append(taskItem);
        $(this).show('slow');
    });
});




