<template>
    <div>
      <index-Section-Swper></index-Section-Swper>
      <index-Section-Center></index-Section-Center>
      <index-Section-Bottom></index-Section-Bottom>
    </div>
</template>

<script>
    import IndexSectionSwper from "./indexSectionSwper";
    import IndexSectionCenter from "./indexSectionCenter";
    import IndexSectionBottom from "./indexSectionBottom";
    export default {
        name: "indexSection",
      components: {IndexSectionBottom, IndexSectionCenter, IndexSectionSwper}
    }
</script>

<style scoped>

</style>
