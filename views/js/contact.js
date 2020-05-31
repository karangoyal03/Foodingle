$(function () {
  let name = $("#name");
  let phone = $("#phone");
  let email = $("#email");
  let message = $("#message");

  $("#submit").click(() => {
    console.log(name.val());
    console.log(phone.val());
    console.log(email.val());
    console.log(message.val());

    addcontact(name.val(), phone.val(), email.val(), message.val(), function (
      addedcontact
    ) {
      window.alert(
        "Added contact details" +
          addedcontact.name +
          " to database successfully "
      );
    });
  });
});
