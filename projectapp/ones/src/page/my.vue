<template>
    <div class="my">
      <div class="mySection">
        <myHeader></myHeader>
        <div class="myOrderS">
          <myOrder :sssA="myOrder"></myOrder>
          <myClassify :sssB="myClassify"></myClassify>
        </div>
        <div class="myService">
          <myOrder :sssA="myService"></myOrder>
          <myClassify v-for="sssB in myClassifys" :key="myClassifys.index" :sssB="sssB.sssA"></myClassify>
        </div>
      </div>
      <indexFooter></indexFooter>
    </div>
</template>

<script>
  import myHeader from '../components/my/myHeader'
  import myOrder from '../components/my/myOrder'
  import myClassify from '../components/my/myClassify'
  import indexFooter from '../components/index/indexFooter'
    export default {
        name: "my",
      components:{
        myHeader,
        myOrder,
        myClassify,
        indexFooter,
      },
      data(){
          return{
            myOrder:{
              img:"background-image: url(\"../../../static/myHeader03.png\");background-position: -349px -368px;\nbackground-size: 443px;\n",
              content:'',
              name:'我的订单',
            },
            myService:{
              img:"background-image: url(\"../../../static/myService01.png\");background-size: 0.16rem",
              content:'联系万表',
              name:'我的服务',
            },
            myClassify:[
              {
                img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -275px -392.5px;\nbackground-size: 443px;\n',
                content:'待付款',
              },
              {
                img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -25px -392.5px;background-size: 443px;\n',
                content:'待发货',
              },
              {
                img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -300px -392.5px;background-size: 443px;\n',
                content:'待收货',
              },
              {
                img:'background-image: url("../../../static/myHeader03.png");\n    background-position: -125px -392.5px;background-size: 443px;\n',
                content:'待评价',
              },
            ],
            myClassifys:[
              {
                sssA:[
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -325px -392.5px;background-size: 443px;\n',
                    content:'我的预售',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader04.png");\nbackground-position: -298.5px -233px;background-size: 330.5px;\n',
                    content:'我的礼品单',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -418px -303.5px;background-size: 443px;\n',
                    content:'售后服务',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -225px -392.5px;background-size: 443px;\n',
                    content:'我的积分',
                  },
                ]
              },
              {
                sssA:[
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -250px -392.5px;background-size: 443px;\n',
                    content:'发票管理',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -100px -392.5px;background-size: 443px;\n',
                    content:'优惠券',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: 0 -392.5px;background-size: 443px;\n',
                    content:'余额',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -150px -392.5px;background-size: 443px;\n',
                    content:'足迹',
                  },
                ]
              },
              {
                sssA:[
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -75px -392.5px;background-size: 443px;\n',
                    content:'我的评论',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader04.png");\n    background-position: -298.5px -208px;background-size: 330.5px;\n',
                    content:'推荐',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader04.png");\n    background-position: 0 -267px;background-size: 330.5px;\n',
                    content:'手表管家',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader04.png");\n    background-position: -25px -267px;background-size: 330.5px;\n',
                    content:'维修订单',
                  },
                ]
              },
            ]
          }
      }
    }
</script>

<style scoped>
  .my{
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f1f1f1;
  }
  .mySection{
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .myOrderS{
    margin-bottom: 0.08rem;
  }
</style>
