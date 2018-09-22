<template>
  <div class="myOrder">
    <div class="myOrder1Div">
      <p>{{sssA.name}}</p>
      <p class="myOrder1Div1P">
        <i :style="sssA.img"></i>
        <span>{{sssA.content}}</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "myOrder",
      data(){
          return{

          }
      },
      props:{
        sssA : Object
      }
    }
</script>

<style scoped>
  .myOrder{
    height: 0.44rem;
    padding: 0 0.12rem;
    background: #ffffff;
  }
  .myOrder1Div{
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.14rem;
    color: #333333;
  }
  .myOrder1Div1P{
    display: flex;
    align-items: center;
  }
  .myOrder1Div1P i{
    display: block;
    width: 0.16rem;
    height: 0.16rem;
  }
  .myOrder1Div1P span{
    margin-left: 0.03rem;
  }
</style>
