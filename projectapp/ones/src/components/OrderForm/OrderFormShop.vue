<template>
    <div class="OrderFormShop">
      <div class="OrderFormShopDiv">
        <div class="OrderFormShopDivTop">
          <i></i>
          <p>{{OrderFormShop.name}}</p>
          <span></span>
        </div>
        <div class="OrderFormShopDivMiddle">
          <div class="OrderFormShopDivMiddleLeft">
            <img :src="OrderFormShop.img" alt="">
          </div>
          <div class="OrderFormShopDivMiddleRight">
            <p>{{OrderFormShop.Shopname}}</p>
            <p>{{OrderFormShop.class}}</p>
            <div>
              <span>￥{{OrderFormShop.price}}</span>
              <span>x1</span>
            </div>
            <p>7天退换</p>
          </div>
        </div>
        <div class="OrderFormShopDivBottom">
          <p>满减</p>
          <p>-￥{{OrderFormShop.discount}}</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "OrderFormShop",
      data(){
          return{
            OrderFormShop:{
              name:'顶级专卖店',
              img:'//image7.wbiao.co/shop/201112_18_6194_16817.jpg?x-oss-process=image/resize,w_90,h_90',
              Shopname:'积家JAEGER-LECOULTRE-Master control系列 Q1368420 自动机械男表',
              class:'真皮 银白 鳄鱼皮',
              price:'59,400',
              discount:'3300'
            }
          }
      }
    }
</script>

<style scoped>
  .OrderFormShop{
    height: 2.29rem;
    box-sizing: border-box;
    padding: 0.06rem 0.1rem;
  }
  .OrderFormShopDiv{
    width: 100%;
    height: 100%;
    border-radius: 0.06rem;
    background: #ffffff;
  }
  .OrderFormShopDivTop{
    height: 0.5rem;
    box-sizing: border-box;
    padding-left: 0.18rem;
    display: flex;
    align-items: center;
  }
  .OrderFormShopDivTop i{
    display: block;
    background-image: url('../../../static/OrderForm02.png');
    background-position: -302.5px -246px;
    background-size: 379.5px;
    width: 0.2rem;
    height: 0.2rem;
  }
  .OrderFormShopDivTop p{
    font-size: 0.16rem;
    color: #666666;
    font-weight: bold;
    margin-left: 0.03rem;
    margin-right: 0.03rem;
  }
  .OrderFormShopDivTop span{
    display: block;
    background-image: url('../../../static/OrderForm02.png');
    background-position: -21px -349.5px;
    background-size: 379.5px;
    width: 0.12rem;
    height: 0.16rem;
    margin-top: 0.03rem;
  }
  .OrderFormShopDivMiddle{
    height: 1.27rem;
    display: flex;
    box-sizing: border-box;
    padding: 0.12rem 0.12rem 0;
  }
  .OrderFormShopDivMiddleLeft{
    width: 0.9rem;
  }
  .OrderFormShopDivMiddleLeft img{
    margin: 0 auto;
  }
  .OrderFormShopDivMiddleRight{
    width: 2.41rem;
    height: 100%;
  }
  .OrderFormShopDivMiddleRight p:nth-of-type(1){
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.14rem;
    color: #666666;
    font-weight: bold;
    margin-bottom: 0.05rem;
  }
  .OrderFormShopDivMiddleRight p:nth-of-type(2){
    width: 100%;
    font-size: 0.12rem;
    color: #666666;
    margin-bottom: 0.12rem;
  }
  .OrderFormShopDivMiddleRight p:nth-of-type(3){
    width: 0.53rem;
    height: 0.2rem;
    box-sizing: border-box;
    border: 1px solid #b3b3b3;
    color: #b3b3b3;
    font-size: 0.12rem;
    border-radius: 0.08rem;
    text-align: center;
    line-height: 0.18rem;
  }
  .OrderFormShopDivMiddleRight div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.03rem;
  }
  .OrderFormShopDivMiddleRight div span:nth-of-type(1){
    font-size: 0.15rem;
    color: #000000;
    font-weight: bold;
  }
  .OrderFormShopDivMiddleRight div span:nth-of-type(2){
    font-size: 0.12rem;
    color: #666666;
  }
  .OrderFormShopDivBottom{
    height: 0.4rem;
    box-sizing: border-box;
    border-top: 0.01rem solid #f6f6f6;
    font-size: 0.12rem;
    padding: 0 0.12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .OrderFormShopDivBottom p:nth-of-type(1){
    width: 0.36rem;
    height: 0.19rem;
    border-radius: 0.07rem;
    background: #d90000;
    text-align: center;
    line-height: 0.19rem;
    color: #ffffff;
  }
  .OrderFormShopDivBottom p:nth-of-type(2){
    color: #d90000;
    font-weight: bold;
  }
</style>
