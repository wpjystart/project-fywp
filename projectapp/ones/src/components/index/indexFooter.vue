<template>
    <footer>
        <div class="botcolor" >
          <i class="iconfont icon-fangzi"></i>
          <p >首页</p>
        </div>
      <div>
        <i class="iconfont icon-daohangfenlei"></i>
        <p>分类</p>
      </div>
      <div>
        <i class="iconfont icon-zixun"></i>
        <p>资讯</p>
      </div>
      <div>
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
      </div>
      <div >
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
      </div>
    </footer>
</template>

<script>
  import $ from 'jquery'

    export default {
        name: "indexFooter",

    }
    mounted:{
    $(function(){
      $("footer>div").click(()=>{
        $(this).addClass("botcolor").siblings().removeClass("botcolor");
      })
    }),

      $("p").css("background","red");
    }


</script>

<style scoped>
footer{
  height: 0.38rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.04rem 0.27rem 0 0.27rem;
  box-sizing: border-box;
  border-top: 1px solid #f3f3f3;
}
  /*.footer_one{*/
    /*flex: 1;*/
    /*height: 0.32rem;*/
    /*display: flex;*/
    /*flex-flow: column;*/
    /*align-items: center;*/
  /*}*/
.footer_one .icon-fangzi{
  font-size: 0.16rem;
  /*color:#7a7a7a;*/
}
/*.footer_one p{*/
  /*font-size: 0.08rem;*/
  /*color:#5a5a5a;*/
/*}*/



footer>div{
  color:black;
  flex: 1;
  height: 0.32rem;
  display: flex;
  flex-flow: column;
  align-items: center;
}
footer>div>p{
  font-size: 0.08rem;
}
.botcolor{
      color:red;
  }
</style>
