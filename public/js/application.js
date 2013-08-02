$(document).ready(function() {
  console.log("working!");
  $('#search_user').on('submit', function(e) {
    console.log("yes!");
    e.preventDefault();
    $.ajax({
      type: this.method,
      url: this.action,
      data: $(this).serialize()
    }).done(function(data) {
      console.log(data.user["name"]);
      $('#name').text(data.user["name"]);
      $('#FB_ID').text(data.user["id"]);
      $('#gender').text(data.user["gender"]);
      $('#username').text(data.user["username"]);
      $('#user_photos').text("");
      $('#user_photos').prepend("<img class='photo' src="+data.pic+">");
      $('#user_stats').fadeIn(1000);
    });

  });
});
