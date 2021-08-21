<template>
    <div class="projects">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CACACA" fill-opacity="1" d="M0,128L40,144C80,160,160,192,240,218.7C320,245,400,267,480,261.3C560,256,640,224,720,218.7C800,213,880,235,960,213.3C1040,192,1120,128,1200,122.7C1280,117,1360,171,1400,197.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <div id="proyectos" class="py-5">
            <a id="link" name="Projects"></a>
            <a class="h1">PROJECTS</a>
            <div class="d-flex justify-content-around flex-wrap mt-5">
                <div class="card bg-dark my-3 mx-5" v-for="(project,index) in projects" v-bind:key="project+index" style="width:20rem; height:18rem">
                    <img class="card-img-top" :src="project.img" alt="" height="60%" style="display:block; margin:auto"> 
                    <div class="card-body d-flex flex-column justify-content-around p-1">
                        <h4 class="card-title" style="color:white">{{project.name}}</h4>
                        <div class="buttons d-flex justify-content-around flex-wrap">
                            <a class="btn btn-outline-light m-1" :href="project.link2" target="_blank"><i class="fas fa-code"></i> Code</a>
                            <a class="btn btn-outline-light m-1" :href="project.link1" target="_blank"><i class="fas fa-laptop-code"></i> Web</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Se importa la base de datos
import { db } from "../../src/database";

export default {
  name: 'Projects',
  data () {
    return {
      projects:[]
    }
  },
  created(){
  },
  firestore:{
    projects: db.collection("projects")
  },
  methods:{
  
  }
}
</script>

<style scoped>
  .projects{
    background-color: rgb(224, 224, 224);
  }
  #proyectos{
    background-color: rgb(202, 202, 202);
  }
  #link{
    position: relative;
    top: -6rem;
  }
  .h1{ 
    color: black;
    font-family: 'Josefin Sans', sans-serif;
  }
  .h1:hover{
    text-decoration: none;
    color:black;
  }
  .card:hover{
    /* transform: scale(1.05); */
    box-shadow: 0 15px 25px 0 rgba(0,0,0,0.5);
  }
</style>
