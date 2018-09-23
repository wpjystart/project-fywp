<template>
    <div class="OrderForm">
      <div class="OrderFormDiv">
        <OrderFormHeader></OrderFormHeader>
        <OrderFormSite></OrderFormSite>
        <OrderFormShop></OrderFormShop>
        <OrderFormLeaveWord></OrderFormLeaveWord>
        <OrderFormInvoice></OrderFormInvoice>
      </div>
    </div>
</template>

<script>
  import OrderFormHeader from '../components/OrderForm/OrderFormHeader'
  import OrderFormSite from '../components/OrderForm/OrderFormSite'
  import OrderFormShop from '../components/OrderForm/OrderFormShop'
  import OrderFormLeaveWord from '../components/OrderForm/OrderFormLeaveWord'
  import OrderFormInvoice from '../components/OrderForm/OrderFormInvoice'
    export default {
        name: "OrderForm",
      components:{
        OrderFormHeader,
        OrderFormSite,
        OrderFormShop,
        OrderFormLeaveWord,
        OrderFormInvoice,
      }
    }
</script>

<style scoped>
  .OrderForm{
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f1f1f1;
  }
  .OrderFormDiv{
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
