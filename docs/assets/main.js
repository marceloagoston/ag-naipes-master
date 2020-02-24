   let uno = document.getElementById("eq1");
   let dos = document.getElementById("eq2");
   let bt11 = document.getElementById("bt1-1");
   let bt12 = document.getElementById("bt1-2");
   let bt13 = document.getElementById("bt1-3");
   let bt21 = document.getElementById("bt2-1");
   let bt22 = document.getElementById("bt2-2");
   let bt23 = document.getElementById("bt2-3");
   let aux = uno.innerHTML;     
   
   class ptseq{
   
   constructor(p){
      this.puntos=p;
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

const eq1 = new ptseq(0);
bt13.onclick = function(){ 
   uno.innerHTML = eq1.iniciar(0);
}
bt11.onclick = function(){
   uno.innerHTML = eq1.sumar();
}
bt12.onclick = function(){
   uno.innerHTML = eq1.restar();
}

const eq2 = new ptseq(0);
bt23.onclick = function(){ 
   dos.innerHTML = eq2.iniciar(0);
}
bt21.onclick = function(){
   dos.innerHTML = eq2.sumar();
}
bt22.onclick = function(){
   dos.innerHTML = eq2.restar();
}