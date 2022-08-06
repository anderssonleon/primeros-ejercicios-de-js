dineroCofla = prompt("cuanto dinero cofla");
dineroRoberto = prompt("cuanto dinero roberto");
dineroPedro = prompt("cuanto dinero pedro");


dineroCofla = parseInt(dineroCofla);


if (dineroCofla >= 0.6 && dineroCofla < 1) {
      alert(" cofla, compra el helado de agua");
      alert(" y te sobran" + (dineroCofla - 0.6)) ;
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
      alert(" cofla, compra el helado de crema");
      alert(" y te sobran" + (dineroCofla - 1)); 
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
      alert(" cofla, compra el helado de heladix");
      alert(" y te sobran" + (dinerocofla - 1.6)); 
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
      alert(" cofla, compra el helado de heladovich");
      alert(" y te sobran" + (dinerocofla - 1.7)) ;
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
      alert(" cofla, compra el helado de helardo");
      alert(" y te sobran" + (dineroCofla - 1.8)); 
}
else if (dineroCofla >= 2.9) {
      alert(" cofla, compra el helado de helado confite o 1/4kg ");
      alert(" y te sobran" + (dineroCofla - 2.9)) ;
}
else{
      alert(" cofla, lo siento no te alcanza el dinero");
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
      alert(" roberto, compra el helado de agua");
}
else if (dineroPoberto >= 1 && dineroRoberto < 1.6) {
      alert(" roberto, compra el helado de crema")
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
      alert(" roberto, compra el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
      alert(" roberto, compra el helado de heladovich");
}
else if (dineroPoberto >= 1.8 && dineroRoberto < 2.9) {
      alert(" roberto, compra el helado de helardo");
}
else if (dineroRoberto >= 2.9) {
      alert(" roberto, compra el helado de helado confite o 1/4kg ");
}
else{
      alert(" roberto, lo siento no te alcanza el dinero");
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
      alert("pedro, compra el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
      alert("pedro, compra el helado de crema");
}
else if (dineroPedro >= 1.6 && dineropedro < 1.7) {
      alert("pedro, compra el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
      alert("pedro, compra el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dinerPedro < 2.9) {
      alert("pedro, compra el helado de helardo");
}
else if (dineroPedro >= 2.9) {
      alert("pedro, compra el helado de helado confite o 1/4kg ");
}
else{
      alert("lo siento no te alcanza el dinero");
}