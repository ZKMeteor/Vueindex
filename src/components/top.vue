<template>
<div class="nav">
    <div class="nav-1">
        <a href="https://www.facebook.com/ZanKiMeteor/" target="_blank">
        <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png">
        </a>
        <a href="https://www.instagram.com/zanki_meteor/" target="_blank">&nbsp;
        <img src="https://seeklogo.com/images/I/instagram-logo-041EABACE1-seeklogo.com.png">    
        </a>
        <a href="https://codepen.io/ZKMeteor" target="_blank">&nbsp;
        <img  src="https://blog.codepen.io/wp-content/uploads/2014/03/codepen-logo.svg">
        </a>
        <a href="https://github.com/ZKMeteor" target="_blank">&nbsp;
        <img  src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU">
        </a>
    </div>

    <div class="nav-2 animate__animated animate__flash">
      <input id="btn_control" type="checkbox" style="display:none">
      <label for="btn_control" class="btn_control">
        <span>00</span>
      </label>
      <nav class="nav-2-1">
        <router-link class="mediaclick" active-class="active" to="/home">Home</router-link>
        <router-link class="mediaclick" active-class="active"  to="/about">About</router-link>
        <router-link class="mediaclick" active-class="active" to="/Project">Project</router-link>
        <router-link class="mediaclick" active-class="active"  to="/Contact">Contact</router-link>
      </nav>
    </div>
</div>
</template>

<script>
export default {
  name:'top',
  mounted(){
    document.addEventListener('click', function(event) {
      var btnControl = document.getElementById('btn_control');
      
      // 檢查是否點擊的是按鈕以外的其他地方
      if (event.target !== btnControl) {
          // 取消按鈕的 checked 狀態
          btnControl.checked = false;
      }
    });
  }
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
  opacity:1;
  display: flex;
}

.nav img{
   height: 30px; 
   width: 30px; ;
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
  flex: 1;
  display: flex;
  flex-direction: row;                /*由左至右*/
  justify-content: space-evenly;      /*間隔*/
  align-items: center;                /*水平*/
}

.nav-2 a{
    letter-spacing:0.15em;          /* 文字間距 */
    font-size: 20PX;
    margin: 0 5px;
    position: relative;
    transform: translateY(0);
    transition: .5s;
    color: #3572a3;
}
.nav-2 a.active {
  color: purple;
}
.nav-2 a::after{
    content: '';
    position: absolute;
    left: 0%;
    right: 100%;
    bottom: -5px;
    border-bottom: 1px solid purple;
    -webkit-transition: .4s;
    transition: .4s;
}

.nav-2 a:hover{
    border-radius: 5px;
    color: purple;
    transform: translateY(-3px);
}

.nav-2 a:hover::after{
    left: 0;
    right: 0;
}


.active{
  color: purple;
  font-weight: 900;
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
    margin-left: 20px;
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
    opacity: 0;
    background-color: rgba(140, 247, 255, 0.884);
  }

  .btn_control::before{
    content: '';
    position: absolute;
    height: 2px;
    left: 2px;
    width: 30px;
    background-color: purple;
    z-index: 999;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0px 8px 0px purple,
                0px -8px 0px purple;

  }


.nav-2-1{
  background-color: rgba(255, 255, 255);
  position:absolute;
  right: -100%;
  top: 0;
  width: 100%;
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;      
  align-items: center;                
  transition: .5s;
}

.nav-2-1 a{
  font-weight: 900;
  line-height: 50px;
}

#btn_control:checked ~ nav{
  transition: .5s;
  right: 0px;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 998;
}

}

</style>