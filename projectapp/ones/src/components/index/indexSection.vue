<template>
    <div>
      <index-Section-Swper :swp1="swiperv" :swp2="swiper1"></index-Section-Swper>
      <index-Section-Center :tmc="tempsC1[0]"></index-Section-Center>
      <index-Section-Bottom :btm1="Bottom1" :btm2="Bottom2" :btb="BottomB"></index-Section-Bottom>
    </div>
</template>

<script>
    import IndexSectionSwper from "./indexSectionSwper";
    import IndexSectionCenter from "./indexSectionCenter";
    import IndexSectionBottom from "./indexSectionBottom";
    export default {
        name: "indexSection",
      components: {IndexSectionBottom, IndexSectionCenter, IndexSectionSwper},
      props:["swiperv","swiper1","tempsC1","Bottom1","Bottom2","BottomB"],

      created(){
        console.log(this.Bottom1)
        console.log(this.Bottom2)
        console.log(this.tempsC1)
      }
    }
</script>

<style scoped>

</style>
