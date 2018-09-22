<template>
    <div class="myClassify">
      <ul>
        <li v-for="sssB in sssB">
          <i :style="sssB.img"></i>
          <span>{{sssB.content}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "myClassify",
      props:{
          sssB:Array
      }
    }
</script>

<style scoped>
  .myClassify{
    height: 0.8rem;
    background: #ffffff;
  }
  .myClassify ul{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .myClassify ul li{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.12rem;
    color: #333333;
  }
  .myClassify i{
    display: block;
    background-size: 443px;
    width: 0.2rem;
    height: 0.2rem;
    margin-bottom: 0.06rem;
  }
</style>
