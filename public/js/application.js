$(document).ready(function () {
  $('form').on('submit', function(event) {
    event.preventDefault();

    var randomNum = (randomNumber())

    $.ajax({
      url: this.action,
      type: this.method,
      data: $(this).serialize()
    }).done (function(server_data) {
      console.log(server_data)
      $('#die_holder').html(server_data);
    });

  });

});

function randomNumber() {
 return Math.floor(Math.random()*6 + 1);
}
