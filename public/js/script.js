const cardList = [
    {
        title: "Bird 2",
        image: "images/two.jpg",
        link: "About bird 2",
        description: "Demo description of bird 2"
    },
    {
        title: "Bird 3",
        image: "images/three.jpg",
        link: "About bird 3",
        description: "Demo description of bird 3"
    }
];

const clickMe = () => {
    alert("thanks for clicking me");
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("form data submitted: ", formData);
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    
    // For modal open and alert
    $('#clickMeButton').click(clickMe);
    
    // For form submission inside the modal
    $('#formSubmit').click(function(event) {
        event.preventDefault();  // Prevent default form submission
        submitForm();           // Execute our custom form submission
        $('#modal1').modal('close');  // Close the modal after submitting the form
    });

    addCards(cardList);
    $('.modal').modal();
});
