<template>
<div class="title3 container-fluid" id="Project">
    <h1 class="animate__animated animate__bounceInDown">Project</h1>
    <hr>
    <div class="row  row-cols-lg-3 row-cols-md-2">
        <div class="title3-1" >
            <div class="box animate__animated animate__fadeIn">
                <h2 style="text-align:center; padding:3px 0px;">Search Practise</h2>
                <a  href="https://zkmeteor.github.io/Search_github_user/">
                <div class="hover1 ">
                <h2>axios practise</h2>
                <br>
                    <div class="hover1-2">
                        <p>使用axios抓資料</p>
                        <br>
                        <h3>Skill:</h3>
                        <p>Html,Css,Vuejs,bootstrap,animate,axios</p>
                    </div>
                </div>
            <img src="../assets/search.png" class="img-fluid "/>
            </a>
            </div>
        </div>
        <div class="title3-1" >
            <div class="box animate__animated animate__fadeIn">
                <h2 style="text-align:center; padding:2px 0px;">Test Practise</h2>
                <a href="https://zkmeteor.github.io/sideproject/test.html">
                <div class="hover1 ">
                <h2>test</h2>
                <br>
                    <div class="hover1-2">
                        <p>練習處理資料</p>
                        <br>
                        <h3>Skill:</h3>
                        <p>Html,Css,Vuejs,jquery,chart,bootstrap</p>
                    </div>
                </div>
            <img src="../assets/test.jpg" class="img-fluid"/>
            </a>
            </div>
        </div>
        <div class="title3-1" >
            <div class="box animate__animated animate__fadeIn">
                <h2 style="text-align:center; padding:2px 0px;">List Practise</h2>
                <a href="https://zkmeteor.github.io/VueCli_1/">
                <div class="hover1 ">
                <h2>List</h2>
                <br>
                    <div class="hover1-2">
                        <p>使用cli製作，綁定Webstorage，清單紀錄。</p>
                        <br>
                        <h3>Skill:</h3>
                        <p>Html,Css,Vuejs,Vuecli,Webstorage</p>
                    </div>
                </div>
            <img src="../assets/vuecli.png" class="img-fluid"/>
            </a>
            </div>
        </div>
        <div class="title3-1" >
            <div class="box animate__animated animate__fadeIn">
                <h2 style="text-align:center; padding:2px 0px;">Excel Practise</h2>
                <a href="https://zkmeteor.github.io/sideproject/soldierlist.html">
                <div class="hover1 ">
                <h2>SoldierList</h2>
                <br>
                    <div class="hover1-2">
                        <p>班長拜託我做的，方便他收集資料。</p>
                        <br>
                        <h3>Skill:</h3>
                        <p>Html,Css,Bootstrap,Vuejs</p>
                    </div>
                </div>
            <img src="../assets/soldierlist.jpg" class="img-fluid"/>
            </a>
            </div>
        </div>
        <div class="title3-1" >
            <div class="box animate__animated animate__fadeIn">
                <h2 style="text-align:center; padding:2px 0px;">Layout Practise</h2>
                <a href="https://zkmeteor.github.io/sideproject/layout1.html">
                <div class="hover1 ">
                <h2>Anime&nbspTop10</h2>
                <br>
                    <div class="hover1-2">
                        <p>個人推薦十大動漫。</p>
                        <br>
                        <h3>Skill:</h3>
                        <p>Html,Css,Bootstrap</p>
                    </div>
                </div>
            <img src="../assets/anime.jpg" class="img-fluid"/>
            </a>
            </div>
        </div>
        <div class="title3-1" >
            <div class="box animate__animated animate__fadeIn">
                <h2 style="text-align:center; padding:2px 0px;">Js Practise</h2>
                <a href="https://zkmeteor.github.io/sideproject/diary.html">
                <div class="hover1 ">
                <h2>Diary</h2>
                <br>
                    <div class="hover1-2">
                        <p>一個簡單,快速寫日記的網站。</p>
                        <br>
                        <h3>Skill:</h3>
                        <p>Html,Css,Vue,Js,Bootstrap</p>
                    </div>
                </div>
                <img src="../assets/diary.jpg" class="img-fluid "/> 
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name:'project',

}
</script>

<style scoped>

.title3{
    background-color:#FFF8D7;
    padding-top: 80px;
    width: 100%;
    height: auto;
}
.title3 p{
    font-size: 20px;
    color: purple;
    line-height: 1.0em;
    letter-spacing:0.1em;
    text-align: left;
}

.title3 img{

}

.hover1{
    position: absolute;
    opacity: 0;
    text-align: center;

}

.title3-1{
    border-radius: 10px;
}

.title3 .box{
    position: relative;
}

.hover1:hover{
    width: 100%;
    height: 90%;
    transition: 0.4s;
    background-color: rgba(140, 247, 255, 0.884);
    opacity: 1;
    padding-left: 50px;
}


</style>