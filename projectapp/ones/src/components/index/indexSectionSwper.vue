<template>
  <div >
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../../static/index04.png" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/index05.png" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/index04.png" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/index05.png" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

      <div class="swiper_b">
          <p>品&nbsp&nbsp&nbsp牌</p>
          <img src="../../../static/index06.png" alt="">
      </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../../static/index05.png" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/index04.png" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/index05.png" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/index04.png" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

  </div>


</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"
    export default {
        name: "indexSectionSwper",
       mounted(){
         var mySwiper = new Swiper ('.swiper-container', {
           direction: 'horizontal',
           speed:300,
           autoplay : {
             delay:3000
           },
           loop: true,

           // 如果需要分页器
           pagination: {
             el: '.swiper-pagination',
           }
         })
       }
    }
</script>



<style scoped>
.swiper-container{
  width: 3.75rem;
  height:2.5rem;
}
.swiper-wrapper img{
  width: 3.75rem;
  height:2.5rem;
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

  .swiper_c{
    height:2.5rem;
  }
  .swiper_c img{
    width: 100%;
    height:2.5rem;
  }
</style>
