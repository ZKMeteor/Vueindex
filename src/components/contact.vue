<template>
<div class="title4 container-fluid animate__animated animate__fadeIn" id="Contact">  
    <div class="container">
        <h1 class="animate__animated animate__bounceInDown Contact-title py-3">Contact</h1>
        <div class="row  row-cols-md-2 row-cols-1 d-flex justify-content-center align-items-center">
            <div class="col p-3 d-flex flex-column justify-content-center align-items-center">
                <h2>Discord:</h2>
                <p>&emsp;Meteor#3795</p>
            </div>
            <div class="col p-3 d-flex flex-column justify-content-center align-items-center">
                <h2>E-mail:</h2>
                <p>&emsp;53065306A@gmail.com</p>
            </div>
            <div class="col p-3 d-flex flex-column justify-content-center align-items-center">
                <h2>Line:</h2>
                <p>&emsp;zanki_meteor</p>
            </div>
            <div class="col p-3 d-flex flex-column justify-content-center align-items-center">
                <h2>Cellphone:</h2>
                <p>&emsp;0912176038</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'contact',

}
</script>

<style scoped>
.title4{
    background-color:#FFF8D7;
    width: 100%;
    height: auto;
}
.Contact-title {
    text-align: center;
    color:purple;
}

#Contact {
    height: 100vh;
    background: #fff8d7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
h2 {
    color: #3572a3;
}
p {
    color: purple;
}
</style>