<template>
    <div class="sectionTop">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="i in swp" :key="i.id"><img :src="i.imgG" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
        <div class="swiper_img">
          <img src="../../../static/mydateils4.png" alt="">
        </div>
    </div>
</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"
    export default {
        name: "detailsSectionSwiper",
        props:["swp"],

        mounted(){
          var mySwiper = new Swiper ('.swiper-container', {
            speed:300,
            autoplay : {
              delay:3000
            },
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                  return '<span style="width:0.3rem;height:0.03rem; border-radius: 5px" class="' + className + '">' + '</span>';
                }
              }
            })
          }
        }

</script>

<style  lang="scss" scoped>
.sectionTop{
  width: 100%;
  height:3.52rem;
  .swiper-container{
    .swiper-wrapper{
      height: 3.12rem;
      img{
        width:auto;
        height:100%;
        margin: 0 auto;
      }
    }
    .swiper-pagination-bullet{
      width: 0.1rem;
      height: 0.1rem;
    }
  }
  .swiper_img{
    height: .4rem;
    img{
      width: 100%;
      height: .4rem;
    }
  }
}
</style>
