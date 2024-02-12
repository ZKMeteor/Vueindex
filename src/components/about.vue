<template>
<div class="container-fluid animate__animated animate__fadeIn" id="about">
    <div class="container" style="padding-top:60px">
        <h1 class="animate__animated animate__bounceInDown about-title py-3">About&nbsp;Me</h1>    
        <div class="row d-flex justify-content-around align-items-center">
            <div class="col-lg-5 col-md-6 col-11 animate__animated animate__slideInLeft p-3">
                <div class="box-1">
                    <p class="py-2">你好，我叫Meteor。<br></p>
                    <p>&emsp;我是個熱愛思考設計網站的自學練習生，平時喜歡看看別人寫的網站去學習他們設計，在嘗試能不能加入自己練習的網站中，希望未來工作上能學習到更多技巧。</p>
                </div>
            </div>            
            <div class="col-lg-4 col-md-6 col-11 about-img p-3">
                <img class="animate__animated animate__fadeIn" src="../assets/me.jpg" />
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

.about-title {
    text-align: center;
    font-weight: 600;
    color: purple;
}

.about-img img {
    object-fit: cover;
    width: 100%;
}

#about {
    min-height: 100vh;
    background: #fff8d7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.box-1 p{
    line-height: 1.5;
    letter-spacing: 5px;
}

@media screen and (max-width:768px) {
}

</style>