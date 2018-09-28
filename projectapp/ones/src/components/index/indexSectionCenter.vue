<template>
    <div class="center">
      <div class="center_a">
        <div class="center_a_one" v-for="dv in tmc.shangName1" :key="dv.id">
            <p>{{dv.title}}</p>
            <span>{{dv.title1}}</span>
        </div>
      </div>
      <div class="center_a">
        <div class="center_a_one"  v-for="dv in tmc.shangName2" :key="dv.id">
          <p>{{dv.title}}</p>
          <span>{{dv.title1}}</span>
        </div>
      </div>
      <div class="center_a">
        <div class="center_a_one" v-for="dv in tmc.shangName3" :key="dv.id">
          <p>{{dv.title}}</p>
          <span>{{dv.title1}}</span>
        </div>
      </div>
      <div class="center_b">
          <div class="swiper_b">
            <p>品&nbsp&nbsp&nbsp牌</p>
            <img src="../../../static/index06.png" alt="">
          </div>
          <div class="imgs">
            <img src="../../../static/index07.png" alt="">
            <img src="../../../static/index08.png" alt="">
            <img src="../../../static/index09.png" alt="">
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "indexSectionCenter",
      props:["tmc"],
      created(){
          console.log(this.tmc)
      }
    }
</script>

<style scoped>
  .center{
    width: 100%;
    height: 8.77rem;
  }
  .center_a{
    height: 0.79rem;
    border-bottom: 2px solid #e9e9e9;
    display: flex;
    margin-top: 0.1rem;
  }
  .center_a_one{
    width: 1.25rem;
    height: 0.79rem;
    background-color: #f3f3f3;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .center_a p{
    font-size: 0.12rem;
    color: #353535;
    margin: 0.25rem 0 0.06rem 0;

  }
  .center_a span{
    font-size: 0.08rem;
    color: #9e9e9e;
  }
  .center_a .center_a_one:nth-child(2){
    border-left: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
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



  .imgs{
    height: 5.39rem;
  }
  .imgs>img{
    height: 1.79rem;
    margin-top: 5px;
  }
  .imgs img:nth-child(1){
    margin-top: 0px;
  }

</style>
