<template>
  <div class="bot" >
    ©{{year}} &nbspZanKiMeteor
  </div>
</template>

<script>
export default {
    name:'bot',
    data(){
        return{
            year:2023
        }
    }

}
</script>

<style scoped>
.bot{
    width: 100%;
    height: 50px;
    opacity: 0.5;
    font-size: 20px;
    background-color: rgba(140, 247, 255, 0.884);
    text-align: center;
    line-height: 50px;
    letter-spacing: 0.3em;
    color: purple;
}
</style>