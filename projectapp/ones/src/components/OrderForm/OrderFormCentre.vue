<template>
  <div class="OrderFormCentre">
    <div class="OrderFormCentreSections">
      <p v-for="sssA in OrderFormCentre">
        <span>{{sssA.name}}</span>
        <span :class="sssA.class">{{sssA.price}}</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "OrderFormCentre",
      data(){
          return{
            OrderFormCentre:[
              {
                name:'商品总额',
                price:'￥59,400',
                class:'zong',
              },
              {
                name:'活动优惠',
                price:'-￥3,300',
                class:'youhui',
              },
              {
                name:'邮费',
                price:'+￥0',
                class:'youhui',
              },
            ]
          }
      }
    }
</script>

<style scoped>
  .OrderFormCentre{
    height: 1.16rem;
    box-sizing: border-box;
    padding: 0.06rem 0.1rem;
  }
  .OrderFormCentreSections{
    height: 100%;
    background: #ffffff;
    border-radius: 0.06rem;
    box-sizing: border-box;
    padding: 0 0.12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.14rem;
    color: #333333;
  }
  .OrderFormCentreSections p{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.12rem;
  }
  .zong{
    font-weight: bold;
  }
  .youhui{
    font-weight: bold;
    color: #999999;
  }
</style>
