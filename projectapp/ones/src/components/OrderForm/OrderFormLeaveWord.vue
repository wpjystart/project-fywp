<template>
    <div class="OrderFormLeaveWord">
      <div class="OrderFormLeaveWordDiv">
        <p>留言</p>
        <input placeholder="请填写..." type="text">
      </div>
    </div>
</template>

<script>
    export default {
        name: "OrderFormLeaveWord"
    }
</script>

<style scoped>
  .OrderFormLeaveWord{
    height: 0.6rem;
    box-sizing: border-box;
    padding: 0.06rem 0.1rem;
  }
  .OrderFormLeaveWordDiv{
    width: 100%;
    height: 100%;
    background: #ffffff;
    border-radius: 0.06rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.15rem 0.12rem;
  }
  .OrderFormLeaveWordDiv p{
    font-size: 0.14rem;
    color: #333333;
    margin-right: 0.12rem;
  }
  .OrderFormLeaveWordDiv input{
    border: none;
    color: #333333;
    flex: 1;
    outline: 0;
  }
</style>
