<template>
<div class="title1 animate__animated animate__fadeIn" id="home">
  <div id="carouselExampleFade" class="mainpicture carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button> 
      </div>
      <div class="carousel-inner ">
        <div class="carousel-item active" >
          <img src="../assets/main.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
              <h5>The University</h5>
              <p>Graduation Photo</p>
          </div>
        </div>
        <div class="carousel-item" >
          <img src="../assets/main2.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
              <h5>The University</h5>
              <p>Classmate</p>
          </div>
        </div>
        <div class="carousel-item" >
          <img src="../assets/main3.jpg" class="d-block w-100 " alt="...">
          <div class="carousel-caption d-none d-md-block">
              <h5>Zhongkeng&nbsp112T&nbsp1B3C</h5>
              <p>same ladder</p>
          </div>
        </div> 
        <div class="carousel-item" >
          <img src="../assets/main4.jpg" class="d-block w-100 " alt="...">
          <div class="carousel-caption d-none d-md-block">
              <h5>Senior high school</h5>
              <p>Teacher&nbsp&&nbspclassmate</p>
          </div>
        </div>
        <div class="carousel-item" >
          <img src="../assets/main5.jpg" class="d-block w-100 " alt="...">
          <div class="carousel-caption d-none d-md-block">
              <h5>Junior high school</h5>
              <p>Teacher&nbsp&&nbspclassmate</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  </div>
</div>
</template>

<script>



export default {
  name: 'home',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title1 h5{
    color: orange;
    letter-spacing: 0.3em;
    font-size: 20px;
    font-weight: 900;
}
.mainpicture img{
    height: 100vh;
    width: 100%;
    object-fit:cover;
    object-position:50% 50%;
}
</style>
