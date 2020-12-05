
// Get the input field
var input = document.getElementById("item");
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("add").click();
    }
  });


$('#add').on('click', () =>{
    let addItem = document.getElementById('item').value
    $('ul').append('<li>'+addItem+'</li>')
    document.getElementById('item').value=''

    $('li').css(['padding', '0px'],['margin-bottom', '35px'])
})



console.log('yo')