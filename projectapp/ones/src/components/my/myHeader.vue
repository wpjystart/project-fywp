<template>
    <div class="myHeader">
      <div class="myHeader1Div">
        <div class="myHeader1DivDiv">
          <span class="myHeader1DivDiv1Span"></span>
          <p>
            <span class="myHeader1DivDiv2Span">{{id.name}}</span>
            <span class="myHeader1DivDiv3Span"><img :src="id.img" alt="">{{id.exp}}</span>
          </p>
        </div>
        <a href="#"></a>
      </div>
      <div class="myHeader2Div">
        <ul>
          <li v-for="sssA in myHeader2Div"><span class="myHeader2Div1Span" :style="sssA.Class"></span><p>{{sssA.names}}</p></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "myHeader",
      data(){
        return{
          id:{
            name:'wb5247749',
            exp:'普卡会员',
            img:'../../../static/myHeader02.png'
          },
          myHeader2Div:[
            {
              Class:'background-image: url("../../../static/myHeader03.png");background-position: -371px -392.5px;',
              names:'个人资料',
            },
            {
              Class:'background-image: url("../../../static/myHeader03.png");background-position: -202px -368px;',
              names:'收货地址',
            },
            {
              Class:'background-image: url("../../../static/myHeader03.png");background-position: -42px -417.5px;',
              names:'我的收藏',
            },
          ]
        }
      }
    }
</script>

<style scoped>
  .myHeader{
    height: 2.06rem;
    background-image: url('../../../static/myHeader.png');
    background-size: cover;
    margin-bottom: 0.08rem;
  }
  .myHeader1Div{
    height: 1.54rem;
    padding-top: 0.5rem;
    box-sizing: border-box;
    position: relative;
  }
  .myHeader1Div a{
    width: 0.32rem;
    height: 0.32rem;
    position: absolute;
    top: 0;
    right: 0;
    background-image: url("../../../static/myHeader03.png");
    background-position: -381px -37px;
    background-size: 443px;
    margin-right: 0.1rem;
    margin-top: 0.06rem;
  }
  .myHeader2Div{
    height: 0.52rem;
    background: rgba(0,0,0,.4);
  }
  .myHeader2Div ul{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .myHeader2Div li{
    width: 33.3333%;
    height: 100%;
    border-right: 1px solid #414143;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 0.12rem;
    color: #ffffff;
  }
  .myHeader2Div1Span{
    background-size: 443px;
    width: 0.16rem;
    height: 0.16rem;
    margin-bottom: 0.05rem;
  }
  .myHeader1DivDiv{
    height: 0.62rem;
    display: flex;
    align-items: center;
  }
  .myHeader1DivDiv1Span{
    background-image: url("../../../static/myHeader03.png");
    background-position: 0 -179px;
    background-size: 443px;
    width: 0.62rem;
    height: 0.62rem;
    margin: 0 0.14rem 0 0.25rem;
  }
  .myHeader1DivDiv2Span{
    display: block;
    font-size: 0.16rem;
    color: #ffffff;
    margin-bottom: 0.02rem;
  }
  .myHeader1DivDiv3Span{
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    color: #a8a8a8;
  }
  .myHeader1DivDiv3Span img{
    width: 0.13rem;
    height: 0.13rem;
    margin-right: 0.03rem;
  }
</style>
