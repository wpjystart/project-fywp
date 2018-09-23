<template>
    <div class="OrderFormInvoice">
      <div class="OrderFormInvoiceDiv">
        <div class="OrderFormInvoiceDivTop" v-for="sssA in OrderFormInvoice">
          <p>{{sssA.name}}</p>
          <p>
            <span>{{sssA.content}}</span>
            <i></i>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "OrderFormInvoice",
      data(){
          return{
            OrderFormInvoice:[
              {
                name:'发票',
                content:'电子发票-个人',
              },
              {
                name:'优惠',
                content:'无可用',
              },
            ]
          }
      }
    }
</script>

<style scoped>
  .OrderFormInvoice{
    height: 1.1rem;
    padding: 0.06rem 0.1rem;
    box-sizing: border-box;
  }
  .OrderFormInvoiceDiv{
    width: 100%;
    height: 100%;
    border-radius: 0.06rem;
    background: #ffffff;
    padding: 0 0.12rem;
    box-sizing: border-box;
  }
  .OrderFormInvoiceDivTop{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.5rem;
    box-sizing: border-box;
    border-bottom: 1px solid #f6f6f6;
    font-size: 0.14rem;
    color: #333333;
  }
  .OrderFormInvoiceDivTop p{
    display: flex;
    align-items: center;
  }
  .OrderFormInvoiceDivTop i{
    display: block;
    background-image: url('../../../static/OrderForm02.png');
    background-position: -21px -349.5px;
    background-size: 379.5px;
    width: 0.12rem;
    height: 0.16rem;
  }
</style>
