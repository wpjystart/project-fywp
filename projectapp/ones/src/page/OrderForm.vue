<template>
    <div class="OrderForm">
      <OrderFormHeader></OrderFormHeader>
    </div>
</template>

<script>
  import OrderFormHeader from '../components/OrderForm/OrderFormHeader'
    export default {
        name: "OrderForm",
      components:{
        OrderFormHeader,
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
</style>
