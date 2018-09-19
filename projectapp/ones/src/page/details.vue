<template>
    <div>
      <details-Header></details-Header>
      <details-Section></details-Section>
      <details-Footer></details-Footer>
    </div>
</template>

<script>
    import DetailsHeader from "../components/details/detailsHeader";
    import DetailsSection from "../components/details/detailsSection";
    import DetailsFooter from "../components/details/detailsFooter";
    export default {
        name: "details",
      components: {DetailsFooter, DetailsSection, DetailsHeader}
    }
</script>

<style scoped>

</style>
