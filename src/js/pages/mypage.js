console.log('ss');


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})