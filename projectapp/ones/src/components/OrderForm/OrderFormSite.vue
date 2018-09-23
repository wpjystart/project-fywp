<template>
    <div class="OrderFormSite">
      <div class="OrderFormSiteDiv">
        <i></i>
        <p>{{site}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "OrderFormSite",
      data(){
          return{
            site:'填写收货地址',
          }
      }
    }
</script>

<style scoped>
  .OrderFormSite{
    height: 0.96rem;
    box-sizing: border-box;
    padding: 0.06rem 0.1rem;
  }
  .OrderFormSiteDiv{
    width: 100%;
    height: 100%;
    border-radius:0.06rem;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .OrderFormSiteDiv i{
    display: block;
    background-image: url("../../../static/OrderForm02.png");
    background-position: -261px -235.5px;
    background-size: 379.5px;
    width: 0.2rem;
    height: 0.2rem;
  }
  .OrderFormSiteDiv p{
    font-size: 0.12rem;
    color: #666666;
    margin-top: 0.06rem;
  }
</style>
