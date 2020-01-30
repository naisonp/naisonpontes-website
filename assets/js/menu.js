// document.querySelector('body')

// $(document).mouseup(function (e) {
//   var container = $("aside");
//   if (!container.is(e.target) && container.has(e.target).length === 0) {
//     $("aside").removeClass("close")
//   }
// });

document.querySelector("#toggleSidebar").addEventListener("click", function () {
  debugger;
  document.querySelector(".sidebar-wrapper").classList.toggle('close');
});