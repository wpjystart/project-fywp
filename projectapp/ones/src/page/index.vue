<template>
  <div class="box">
    <index-Header></index-Header>
    <div class="sectIona">
       <index-Section></index-Section>
    </div>
    <index-Footer></index-Footer>
  </div>
</template>

<script>
    import IndexHeader from "../components/index/indexHeader";
    import IndexSection from "../components/index/indexSection";
    import IndexFooter from "../components/index/indexFooter";
    export default {
        name: "index",
      components: {IndexFooter, IndexSection, IndexHeader},
    }
</script>

<style scoped>
  .box{
    /*height: 100%;*/
    display: flex;
    flex-flow:column;
    justify-content: space-between;
  }
.sectIona{
  height: 100%;
  flex: 1;
  overflow-y: scroll;
}
</style>
