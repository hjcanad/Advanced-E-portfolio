// template_5l0tmbr
// service_if43qnv
// QBleevghv3AtMChmb

 function contact(event) {
    event.preventDefault();

const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
    
loading.classList.add("modal__overlay--visible");

    emailjs
    .sendForm (
       'service_if43qnv', 
       'template_5l0tmbr',
       event.target, 
       'QBleevghv3AtMChmb'
    )
    .then (() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
     loading.classList.remove("modal__overlay--visible");
      alert(
    "The email service is temporarily unavailable. Please contact me directly on hjcanad@gmail.com."
    ); 
  })
}

function toggleModal() {
    
}