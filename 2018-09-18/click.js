
function addTdAndTr(x, y) {
    $('table');
    for (var i = 0; i < x; i++) {
        $('table').append('<tr>');
    };
    for (var j = 0; j < y; j++) {
        $('tr').append('<td>');
    };
};
addTdAndTr(20, 20);
createRecordToStorage('newTable');
$('#table').on('click', function(event) {
    var target = event.target; 
    if (target.tagName == 'TD') {
        changeColor(target);
        return; 
    };
});
$('#btnClear').on('click', function() {
    createRecordToStorage('record');
    getRecordFromStorage('newTable');
});
$('#btnRestore').on('click', function () {
    
    getRecordFromStorage('record');
});
function changeColor(arguments) {
    
    if (arguments.style.backgroundColor !== 'rgb(51, 51, 51)') {
     
        arguments.style.backgroundColor = 'rgb(51, 51, 51)';
    }else{
        arguments.style.backgroundColor = 'lightyellow'; 
    };
};
function createRecordToStorage(arguments) {
    
    var htmlSource = $('#table')[0].innerHTML;
    localStorage.setItem(arguments, JSON.stringify(htmlSource));
};
function getRecordFromStorage(arguments) {
    var restore = JSON.parse(localStorage.getItem(arguments));
    table.innerHTML = restore;
};



    
