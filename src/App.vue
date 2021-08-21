<template>
  <div id="app">
    <Header/>
    <a id="top"></a>
    <Jumbotron/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Jumbotron from './components/Jumbotron.vue'
import Main from './components/Main.vue'

// Importamos JQuery
const $ = require('jquery')
// Lo declaramos globalmente
window.$ = $


export default {
  name: 'App',
  components: {
    Header,
    Jumbotron,
    Main,
    Footer
  },
  mounted(){
    // $('.nav-link').on('click', function() {
    //   $(this).smoothScroll({
    //     scrollElement: $('a'),
    //     scrollTarget: '#link1'
    //   });
    //   return false;
    // });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family:serif;
}
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
</style>
