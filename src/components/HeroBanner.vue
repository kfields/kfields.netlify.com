<template>
  <div class="hero-banner">
    <slot/>
  </div>
</template>
<script>

export default {
  name: 'HeroBanner',
  components: {
  }
}
</script>
<style lang="scss">
.hero-banner {
  // width: calc(100% - 10vmin);
  // margin: 0 auto;
  /*padding: 5vmin 0;*/
  // padding: 0 0 2vmin 0;
  padding: 1em;
  color: white;
  background-color: #18453B;
  text-align: center;
  font-size: 1.2em;
  /*
  border-radius: 1em;
  border-style: solid;
  border-color: gray;
  */
}
.hero-banner div {
  display: inline-block
}
</style>