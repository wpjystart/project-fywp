<template>
  <div class="box">
    <index-Header></index-Header>
    <index-Section class="sectIona"></index-Section>
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
      created(){
        let _this = this;
        fetch('./src/static/data.json').then(function(res){
          return res.json();
        }).then(function(stories){
          console.log(stories)
          _this.items = stories;
        }).then(function(err){
          console.log(err)
        })
      }
    }
</script>

<style scoped>
  .box{
    height: 100%;
    display: flex;
    flex-flow:column;
  }
.sectIona{
  height: 100%;
  flex: 1;
  overflow-y: scroll;
}
</style>
