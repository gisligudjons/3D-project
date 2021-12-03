
// document.addEventListener("DOMContentLoaded",function(){

//     var modal = document.getElementById('modal');

//     document.getElementById('linkModal').addEventListener('click',function(){
//         modal.classList.remove('offmodal');
//         modal.classList.add('onmodal');

//     },false)

//     document.querySelector('.close').addEventListener('click',function(){
//         modal.classList.remove('onmodal');
//         modal.classList.add('offmodal');
//     },false)


// });

Swal.fire({
    title: '<strong>HTML <u>example</u></strong>',
    icon: 'info',
    html:
      'You can use <b>bold text</b>, ' +
      '<a href="//sweetalert2.github.io">links</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })