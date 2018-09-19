<template>
  <div class="swipers">
      <div class="swiper_a">
        <img src="../../../static/index04.png" alt="">
      </div>
      <div class="swiper_b">
          <p>品&nbsp&nbsp&nbsp牌</p>
          <img src="../../../static/index06.png" alt="">
      </div>
    <div class="swiper_c">
    <img src="../../../static/index05.png" alt="">
  </div>
    <div class="swiper_c">
      <img src="../../../static/index05.png" alt="">
    </div>
    <div class="swiper_c">
      <img src="../../../static/index05.png" alt="">
    </div>
  </div>


</template>

<script>
    export default {
        name: "indexSectionSwper"
    }
</script>



<style scoped>
  .swipers{
    position: relative;
  }

.swiper_a{
  height:2.5rem;
}
.swiper_a img{
  width: 100%;
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
