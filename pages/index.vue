<template>

  <div>
         <!-- CONTENIDO -->
         <div class="container">

            <div class="content1">
                 <logo-left class="logo"></logo-left>
                 <div class="cont1A">
                   <div class="cont1A-1"></div>
                   <div class="cont1A-2">
                     <text-foot></text-foot>
                   </div>
                 </div>
              </div>

               <div class="content2" style="overflow: auto; width: 800px; height: 800px">
                   <p class="titulaNav">Movimiento Popular La Dignidad</p>
                   <contenido-portada></contenido-portada>
              </div>

              <div class="=content3">
              <!--Imagen-->
              <div class="content3A">
                 <div class="content3A-1">
                   <article-uno class="articles"></article-uno>
              </div>
                 <div class="content3A-2">
                    <a href=""><p class="texts">Las Organizaciones populares estamos construyendo territorio! </p></a>
              </div>
              <!--Imagen-->
                 <div class="content3A-3">
                    <article-dos class="articles"></article-dos>
              </div>
                 <div class="content3A-4">
                    <a href=""><p class="texts">Las Organizaciones populares estamos construyendo territorio! </p></a>
              </div>
              <!--Imagen-->
                 <div class="content3A-5">
                    <article-tres class="articles"></article-tres>
              </div>
                 <div class="content3A-6">
                     <a href=""><p class="texts">Las Organizaciones populares estamos construyendo territorio! </p></a>
                </div>
              <!--Imagen-->
                  <div class="content3A-7">
                     <article-cuatro class="articles"></article-cuatro>
               </div>
                  <div class="content3A-8">
                     <a href=""><p class="texts">Las Organizaciones populares estamos construyendo territorio!</p></a>
               </div>
           </div>
           </div>
         </div>
     </div>
  

</template>


<!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8627466046363756"
     crossorigin="anonymous"></script> -->


<script>
export default {
  name: 'IndexPage',
}
</script>



<style>

.content3A-2 {
  border: 5px solid violet;
  border-radius: 20px;
}.content3A-4 {
  border: 5px solid yellow;
  border-radius: 20px;
}.content3A-6 {
  border: 5px solid green;
  border-radius: 20px;
}
.content3A-8 {
  border: 5px solid orange;
  border-radius: 20px;
}

.content1  {
  border: 5px solid #5f7044;
  border-radius: 20px;
}

.titulaNav {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

/* .content3 {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
} */

.titulaNav {
  text-align: center;
  font-size: x-large;
  background: green;
  opacity: 90%;
}

/* .content2A {
  position: full -webkit-sticky;
  position: sticky;
  top: 0;
} */

.articles {
  width: 150px;
  height: 100px;
  /* padding:10px;
  margin:10px; */
}

.texts {
  text-align: start;
  /* padding:10px;*/
  margin:5px; 
  /* font-size: small; */
  color: blue;
  text-decoration: underline;  
}
/* .container > texts:hover {
  border: 2px solid black;
  text-decoration: underline; 
} */

/* .content2A {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
} */



.portada {
  margin:10px;
  padding:10px;
}

.logo {
  
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
   
/*Columnas*/
.container {
  
  display:grid;
  grid-template-columns: 200px 800px auto;
  grid-template-rows: 100%;
  grid-gap: 20px;
  grid-template-areas: "content1  content2  content3"
                       
}

.container .content1 {
  grid-area: content1;
  
}


.container .content2 {
  grid-area: content2;
}

.container .content3 {
  grid-area: content3;

}

/* .container > div:hover {
  border: 2px solid black;
} */

/* 2A*/
/* .content2A {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas: "content2-1"
}

.content2A .content2A-1 {
  grid-area: content2-1;
} */



/*3A*/
.content3A {
   margin: 5px;
   padding:50px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 65%;
  /* grid-template-rows: 1fr; */
  grid-template-areas: "content3A-1   content3A-2"
                       "content3A-3   content3A-4"
                       "content3A-5   content3A-6"
                       "content3A-7   content3A-8"
}
.content3A .content3A-1 {
  
  grid-area: content3A-1;
}
.content3A .content3A-2 {
  grid-area: content3A-2;
}
.content3A .content3A-3 {
  grid-area: content3A-3;
}
.content3A .content3A-4 {
  grid-area: content3A-4;
}
.content3A .content3A-5 {
  grid-area: content3A-5;
}
.content3A .content3A-6 {
  grid-area: content3A-6;
}
.content3A .content3A-7 {
  grid-area: content3A-7;
}
.content3A .content3A-8 {
  grid-area: content3A-8;
}
/* .content3A:hover {
  border: 2px solid black; 
  } */


/*FONDO*/
   .content1 {
      background-color: #e5e5f7;
      opacity: 0.8;
      background-image:  radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
      background-size: 20px 20px;
      background-position: 0 0,10px 10px;
 }

 @media screen and (max-width: 600px ) {

   .container {
  
  display:grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  /* grid-gap: 20px; */
  grid-template-areas: "content2  content2"
                       "content3  content3"
                       "content1  content1"
}
.container .content2 {
  grid-area: content2;
}
.container .content3 {
  grid-area: content3;
}
.container .content1 {
  grid-area: content1;
}



 }
</style>
