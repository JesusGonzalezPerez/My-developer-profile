<template>
    <div class="main">
      <AboutMe/>
      <Projects/>
    </div>
</template>

<script>
import AboutMe from './AboutMe.vue'
import Projects from './Projects.vue'


export default {
  name: 'Main',
  components:{
      AboutMe,
      Projects,
  },
  data () {
    return {
    }
  },
  methods:{
  
  }
}
</script>

<style scoped>

</style>
