<template>
  <div>
    <div class="Bottom">
      <div class="bota">
        <div class="bota_one">
          <p>闪购</p>
          <h4>jfyuguy</h4>
          <h5>jguiihilj</h5>
          <img src="../../../static/index11.png" alt="">
        </div>
        <div class="bota_one">
          <p>闪购</p>
          <h4>jfyuguy</h4>
          <h5>jguiihilj</h5>
          <img src="../../../static/index12.png" alt="">
        </div>
        <div class="bota_one">
          <p>闪购</p>
          <h4>jfyuguy</h4>
          <h5>jguiihilj</h5>
          <img src="../../../static/index11.png" alt="">
        </div>
        <div class="bota_one">
          <p>闪购</p>
          <h4>jfyuguy</h4>
          <h5>jguiihilj</h5>
          <img src="../../../static/index12.png" alt="">
        </div>
      </div>
      <div class="swiper_b">
        <p>品&nbsp&nbsp&nbsp牌</p>
        <img src="../../../static/index06.png" alt="">
      </div>
      <div class="botc">
        <img src="../../../static/index13.png" alt="">
      </div>
    </div>
    <div class="Bottom Bottom_two">
      <div class="bota bota_a">
        <div class="bota_one bota_two">
          <img src="../../../static/index15.png" alt="">
          <h4>jfyuguy</h4>
          <h5>jguiihilj</h5>
        </div>
        <div class="bota_one bota_two">
          <img src="../../../static/index16.png" alt="">
          <h4>jfyuguy</h4>
          <h5>jguiihilj</h5>
        </div>
        <div class="bota_one bota_two">
          <img src="../../../static/index15.png" alt="">
          <h4>jfyuguy</h4>
          <h5>jguiihilj</h5>
        </div>
        <div class="bota_one bota_two">
          <img src="../../../static/index16.png" alt="">
          <h4>jfyuguy</h4>
          <h5>jguiihilj</h5>
        </div>
      </div>
      <div class="swiper_b">
        <p>品&nbsp&nbsp&nbsp牌</p>
        <img src="../../../static/index06.png" alt="">
      </div>
      <div class="botc">
        <img src="../../../static/index14.png" alt="">
      </div>
    </div>
    <div class="bot_t_test">
      <span></span>
      <p>为您服务</p>
      <span></span>
    </div>
    <div class="bottom_three">
      <div class="bot_t_one">
          <img src="../../../static/index17.png" alt="">
          <p>jhgjh</p>
          <p>kjhjk</p>
          <span>￥35465</span>
        </div>
      <div class="bot_t_one">
        <img src="../../../static/index17.png" alt="">
        <p>jhgjh</p>
        <p>kjhjk</p>
        <span>￥35465</span>
      </div>
      <div class="bot_t_one">
        <img src="../../../static/index17.png" alt="">
        <p>jhgjh</p>
        <p>kjhjk</p>
        <span>￥35465</span>
      </div>
      <div class="bot_t_one">
        <img src="../../../static/index17.png" alt="">
        <p>jhgjh</p>
        <p>kjhjk</p>
        <span>￥35465</span>
      </div>
      <div class="bot_t_one">
        <img src="../../../static/index17.png" alt="">
        <p>jhgjh</p>
        <p>kjhjk</p>
        <span>￥35465</span>
      </div>
      <div class="bot_t_one">
        <img src="../../../static/index17.png" alt="">
        <p>jhgjh</p>
        <p>kjhjk</p>
        <span>￥35465</span>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "indexSectionBottom"
    }
</script>

<style scoped>
  .Bottom{
    height:5.29rem;
    margin-top:0.16rem ;
  }
  .bota{
    /*width: 100%;*/
    width: 3.75rem;
    height: 2.12rem;
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    flex-wrap: nowrap;
  }
  .bota_one{
    width: 1.56rem;
    height: 2.12rem;
    background-color: #f2f2f2;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-right: 0.06rem;
  }
.bota_one p{
    font-size:0.09rem ;
    color: #ca2f2e;
    padding:0.03rem ;
    border:1px solid #ca2f2e;
   margin: 0.05rem 0 0.05rem 0;
  border-radius: 3px;
}
.bota_one h4{
  font-size:0.11rem ;
  color: #ca2f2e;
  font-weight: 100;
}
.bota_one H5{
  font-size:0.09rem ;
  color: #9c9c9c;
  font-weight: 100;
  margin: 0.04rem 0 0.05rem 0;
}
.bota_one img{
  width: 1.04rem;
  height: 1.46rem;
}

  .swiper_b{
    width: 100%;
    height: 0.67rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
  .swiper_b img{
    width: 0.19rem ;
    height: 0.02rem;
    margin-top: 0.1rem;
  }
  .swiper_b p{
    font-size: 0.12rem;
    color: #171717;
    font-weight: 900;
  }

  .botc img{
    height: 2.51rem;
  }
  /*第二层*/
.Bottom_two{
  height: 5.3rem;
  margin-top:0.16rem ;
}
.bota_a{
  padding-left: 0.17rem;
  box-sizing: border-box;
}
  .bota_two{
    width: 1.35rem;
    height: 1.94rem;
    background-color: #fff;
    margin-right: 0.28rem;
  }
  .bota_two h4{
    font-size: 0.12rem;
    color: #515151;
    margin-top: 0.11rem;
  }
  .bota_two h5{
    font-size: 0.1rem;
    color: #9a9a9a;
  }


  .bota_two img{
    width: 1.35rem;
    height: 1.48rem;
  }
  /*第三层*/
  .bot_t_test{
    display: flex;
    height: 0.12rem;
    padding: 0 0.18rem;
    align-items: center;
    justify-content: space-between;
    margin:0.29rem 0 0.32rem 0;
  }
  .bot_t_test span{
    width: 1.34rem;
    display: block;
    border-bottom: 1px solid #929292;
  }
  .bot_t_test p{
    font-size: 0.1rem;
    color: #929292;
  }
  /*第四层*/
  .bottom_three{
    /*height: 100%;*/
    padding: 0 0.18rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }
  .bot_t_one{
    width: 1.69rem;
    height: 2.71rem;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .bot_t_one img{
    width: 1.18rem;
    height: 1.81rem;
  }
  .bot_t_one p{
      font-size: 0.09rem;
      color: #5e5e5e;
    margin: 0.02rem 0 0.04rem 0;
    }
  .bot_t_one span{
    font-size: 0.09rem;
    color: #000;
  }
</style>


