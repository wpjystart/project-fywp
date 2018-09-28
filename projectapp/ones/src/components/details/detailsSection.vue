<template>
  <div>
    <details-section-swiper :swp="swiper"></details-section-swiper>
    <details-section-content :bnm="bname" :ys="yshi" :rq="pers"></details-section-content>
  </div>

</template>

<script>
    import DetailsSectionSwiper from "./detailsSectionSwiper";
    import DetailsSectionContent from "./detailsSectionContent";
    export default {
        name: "detailsSection",
      components: {DetailsSectionContent, DetailsSectionSwiper},
    props:["swiper","bname","yshi","pers"]
    }
</script>

<style lang="scss" scoped>

</style>
