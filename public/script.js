const cardList = [
    {
      title: "Bird 2",
      image: "images/two.jpg",
      link: "About Bird 2",
      description: "This bird-2 is very beautiful"
    },
    {
      title: "Bird 3",
      image: "images/three.jpg",
      link: "About bird 3",
      description: "This bird-3 is very beautiful"
    }
  ];

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {
    items.forEach(item => {
      let itemToAppend = `<div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${item.image}">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                <p><a href="#">${item.link}</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                <p>${item.description}</p>
            </div>
        </div>`;
      $("#card-section").append(itemToAppend);
    });
};

$(document).ready(function() {
    $('#formSubmit').click(() => {
      submitForm();
    });
    addCards(cardList);
    $('.modal').modal();
});
