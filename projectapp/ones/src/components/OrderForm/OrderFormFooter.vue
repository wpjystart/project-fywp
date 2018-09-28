<template>
    <div class="OrderFormFooter">
      <p>实付款 <span>￥{{price}}</span></p>
      <a href="#">提交订单</a>
    </div>
</template>

<script>
    export default {
        name: "OrderFormFooter",
      data(){
          return{
            price:'56,100',
          }
      }
    }
</script>

<style scoped>
  .OrderFormFooter{
    height: 0.64rem;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
  .OrderFormFooter p{
    font-size: 0.12rem;
    color: #333333;
  }
  .OrderFormFooter p span{
    font-size: 0.14rem;
    color: #d90000;
    font-weight: bold;
  }
  .OrderFormFooter a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.1rem;
    height: 0.4rem;
    background: #cda97b;
    border-radius: 0.03rem;
    font-size: 0.14rem;
    color: #ffffff;
  }
</style>
