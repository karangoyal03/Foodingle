$(function () {
  let name = $("#name");
  let email = $("#email");
  let contactnumber = $("#contactnumber");
  let date = $("#date");
  let time = $("#time");
  let noofpersons = $("#persons");
  let instructions = $("#instructions");

  $("#submit").click(() => {
    console.log(name.val());
    console.log(email.val());
    console.log(contactnumber.val());
    console.log(date.val());
    console.log(time.val());
    console.log(noofpersons.val());
    console.log(instructions.val());

    addreservation(
      name.val(),
      email.val(),
      contactnumber.val(),
      date.val(),
      time.val(),
      noofpersons.val(),
      instructions.val(),
      function (addedreservation) {
        window.alert(
          "Added a new reservation of" +
            addedreservation.name +
            " successfully to our database"
        );
      }
    );
  });
});
