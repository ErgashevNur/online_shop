export const toast = (status, massage) => {
  if (status == "success") {
    Toastify({
      text: massage,
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right,#00796b, #004d40)",
      },
    }).showToast();
  } else {
    Toastify({
      text: massage,
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #3f51b5 ,#1a237e)",
      },
    }).showToast();
  }
};
