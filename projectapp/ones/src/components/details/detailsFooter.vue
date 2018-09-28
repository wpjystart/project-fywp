<template>
    <footer>
      <div class="footer_left">
          <div class="footer_left_one">
            <i class="iconfont icon-kefu icon"></i>
            <p>客服</p>
          </div>
          <div class="footer_left_one">
            <i class="iconfont icon-shangdian" ></i>
            <p>客服</p>
          </div>
          <div class="footer_left_one">
          <i class="iconfont icon-xin" ></i>
          <p>客服</p>
        </div>
      </div>
      <p class="footer_center">加入购物车</p>
      <p class="footer_right">立即购买</p>
    </footer>
</template>

<script>
    export default {
        name: "detailsFooter"
    }
</script>

<style lang="scss" scoped>
  footer{
    width: 100%;
    height: .4rem;
    display: flex;
    .footer_left{
      width: 1.47rem;
      height: .4rem;
      border-right: 1px solid #f6f6f6;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 .17rem;
      box-sizing: border-box;
      .footer_left_one{
        width: .21rem;
        height: .3rem;
        display: flex;
        flex-flow: column;
        justify-content: center;
        .icon{
          color: #d90000;
        }
        i{
          font-size: .16rem;
          color: #5c5c5c;
        }
        p{
          font-size: .08rem;
          color: #5c5c5c;
        }
      }
    }
    .footer_center{
      width: 1.16rem;
      height: .4rem;
      font-size: .11rem;
      color: #5e5e5e;
      text-align: center;
      line-height: .4rem;
    }
    .footer_right{
      width: 1.12rem;
      height: .4rem;
      background: #d90000;
      font-size: .11rem;
      color: #fff;
      text-align: center;
      line-height: .4rem;
    }
  }
</style>
