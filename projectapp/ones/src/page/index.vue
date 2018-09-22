<template>
  <div class="box">
    <index-Header></index-Header>
    <index-Section class="sectIona" :section="temps"></index-Section>
    <index-Footer></index-Footer>
  </div>
</template>

<script>
    import IndexHeader from "../components/index/indexHeader";
    import IndexSection from "../components/index/indexSection";
    import IndexFooter from "../components/index/indexFooter";
    import { index } from '../apis/index'
    export default {
        name: "index",
      components: {IndexFooter, IndexSection, IndexHeader},
      data(){
        return{
          temps:[]
        }
      },
      methods:{
        Cat(){
          index.getCat((data)=>{
            this.temps0 = data[0];
            this.temps1 = data[1]
          })
        }
      },
      created(){
        this.Cat()
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
