
$('#add').on('click', () =>{
    let addItem = document.getElementById('item').value
    $('ul').append('<li>'+addItem+'</li>')
    document.getElementById('item').value=''

})