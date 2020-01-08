<template id="index">
  <div class="index">
      <!-- {{msg}} -->
      <index/>
  </div>
</template>

<script>
  import index from "./first.vue"
export default {
  name: 'Index',
  data(){
      return {
        // mas:"11111111"
      }
  },
  components:{
    index
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
