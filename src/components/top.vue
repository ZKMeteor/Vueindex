<template>
<div class="nav">
    <div class="nav-1">
        <a href="https://www.facebook.com/ZanKiMeteor/">
        <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png">
        </a>
        <a href="https://www.instagram.com/zanki_meteor/">&nbsp
        <img src="https://seeklogo.com/images/I/instagram-logo-041EABACE1-seeklogo.com.png">    
        </a>
        <a href="https://www.youtube.com/channel/UCkms1DyC_AyuGha4O1WWPWg">&nbsp
        <img  src="https://static.wixstatic.com/media/a1b09fe8b7f04378a9fe076748ad4a6a.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a1b09fe8b7f04378a9fe076748ad4a6a.png">
        </a>
        <a href="https://github.com/ZKMeteor">&nbsp
        <img  src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU">
        </a>
    </div>

    <div class="nav-2 animate__animated animate__flash">
      <input id="btn_control" type="checkbox" style="display:none">
      <label for="btn_control" class="btn_control">
        <span>00</span>
      </label>
      <nav class="nav-2-1">
        <router-link class="" active-class="active" to="/home">Home</router-link>
        <router-link class="" active-class="active"  to="/about">About</router-link>
        <router-link class="" active-class="active" to="/Project">Project</router-link>
        <router-link class="" active-class="active"  to="/Contact">Contact</router-link>
      </nav>
    </div>
</div>
</template>

<script>
export default {
  name:'top',

}
</script>

<style scoped>
.nav{
z-index: 9999;
position: fixed;
top: 0%;left: 0%; 
width:100%; 
height: 60px;
background-color:white;
opacity:0.9;
display: flex;
}

.nav img{
   height: 30px; width: 30px; ;
}

.nav-1{
flex: 1;
height:100%;
object-fit:cover;
object-position:50% 50%;
display: flex;
align-items: center;
justify-content:center;
}

.btn_control span{
    opacity: 0;
  }

.nav-2{
  flex: 1;
  display: flex;
}

.nav-2-1{
  font-weight: 900;
  flex: 1;
  display: flex;
  flex-direction: row;                /*由左至右*/
  justify-content: space-evenly;      /*間隔*/
  align-items: center;                /*水平*/
}

.nav-2 a{
    letter-spacing:0.15em;          /* 文字間距 */
    font-size: 20PX;

}

.nav-2 a:hover{
    border-radius: 5px;
    background:rgba(140, 247, 255, 0.884);
    color: purple;
}

.active{
  color: purple;
}

@media screen and (max-width: 767px){

  .nav-1{
  flex: 1;
  height:100%;
  object-fit:cover;
  object-position:50% 50%;
  display: flex;
  align-items: center;
  justify-content:left;
  margin-left: 5px;
}
  .btn_control{
    display: block;
    font-size: 30px;
    color: rgba(140, 247, 255, 0.884);
    border-radius:10px ;
    position: absolute;
    top: 5px;
    right: 10px;
  }

  .btn_control span{
    opacity: 5;
    background-color: rgba(140, 247, 255, 0.884);
  }

  .btn_control::before{
    content: '';
    position: absolute;
    height: 2px;
    left: 2px;
    width: 30px;
    background-color: purple;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0px 8px 0px purple,
                0px -8px 0px purple;

  }


  .nav-2-1{
  background-color: rgba(140, 247, 255, 0.884);
  position:absolute;
  top: 45px;
  right:-100%;
  width: 30%;
  flex: 1;
  display: flex;
  flex-direction: column;                /*由左至右*/
  align-items: center;                /*水平*/
}

.nav-2-1 a{
  font-weight: 900;
  color: purple;
  border-bottom: 1px solid purple;
}

#btn_control:checked ~ nav{
  right: 10px;
}


}

</style>