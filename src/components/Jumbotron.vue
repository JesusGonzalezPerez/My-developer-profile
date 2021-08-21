<template>
    <div class="jumbotronDiv">
        <div class="jumbotron jumbotron-fluid d-flex align-items-center mb-0">
            <div class="container">
                <h1 class="display-3 font-effect-3d">JESÚS GONZÁLEZ PÉREZ</h1>
                <p class="lead">Web Developer</p>
                <hr class="my-2">
                <p class="lead">
                  <a class="btn btn-outline-light btn-lg" href="#AboutMe" role="button">Let's start</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  data () {
    return {

    }
  },
  methods:{
  
  }
}
</script>

<style scoped>
  .jumbotron{
    height: 100vh;
    /* background-image: url(https://fondosmil.com/fondo/34283.jpg); */
    background-image:  linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(https://c.wallhere.com/photos/9f/ec/space_stars_blue-1772401.jpg!d);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: azure;
  font-family: 'Anton', sans-serif;
  }
</style>
