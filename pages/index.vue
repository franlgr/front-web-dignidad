<template>

  <div>
         <!-- CONTENIDO -->
         <div class="container">

            <div class="content1">
                 <logo-left class="logo"></logo-left>
                  
              </div>

               <div class="content2" style="overflow: auto; width: 100%; height: 24.5%;">
                   <p class="titulaNav">Movimiento Popular La Dignidad</p>
                   <new-component></new-component>
                   <contenido-portada></contenido-portada>
              </div>

              <div class="content3">
              <div class="content3A">
                 <div class="content3A-1">
                     <article-uno class="articles"></article-uno>
                     <article-dos class="articles"></article-dos>
                     <article-tres class="articles"></article-tres>
                     <article-cuatro class="articles"></article-cuatro>
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

.articles {
  padding:5px;
  position: 100%;
}

/* .texts1 {
  border: 5px solid violet;
  border-radius: 20px;
  padding:10px;
}.texts2 {
  border: 5px solid yellow;
  border-radius: 20px;
  padding:10px;
}.texts3 {
  border: 5px solid green;
  border-radius: 20px;
  padding:10px;
}.texts4 {
  border: 5px solid orange;
  border-radius: 20px;
  padding:10px;
} */


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

/* .texts {
  text-align: start; */
  /* padding:10px;*/
  /* margin:5px;  */
  /* font-size: small; */
  /* color: blue;
  text-decoration: underline;  
} */
/* .container > texts:hover {
  border: 2px solid black;
  text-decoration: underline; 
} */

/* .content2A {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
} */

/* .content3{ 
   width: 100%; 
  height: 24.5%;
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
  grid-template-rows: 24,5%;
  grid-gap: 20px;
  grid-template-areas: "content1  content2  content3"
                       
}

.container .content1 {
  grid-area: content1;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  
}


.container .content2 {
  grid-area: content2;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
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
  /* grid-template-rows: 1fr; */
  /* margin: 5px; */
  /* width: 100%; 
  height: 24.5%; */
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  /* padding:50px; */
  display: grid;
  /* grid-gap: 20px; */
  grid-template-columns: 450px;
  /* grid-template-rows: auto; */
  grid-template-areas:  "content3A-1"
                      
}

.content3A .content3A-1 {
  grid-area: content3A-1;
}/* 
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
} */
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
      width: 100%; 
      height: 24.5%;
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
