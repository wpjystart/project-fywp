<template>
    <header>
      <div class="header_left">
        <i class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="header_center">
        <a href="#" class="qqq">商品</a>
        <!--@click="qqq(0)" ref="qqq" :class="{qqq:flag=0}"-->
        <a href="#">详情</a>
        <a href="#">评价</a>
      </div>
      <div class="header_right">
        <i class="iconfont icon-gouwuche"></i>
        <h5>6</h5>
        <p class="header_right_min">
            ···
        </p>
      </div>
    </header>
</template>

<script>
  import $ from "jquery"
    export default {
        name: "detailsHeader",
      data(){
          return{
            flag:0
          }
      },
      methods:{
          // qqq(n){
            // this.$ref("qqq").style.color=""
            // this.flag=n
          // }
      }
      // mounted(){
      //   $(".header_center>a").click(()=>{
      //     $(this).addClass("qqq").siblings().removeClass("qqq")
      //   })
      // }
    }


</script>

<style lang="scss" scoped>
  header{
    width: 100%;
    height: 0.35rem;
    padding:0 0.1rem 0 0.12rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e8e8e8;
    .header_left{
      width: 0.2rem;
      height: 0.35rem;
      display: flex;
      align-items: center;
      .zuojiantou{
        font-size: 0.13rem;
        color: #3e2d2d;
      }
    }
    .header_center{
      width: 1.27rem;
      height: 0.35rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .qqq{
        color: black;
        font-weight: 600;
        border-bottom: 2px solid #000000;
        padding:.10rem 0 .06rem 0;
      }
      a{
        font-size: .1rem;
        color: #727272;
      }
    }
    .header_right{
      width: 0.56rem;
      height: .35rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      i{
        font-size: .2rem;
        color: #404040;
      }
      p{
        font-size: .16rem;
        color: #404040;
      }
      h5{
        display: flex;
        justify-content: center;
        line-height: 0.12rem;
        width: .12rem;
        height: .12rem;
        background: #d90000;
        color: #fff;
        position: absolute;
        left: .11rem;
        top: .04rem;
        font-size: .06rem;
        border-radius: 50%;
      }
    }
  }
</style>
