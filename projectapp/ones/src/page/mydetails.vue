<template>
    <div class="box" v-if="!loading">
      <details-Header></details-Header>
      <details-Section class="sections" :swiper="cotsp" :bname="cotbn" :yshi="cotys" :pers="cotrq"></details-Section>
      <details-Footer></details-Footer>
    </div>
</template>

<script>
    import DetailsHeader from "../components/details/detailsHeader";
    import DetailsSection from "../components/details/detailsSection";
    import DetailsFooter from "../components/details/detailsFooter";
    import { mydetails } from "../apis/mydetails"
    export default {
        name: "mydetails",
      components: {DetailsFooter, DetailsSection, DetailsHeader},
      data(){
          return{
            data:[],
            cotsp:[],
            cotys:[],
            cotrq:[],
            loading:false
          }
      },
      methods:{
        Cato(){
          this.loading = true
          let that = this
          mydetails.getCat((data)=>{
            this.data = data;
            this.cotsp = data[0].swiPer;
            this.cotbn = data[1].bName;
            this.cotys = data[2].yangShi;
            this.cotrq = data[3].renQi;
            console.log(this.cotrq);
            that.loading = false;
          })
        }
      },
      created(){
          this.Cato()
      }
    }
</script>

<style lang="scss" scoped>
  .box{
    height: 100%;
    display: flex;
    flex-flow: column;
    -webkit-justify-content: space-between;
    .sections{
      height: 100%;
      flex: 1;
      overflow-y: scroll;
    }
  }
</style>
