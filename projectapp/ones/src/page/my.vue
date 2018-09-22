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
      <detailsFooter></detailsFooter>
    </div>
</template>

<script>
  import myHeader from '../components/my/myHeader'
  import myOrder from '../components/my/myOrder'
  import myClassify from '../components/my/myClassify'
  import detailsFooter from '../components/details/detailsFooter'
    export default {
        name: "my",
      components:{
        myHeader,
        myOrder,
        myClassify,
        detailsFooter,
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
                img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -275px -392.5px;\n',
                content:'待付款',
              },
              {
                img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -25px -392.5px;\n',
                content:'待发货',
              },
              {
                img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -300px -392.5px;\n',
                content:'待收货',
              },
              {
                img:'background-image: url("../../../static/myHeader03.png");\n    background-position: -125px -392.5px;\n',
                content:'待评价',
              },
            ],
            myClassifys:[
              {
                sssA:[
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -275px -392.5px;\n',
                    content:'待付款',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -25px -392.5px;\n',
                    content:'待发货',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -300px -392.5px;\n',
                    content:'待收货',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\n    background-position: -125px -392.5px;\n',
                    content:'待评价',
                  },
                ]
              },
              {
                sssA:[
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -275px -392.5px;\n',
                    content:'待付款',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -25px -392.5px;\n',
                    content:'待发货',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -300px -392.5px;\n',
                    content:'待收货',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\n    background-position: -125px -392.5px;\n',
                    content:'待评价',
                  },
                ]
              },
              {
                sssA:[
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -275px -392.5px;\n',
                    content:'待付款',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -25px -392.5px;\n',
                    content:'待发货',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\nbackground-position: -300px -392.5px;\n',
                    content:'待收货',
                  },
                  {
                    img:'background-image: url("../../../static/myHeader03.png");\n    background-position: -125px -392.5px;\n',
                    content:'待评价',
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
