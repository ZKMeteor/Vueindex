<template>
  <div class="bot" >
    <p>©{{year}} &nbsp ZanKiMeteor</p>
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
    background-color: rgba(140, 247, 255, 0.884);
    text-align: center;
    line-height: 50px;
    letter-spacing: 0.3em;
    color: purple;
}

</style>