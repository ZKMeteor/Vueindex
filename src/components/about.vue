<template>
<div class="title2 container-fluid animate__animated animate__fadeIn" id="about">
    <h1 class="animate__animated animate__bounceInDown">About&nbspMe</h1>    
    <hr>
    <div class="container">
    <div class="box row">
        <div class="title2-3 col-lg-6 animate__animated animate__slideInLeft "   >
            <h2>Name:</h2>
            <P>劉景興</p>
            <br>
            <h2>Age:</h2>
            <P>23y</p>
            <br>
            <h2>Location:</h2>
            <P>Tainan,Taiwan</p>
            <div class="title2-2">
                <p>&nbsp&nbsp你好，我叫Meteor。<br></p>
                <P>我是個熱愛思考設計網站的自學練習生，平時喜歡看看別人寫的網站去學習他們設計，在嘗試能不能加入自己練習的網站中，希望未來工作上能學習到更多技巧。</p>
            </div>
        </div>            
        <div class="title2-1 col-lg-4">
            <img class="animate__animated animate__slideInRight" src="../assets/me.jpg" />
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name:'about',

}
</script>

<style scoped>

.title2{
    background-color:#FFF8D7;;
    padding-top: 80px;
    width: 100%;
    height: auto;
}

.title2 .box{
    justify-content: center;
    align-items: center;
    margin-top: 5%;
}

.title2-1 img{
    max-width: 100%;
    border-radius: 5px;
    position: relative;
    right: 150px;
}

.title2-2{
    width: 80%;
}
.title2-3{
    padding-left:50px ;
    background-color: #FFE5B4;
    border-radius: 50px;
}

.title2 p{
    font-family: DFKai-sb;
    display: inline-block;
    color: black;
    font-size: 23px;
    line-height: 1.8em;
    letter-spacing: 0.2em;
    word-wrap:break-word;   /*以單字為單位換行*/
}

@media screen and (max-width: 767px){

.title2-1 img{
    max-width: 100%;
    border-radius: 45px;
    position: relative;
    right: 0px;
}

.title2-2{
    width: 100%;
}

.title2 p{
    font-family: DFKai-sb;
    display: inline-block;
    color: black;
    font-size: 20px;
    line-height: 1.8em;
    letter-spacing: 0.2em;
    word-wrap:break-word;   /*以單字為單位換行*/
}
}

</style>