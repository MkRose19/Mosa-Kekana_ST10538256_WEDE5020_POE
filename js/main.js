
document.addEventListener('DOMContentLoaded', function() {

var m = document.getElementById('map');
if(m){
  m.style.height='350px'; // fix access blocked if height 0
  var map = L.map('map').setView([-24.9,30.1],10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© OpenStreetMap'
  }).addTo(map);
  L.marker([-24.9,30.1]).addTo(map).bindPopup('Greater Tubatse').openPopup();
}


document.querySelectorAll('img').forEach(function(im){
  im.onclick=function(){ lbImg.src=this.src; lb.style.display='flex'; }
});
lb.onclick=function(){ lb.style.display='none'; }

document.querySelectorAll('h2,h3').forEach(function(h){
  var n = h.nextElementSibling;
  if(n && n.tagName=='DIV'){
    h.style.cursor='pointer';
    h.onclick=function(){ n.style.display=n.style.display=='none'?'block':'none'; }
  }
});

var list = document.getElementById('programs-list');
var progs = [{t:'Education'},{t:'Food Security'},{t:'Health'},{t:'Skills Development'}];
if(list){
  list.innerHTML=''; progs.forEach(function(p){ list.innerHTML+='<div><h3>'+p.t+'</h3></div>'; });
  var s = document.getElementById('searchInput');
  if(s){ s.oninput=function(){ var q=this.value.toLowerCase(); list.innerHTML=''; progs.filter(function(p){return p.t.toLowerCase().includes(q);}).forEach(function(p){list.innerHTML+='<div><h3>'+p.t+'</h3></div>';}); } }
}


var ef = document.getElementById('enquiryForm');
if(ef){
  ef.onsubmit=function(e){
    e.preventDefault();
    var name = document.getElementById('ename').value;
    if(name.length<3){ document.getElementById('err-ename').innerText='Min 3 chars'; return; }
    document.getElementById('enquiryResponse').innerText='Cost: FREE for volunteer, R500 for sponsor. Available now in Tubatse';
  }
}

var cf = document.getElementById('contactForm');
if(cf){
  cf.onsubmit=function(e){
    e.preventDefault();
    var n = document.getElementById('Name').value;
    var msg = document.getElementById('Message').value;
    var link = 'mailto:info@tebogotheronfoundation.org.za?subject='+n+'&body='+msg;
    document.getElementById('contactResponse').innerHTML='<a href="'+link+'">Send to info@tebogotheronfoundation.org.za</a>';
  }
}

});