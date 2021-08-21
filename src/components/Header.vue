<template>
    <div class="header position-fixed w-100" style="z-index:99">
        <nav class="navbar navbar-expand-sm navbar-dark" style="background-color:black">
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId" style="justify-content: center;">
                <ul class="menu navbar-nav mr-auto mt-2 mt-lg-0" style="display: contents; justify-content: center;">
                    <li class="nav-item">
                        <a class="nav-link" href="#AboutMe">
                          <span>About me</span>
                          <span style="color: #3F51B5;">
                              <i class="fa fa-address-card" aria-hidden="true"></i>
                          </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Tools">
                          <span>Tools and technologies</span>
                          <span style="color: #3F51B5;">
                              <i class="fa fa-tools" aria-hidden="true"></i>      
                          </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Projects">
                          <span>Projects</span>
                          <span style="color: #3F51B5;">
                              <i class="fas fa-code"></i>  
                          </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="open">
                          <span>Contact</span>
                          <span style="color: #3F51B5;">
                              <i class="fas fa-comments"></i>   
                          </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <sweet-modal ref="modal" title="CONTACT ME" overlay-theme="dark">
            <div class="box-part p-0">
                <img src="https://www.turgranada.es/wp-content/blogs.dir/2/files_mf/cache/th_8e735c5fb9f20d17096a998987c257d7_peligros2.jpg?x53512" alt="" width="100%" style="filter:grayscale(70%)">
            </div>
            <div class="box-part p-1">
                <ul class="menu justify-content-around mt-2 px-0">
                    <li class="nav-item">
                        <a v-if="this.width>=1200" class="nav-link m-2" style="color: black;" title="Send whatsapp message" href="http://web.whatsapp.com/send?text=Hola Jesús,&phone=+34603236960&abid=+34657457050">
                          <span><i class="fab fa-whatsapp" aria-hidden="true" style="font-size:1rem"></i> Send Whatsapp</span>
                          <span style="color: #00bb2d;">
                              <i class="fab fa-whatsapp" aria-hidden="true"></i>
                          </span>
                        </a>
                        <a v-else class="nav-link m-2" style="color: black;" title="Send whatsapp message" href="https://wa.me/+34603236960?text=Hola Jesús,">
                          <span><i class="fab fa-whatsapp" aria-hidden="true" style="font-size:1rem"></i> Send Whatsapp</span>
                            <span style="color: #00bb2d;">
                                <i class="fab fa-whatsapp" aria-hidden="true"></i>
                          </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link m-2" style="color: black;" @click="sendMail" title="Enviar correo electrónico">
                          <span><i class="far fa-envelope" aria-hidden="true" style="font-size:1rem"></i> Send Email</span>
                          <span style="color: #db4a39;">
                              <i class="far fa-envelope" aria-hidden="true"></i>
                          </span>
                        </a>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="box-part p-1">
              <ul class="menu d-flex justify-content-around  mt-2 px-0">
                <li>
                  <a class="nav-link m-2" style="color: black;" href="https://www.linkedin.com/in/jesús-gonzález-pérez-324a29205/" target="_blank" title="Linkedin">
                      <span> Linkedin</span>
                      <span style="color: #0e76a8;">
                          <i class="fab fa-linkedin-in"></i>
                      </span>
                    </a>
                </li>
                <li>
                  <a class="nav-link m-2" style="color: black;" href="https://github.com/JesusGonzalezPerez" target="_blank" title="GitHub">
                      <span> GitHub</span>
                      <span style="color:#171515;">
                          <i class="fab fa-github"></i>
                      </span>
                  </a>
                </li>
              </ul>
            </div>
      </sweet-modal>
    </div>
</template>

<script>
import { SweetModal} from 'sweet-modal-vue';

// Importamos JQuery
const $ = require('jquery')
// Lo declaramos globalmente
window.$ = $

export default {
  name: 'Header',
  components:{
    SweetModal
  },
  data () {
    return {
      width:0
    }
  },
  mounted(){
    this.width = window.screen.width;
    console.log(this.width);
  },
  methods:{
    open: function () {
      this.$refs.modal.open();
      const titleStyles = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
        color:"white"
      }
      $(".sweet-title").css(titleStyles);
      $(".sweet-content").css("padding","0");
      $(".sweet-box-actions").css("z-index","3");
      $(".sweet-content-content .box-part:first-child").css("padding","2rem");
      $(".sweet-action-close:hover").hover("background","rgb(174, 0, 255)");
    },

    sendMail:function(){
      window.open('mailto:jesusgpeligros@gmail.com');
    },

    lightMode: function(){
      
    },

    darkMode:function(){

    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
.menu {
  display: flex;
  justify-content: center;
}

.menu a {
  position: relative;
  display: block;
  overflow: hidden;
}

.menu a span {
  transition: transform 0.2s ease-out;
}

.menu a span:first-child {
  display: inline-block;
  padding: 10px;
}

.menu a span:last-child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
}

.menu i {
  font-size: 30px;
}

.menu a:hover span:first-child {
  transform: translateY(100%);
}

.menu a:hover span:last-child,
.menu[data-animation] a:hover span:last-child {
  transform: none;
}


</style>
