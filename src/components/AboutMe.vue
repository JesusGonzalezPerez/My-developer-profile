<template>
    <div class="aboutMe py-5">
      <a id="link" name="AboutMe"></a>
      <a class="h2 mb-5"></a>
          <div class="d-flex flex-column align-items-center flex-lg-row align-items-lg-center justify-content-lg-around"  v-for="(about,index) in aboutMe" v-bind:key="about+index">
              <img :src="about.img" alt="" class="col-8 col-md-5 col-lg-4">
              <div class="col-10 col-md-8 col-lg-6 d-flex flex-column justify-content-around">
                <caption class="h5 text-center mb-5" style="font-size:2rem; text-shadow: 0.1em 0.1em 0.05em rgb(180,180,180); font-weight:bold">{{about.description}}</caption>
                <div class="tools d-flex flex-column align-items-center">
                  <a id="link" name="Tools"></a>
                  <a class="h4">Tools and technologies</a>
                  <table class="w-100">
                    <tr class="d-flex justify-content-center align-items-center" v-for="(tool,index) in tools" v-bind:key="tool+index">
                      <td class="text-left" style="width:120px">{{tool.name}}</td>
                      <td class="progress d-flex align-items-center w-100 p-0" style="height:0.5rem;box-shadow: 0 1px 1px 0 rgba(0,0,0,0.5);">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow="tool.value" aria-valuemin="0" aria-valuemax="100" :style="`width: ${tool.value}%; height:0.5rem; background-color:#3F51B5; border-radius:1rem`"></div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
          </div>
    </div>
</template>

<script>
// Se importa la base de datos
import { db } from "../../src/database";


export default {
  name: 'AboutMe',
  data () {
    return {
      aboutMe:[],
      tools:[]
    }
  },
  mounted(){
  },
  firestore:{
    aboutMe: db.collection("aboutme"),
    tools: db.collection("tools")
    .orderBy("value", "desc")
  },
  methods:{
  
  }
}
</script>

<style scoped>
  .aboutMe{
    background-color: rgb(224, 224, 224);
  }
  caption{
    font-family: Copperplate, Copperplate Gothic Light, fantasy;
  }
  #link{
    position: relative;
    top: -6rem;
  }
  .h4{
    font-family: 'Josefin Sans', sans-serif;
  }
  a{
    color: black;
  }
  a:hover{
    text-decoration: none;
    color:black;
  }
</style>
