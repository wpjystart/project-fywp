<template>
    <div class="OrderFormHeader">
      <a class="OrderFormHeaderLeft" href="#"></a>
      <p>{{Header.content}}</p>
      <a class="OrderFormHeaderRight" href=""></a>
    </div>
</template>

<script>
    export default {
        name: "OrderFormHeader",
      data(){
          return{
            Header:{
              content:'填写订单',
            }
          }
      }
    }
</script>

<style scoped>
  .OrderFormHeader{
    height: 0.45rem;
    box-sizing:border-box;
    border-bottom: 1px solid #dddddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.16rem;
    color: #444444;
    background: #ffffff;
    margin-bottom: 0.06rem;
  }
  .OrderFormHeaderLeft{
    width: 0.44rem;
    height: 0.44rem;
    background-image: url('../../../static/OrderForm02.png');
    background-position: -98px -186.5px;
    background-size: 379.5px;
  }
  .OrderFormHeaderRight{
    background-image: url('../../../static/OrderForm01.png');
    background-position: -255px -247px;
    background-size: 443px;
    width: 0.44rem;
    height: 0.44rem;
  }
</style>
