
$("#sendMessage").on("click", function () {

    name = $("#name").val();
    // console.log(name);
    surname = $("#surname").val();
    // console.log(surname);
    email = $("#email").val();
    // console.log(email);
    phone = $("#phone").val();
    // console.log(phone);
    message = $("#message").val();
    // console.log(message);

    $.ajax({
        url: "https://formspree.io/f/myybwrdk",
        method: "POST",
        dataType: "json",
        data: {
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            message: message
        }
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});
