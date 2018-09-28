<template>
  <div class="box" v-if="!loading">
      <index-Header></index-Header>
      <index-Section class="sectIona" :swiperv="temps0" :swiper1="temps01" :tempsC1="tempsC" :Bottom1="tempsB1" :Bottom2="tempsB2" :BottomB="tempsBB">
      </index-Section><index-Footer></index-Footer>
  </div>
</template>

<script>
    import IndexHeader from "../components/index/indexHeader";
    import IndexSection from "../components/index/indexSection";
    import IndexFooter from "../components/index/indexFooter";
    import { index } from "../apis/index"

    export default {
        name: "index",
      components: { IndexFooter, IndexSection, IndexHeader},
      data(){
        return{
          data:[],
          temps0:[],
          temps01:[],
          tempsC:[],
          tempsB1:[],
          tempsB2:[],
          tempsBB:[],
          loading:false
        }
      },
      methods:{
        Cat(){
          this.loading = true
          let that = this
          index.getCat((data)=>{
            this.temps0 = data[0].swiPer;
            this.temps01 = data[0].swiPer1;
            this.tempsC = data[1].shangName;
            this.tempsB1 = data[2].biaoXiangQ;
            this.tempsBB = data[3].biaoXiangB;
            this.tempsB2 = data[4].biaoZhongL;
            console.log(this.tempsB1);
            console.log(this.tempsB2);
            that.loading = false
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
