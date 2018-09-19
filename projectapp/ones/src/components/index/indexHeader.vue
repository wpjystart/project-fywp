<template>
    <header>
        <div class="header_left">
          <img src="../../../static/index01.png" alt="">
        </div>
        <div class="header_center">
          <img src="../../../static/index03.png" alt="">
          <p>建行信用卡专项全场12期免息</p>
        </div>
        <div class="header_right">
          <img src="../../../static/index02.png" alt="">
        </div>
    </header>
</template>

<script>
    export default {
        name: "indexHeader"
    }

    mounted:{
      $(".header_center p").css(
        " color","red"
      )
    }

</script>

<style scoped>
header{
  height: 0.42rem;
  display: flex;
  align-items: center;
  margin-left: 0.08rem;
}
.header_left {
  width: 0.39rem;
  height: 0.19rem;
}
.header_left img{
  width: 0.39rem;
  height: 0.19rem;
}

.header_center {
  width: 2.83rem;
  height: 0.2rem;
  background: #f1f1f1;
  margin: 0 0.07rem 0 0.09rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.header_center p{
  font-size: 0.09rem;
  color: #8c8c8c;
}
.header_center img{
  width: 0.1rem;
  height: 0.1rem;
  margin: 0 0.09rem;
}

.header_right{
  width: 0.23rem;
  height: 0.23rem;
  background: #39fd70;
}
.header_right img{
  width: 0.23rem;
  height: 0.23rem;
}
</style>
