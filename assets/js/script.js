"use strict";document.querySelector("#toggleSidebar").addEventListener("click",(function(){document.querySelector(".sidebar-wrapper").classList.toggle("close")})),window.SimpleAnime&&new SimpleAnime,window.EasyPieChart&&document.querySelectorAll(".chart").forEach((function(e){new EasyPieChart(e,{barColor:"#ffcc80",scaleColor:!1,lineWidth:5})}));