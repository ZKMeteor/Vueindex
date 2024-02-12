<template>
  <div class="bot" >
    <p>©{{years}}&emsp;Meteor</p>
  </div>
</template>

<script>
export default {
    name:'bot',
    data(){
        return{
            year:''
        }
    },
    computed:{
      years(){
        let date =new Date();
        return date.getFullYear()
      }
    }

}
</script>

<style scoped>
.bot{
    width: 100%;
    height: 40px;
    line-height: 40px;
    opacity: 0.5;
    background-color: rgba(140, 247, 255, 0.884);
    text-align: center;
    letter-spacing: 2px;
    color: purple;
}

</style>