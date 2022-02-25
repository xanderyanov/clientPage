// Fancybox.bind('[data-fancybox="gallery"]', {
// 	animated: false,
// 	showClass: false,
// 	hideClass: false,

// 	click: false,

// 	dragToClose: false,

// 	Image: {
// 		zoom: false,
// 	},

// 	Toolbar: {
// 		display: [{ id: "counter", position: "center" }, "close"],
// 	},
// });


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});