   let uno = document.getElementById("eq1");
   let dos = document.getElementById("eq2");
   let bt11 = document.getElementById("bt1-1");
   let bt12 = document.getElementById("bt1-2");
   let bt13 = document.getElementById("bt1-3");
   let bt21 = document.getElementById("bt2-1");
   let bt22 = document.getElementById("bt2-2");
   let bt23 = document.getElementById("bt2-3");
   let est1 = document.getElementById("est1");
   let est2 = document.getElementById("est2");
   let aux = uno.innerHTML;     
   
   class ptseq{
   
   constructor(p){
      this.puntos=p;
      this.buenas=false;
      est1.innerHTML = `<h2 class="font-weight-light">Malas</h2>`;
      est1.style.color = "#A30000";
      est2.innerHTML = `<h2 class="font-weight-light">Malas</h2>`;
      est2.style.color = "#A30000";
   }
  
   iniciar(p){
      return this.puntos=p;
   }
   restar(){
      return this.puntos--;
   }
   sumar(){
      return this.puntos++;
   }
}

// Equipo 1
const eq1 = new ptseq(0);
bt13.onclick = function(){ 
   uno.innerHTML = eq1.iniciar(0);
   est1.innerHTML = `<h2 class="font-weight-light">Malas</h2>`;
   est1.style.color = "#A30000";
   eq1.buenas=false;
}
bt11.onclick = function(){
   if (eq1.puntos <=16){
      uno.innerHTML = eq1.sumar();
      
      if (eq1.puntos ==16 && eq1.buenas==false){
      eq1.buenas = true;
      est1.innerHTML = `<h2 class="font-weight-light">Buenas</h2>`;
      est1.style.color = "#218838";
      eq1.puntos=0;
      }
   }
   
}
bt12.onclick = function(){
   if(eq1.puntos>=0){
      uno.innerHTML = eq1.restar();

      if(eq1.puntos==0 && eq1.buenas==true){
      eq1.buenas = false;
      est1.innerHTML = `<h2 class="font-weight-light">Malas</h2>`;
      est1.style.color = "#A30000";
      eq1.puntos=15;
      } 
   }  
}
// Equipo 2
const eq2 = new ptseq(0);
bt23.onclick = function(){ 
   dos.innerHTML = eq2.iniciar(0);
   est2.innerHTML = `<h2 class="font-weight-light">Malas</h2>`;
   est2.style.color = "#A30000";
   eq2.buenas=false;
}
bt21.onclick = function(){
   if (eq2.puntos <=16){
      dos.innerHTML = eq2.sumar();
      
      if (eq2.puntos ==16 && eq2.buenas==false){
      eq2.buenas = true;
      est2.innerHTML = `<h2 class="font-weight-light">Buenas</h2>`;
      est2.style.color = "#218838";
      eq2.puntos=0;
      }
   }
   
}
bt22.onclick = function(){
   if(eq2.puntos>=0){
      dos.innerHTML = eq2.restar();

      if(eq2.puntos==0 && eq2.buenas==true){
      eq2.buenas = false;
      est2.innerHTML = `<h2 class="font-weight-light">Malas</h2>`;
      est2.style.color = "#A30000";
      eq2.puntos=15;
      } 
   }  
}
// bt23.onclick = function(){ 
//    dos.innerHTML = eq2.iniciar(0);
// }
// bt21.onclick = function(){
//    dos.innerHTML = eq2.sumar();
// }
// bt22.onclick = function(){
//    dos.innerHTML = eq2.restar();
// }