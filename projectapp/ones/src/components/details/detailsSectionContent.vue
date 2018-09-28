<template>
    <div class="sectionBottom">
      <div class="one">
          <h4>{{bnm[0].name}}</h4>
          <h6>{{bnm[0].kuanShi}}</h6>
          <div class="one_min">
              <h4>{{bnm[0].price}}</h4>
              <h5>{{bnm[0].yuanJ}}</h5>
              <p>一口价</p>
          </div>

          <p class="one_mina">
            顺丰包邮
            <span>销量：{{bnm[0].xiaoShou}}</span>
          </p>
      </div>
      <div class="two">
          <h6>已选</h6>
        <div class="two_min">
           <h4>{{ys[0].style}}</h4>
           <span>···</span>
        </div>

      </div>
      <div class="two">
        <h6>已选</h6>
        <div class="two_min">
          <h4>{{ys[1].fuKuan}}</h4>
          <span>···</span>
        </div>

      </div>
      <div class="three">
        <div class="three_a">
            <h6>配送</h6>
            <div class="three_right">
                <h3>
                  有现货
                 <p>免运费</p>
                </h3>
              <h4>下单后16：45前支付，预计1-3个工作日内发货</h4>
            </div>
        </div>
        <ul class="three_b">
          <li><img src="../../../static/mydateils.png" alt="">正规发票</li>
          <li><img src="../../../static/mydateils.png" alt="">假一赔三</li>
          <li><img src="../../../static/mydateils.png" alt="">7填报退</li>
          <li><img src="../../../static/mydateils.png" alt="">全球联保</li>
          <li><img src="../../../static/mydateils.png" alt="">免息分期</li>
          <li><img src="../../../static/mydateils.png" alt="">正品保障</li>
          <li class="clo"><img src="../../../static/mydateils1.png" alt="">实体店体验</li>
          <li class="clo"><img src="../../../static/mydateils1.png" alt="">闪电发货</li>
          <li class="clo"><img src="../../../static/mydateils1.png" alt="">货到付款</li>
          <li class="clo"><img src="../../../static/mydateils1.png" alt="">专人亲送</li>
          </ul>
      </div>
      <div class="four">
        <div class="four_a">
          <p>人气搭配</p>
          <span>搭配购买更优惠</span>
        </div>
        <div class="four_b">
          <div class="four_bone">
            <img :src="rq[0].rbimG" alt="">
            <p>{{rq[0].rprice}}</p>
          </div>
          <span>+</span>
          <div class="four_bone">
            <img :src="rq[1].rbimG" alt="">
            <p>{{rq[1].rprice}}</p>
          </div>
          <span>+</span>
          <h5>搭配更多</h5>
        </div>
      </div>
      <div class="five">
        <img src="../../../static/mydateils5.png" alt="">
        <div class="five_center">
            <h5>商品保底回收</h5>
            <span>闲置回收  极速变现</span>
        </div>
        <p>了解详情</p>
      </div>
      <div class="six">
        <div class="six_a">
            <p>评论(<span>5</span>)</p>
            <h5 class="six_min">好评(<span>100%</span>) <span>···</span></h5>
        </div>
        <div class="six_b">
          <p>全部评价(<span>5</span>)</p>
          <p>咨询客服</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailsSectionContent",
        props:["bnm","ys","rq"],
      mounted(){
          console.log(this.rq)
      }
    }
</script>

