<template>
<div class="container-fluid animate__animated animate__fadeIn project" id="Project">
    <div class="container">
        <h1 class="animate__animated animate__bounceInDown py-3 Project-title">Project</h1>
        <div class="row justify-content-center align-items-center">
            <div class="col-lg-4 col-md-5 col-10 p-3" data-aos="fade-down" data-aos-duration="1000">
                <div class="box animate__animated animate__fadeIn">
                    <h2>EC&nbsp;Web</h2>
                    <a href="https://zkmeteor.github.io/sm_web/#/">
                <img src="../assets/ecweb.png" class="img-fluid "/>
                </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-10 p-3" data-aos="fade-down" data-aos-duration="1000">
                <div class="animate__animated animate__fadeIn">
                    <h2>Anime Web</h2>
                    <a  href="https://zkmeteor.github.io/ec_web/#/">
                <img src="../assets/web.jpg" class="img-fluid "/>
                </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-10 p-3" data-aos="fade-down" data-aos-duration="1000">
                <div class="box animate__animated animate__fadeIn">
                    <h2>Layout Practice</h2>
                    <a  href="https://zkmeteor.github.io/sideproject/layout2.html">
                <img src="../assets/layout2.jpg" class="img-fluid "/>
                </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-10 p-3" data-aos="fade-down" data-aos-duration="1000">
                <div class="box animate__animated animate__fadeIn">
                    <h2>Search Practice</h2>
                    <a  href="https://zkmeteor.github.io/Search_github_user/">
                <img src="../assets/search.png" class="img-fluid "/>
                </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-10 p-3" data-aos="fade-down" data-aos-duration="1000">
                <div class="box animate__animated animate__fadeIn">
                    <h2>Test Practice</h2>
                    <a href="https://zkmeteor.github.io/sideproject/test.html">
                <img src="../assets/test.jpg" class="img-fluid"/>
                </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-10 p-3" data-aos="fade-down" data-aos-duration="1000">
                <div class="box animate__animated animate__fadeIn">
                    <h2>List Practice</h2>
                    <a href="https://zkmeteor.github.io/VueCli_1/">
                <img src="../assets/vuecli.png" class="img-fluid"/>
                </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-10 p-3" data-aos="fade-down" data-aos-duration="1000">
                <div class="box animate__animated animate__fadeIn">
                    <h2>Excel Practice</h2>
                    <a href="https://zkmeteor.github.io/sideproject/soldierlist.html">
                <img src="../assets/soldierlist.jpg" class="img-fluid"/>
                </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-10 p-3" data-aos="fade-down" data-aos-duration="1000">
                <div class="box animate__animated animate__fadeIn">
                    <h2>Layout Practice</h2>
                    <a href="https://zkmeteor.github.io/sideproject/layout1.html">
                    <img src="../assets/anime.jpg" class="img-fluid"/>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-10 p-3" data-aos="fade-down" data-aos-duration="1000">
                <div class="box animate__animated animate__fadeIn">
                    <h2>Diary Js Practice</h2>
                    <a href="https://zkmeteor.github.io/sideproject/diary.html">
                    <img src="../assets/diary.jpg" class="img-fluid "/> 
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>


export default {
    name:'project',
    mounted(){
        AOS.init();
    }

}
</script>

<style scoped>

.project{
    background-color:#FFF8D7;
    padding-top: 100px;
}
.Project-title {
    text-align: center;
    color: purple;
}
h2 {
    text-align: center;
    color: rgb(53, 114, 163);
}
</style>