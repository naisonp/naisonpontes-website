// $(document).mouseup(function (e) {
//   var container = $("aside");
//   if (!container.is(e.target) && container.has(e.target).length === 0) {
//     $("aside").removeClass("close")
//   }
// });

document.querySelector("#toggleSidebar").addEventListener("click", function () {
  document.querySelector(".sidebar-wrapper").classList.toggle('close');
});


if (window.SimpleAnime) {
  new SimpleAnime();
}

if (window.EasyPieChart) {
  document.querySelectorAll('.chart').forEach(function (element) {
    new EasyPieChart(element, {
      barColor: '#ffcc80',
      scaleColor: false,
      lineWidth: 5
    });
  });
}