<style lang="scss" scoped>
.sectionBottom {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  .one {
    height: 1.07rem;
    background-color: #fff;
    padding: 0 0.11rem 0 0.12rem;
    box-sizing: border-box;
    h4 {
      margin: 0.12rem 0 0.08rem 0;
      font-size: 0.12rem;
      color: #666;
    }
    h6 {
      font-size: 0.09em;
      color: #848484;
    }
    .one_min {
      display: flex;
      align-items: center;
      margin: 0.13rem 0;
      h4 {
        margin: 0;
        font-size: 0.13rem;
        color: #d90000;
      }
      h5 {
        margin: 0 0.04rem 0 0.08rem;
        font-size: 0.06rem;
        color: #cbcbcb;
        font-weight: 100;
        text-decoration: line-through;
      }
      p {
        display: inline-block;
        border: 1px solid #cbcbcb;
        font-size: 0.07rem;
        color: #d90000;
        border-radius: 5px;
      }
    }
    .one_mina {
      font-size: 0.11rem;
      color: #cccccc;
      display: flex;
      justify-content: space-between;
    }
  }
  .two {
    height: 0.32rem;
    background-color: #fff;
    padding: 0 0.11rem 0 0.12rem;
    box-sizing: border-box;
    margin-top: 0.09rem;
    display: flex;
    align-items: center;
    h6 {
      font-size: 0.12rem;
      color: #6b6b6b;
    }
    .two_min {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.32rem;
      margin-left: 0.19rem;
      flex: 1;
      h4 {
        font-size: 0.12rem;
        color: #373737;
      }
      span {
        font-size: 0.08rem;
        color: #6b6b6b;
      }
    }
  }
  .three {
    height: 1.31rem;
    background-color: #fff;
    padding: 0 0.11rem 0 0.12rem;
    box-sizing: border-box;
    margin-top: 0.09rem;
    .three_a {
      height: 0.52rem;
      display: flex;
      border-bottom: 1px solid #f4f4f4;
      padding-top: 0.13rem;
      box-sizing: border-box;
      h6 {
        font-size: 0.12rem;
        color: #6b6b6b;
      }
      .three_right {
        margin-left: 0.19rem;
        height: 0.52rem;
        h3 {
          display: flex;
          font-size: 0.12rem;
          color: red;
          margin-bottom: 0.05rem;
          box-sizing: border-box;
          p {
            margin-left: 0.04rem;
            color: #000;
          }
        }
        h4 {
          font-size: 0.1rem;
          color: #9e9e9e;
        }
      }
    }
    .three_b {
      height: 0.77rem;
      padding: 0.11rem 0.17rem 0 0.49rem;
      display: flex;
      flex-wrap: wrap;
      .clo{
        color: #979797;
      }
      li {
        display: flex;
        align-items: center;
        height: 0.1rem;
        font-size: 0.09rem;
        color: #c9c9c9;
        margin-right: 0.05rem;
        img {
          margin-right: 0.02rem;
          width: 0.1rem;
          height: 0.1rem;
        }
      }
    }
  }
  .four{
    height: 1.31rem;
    background-color: #fff;
    padding: 0 0.11rem 0 0.12rem;
    box-sizing: border-box;
    margin-top: 0.09rem;
    p{
      font-size: 0.11rem;
      color: #a4a4a4;
      margin-right: 0.09rem;
    }
    .four_a{
      height: 0.39rem;
      display: flex;
      align-items: center;
      span{
        font-size: 0.09rem;
        color: #d0b184;
      }
    }
    .four_b{
      height: 0.93rem;
      display: flex;
      align-items: center;
      h5{
        font-size: 0.1rem;
        color: #4f4f4f;
        border: 2px solid #949494;
        padding: 0.04rem;
      }
      span{
        margin: 0 0.15rem;
        font-size: 0.14rem;
        color: #676767;
      }
      .four_bone{
        width: 0.64rem;
        height: 0.93rem;
        text-align: center;
        img{
          width: 0.64rem;
          height: 0.64rem;
          margin-bottom: 0.09rem;
        }
        p{
          font-size: 0.07rem;
          color: #5f5f5f;
        }
      }
    }
  }
  .five{
    height: 0.9rem;
    background-color: #fff;
    padding: 0 0.11rem 0 0.12rem;
    box-sizing: border-box;
    margin-top: 0.09rem;
    display: flex;
    align-items: flex-end;
    img{
      width: 0.81rem;
      height: 0.76rem;
    }
    .five_center{
      margin: 0 0.53rem 0 0.19rem;
      display: flex;
      flex-flow: column;
      h5{
        font-size: 0.13rem ;
        color: #0e0e0e;
      }
      span{
        margin: 0.05rem 0 0.16rem 0;
        font-size: 0.1rem ;
        color: #949494;
      }
    }
    p{
      margin-bottom: 0.23rem;
      border: 2px solid #caaa78;
      padding: 0.05rem;
      border-radius: 10px;
      font-size: 0.12rem;
      color: #caaa78;
    }
  }
  .six{
    height: 0.72rem;
    background-color: #fff;
    padding: 0 0.11rem 0 0.12rem;
    box-sizing: border-box;
    margin-top: 0.09rem;
    .six_a{
      height: 0.33rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
        font-size: 0.1rem;
        color: #313131;
      }
      .six_min{
        width: 0.87rem;
        font-size: 0.11rem;
        color: #1a1a1a;
        display: flex;
        /*flex-flow: column;*/
        justify-content: space-between;
        span:nth-child(1){
          color: red;
        }
        span:nth-child(2){
          color: #979797;
        }
      }
    }
    .six_b{
      height: 0.36rem;
      padding: 0 0.61rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
        font-size: 0.09rem;
        color: #767676;
      }
    }
  }
}

</style>
