<template>
  <Layout>
    <HeroBanner>
      <h1>Code, Jam, Repeat</h1>
    </HeroBanner>
    <main class="landing-main">
      <div class="columns">
      <div class="column">
        <div class="landing-heading">
          <div class="landing-title">Latest Posts</div>
        </div>
      </div>
      <div class="column is-four-fifths">
        <Articles/>
      </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import HeroBanner from '~/components/HeroBanner'
export default {
  components: {
    HeroBanner
  },
  mounted () {
  },
  metaInfo() {
    return {
      title: 'Kurtis Fields',
      meta: [
        { name: 'description', content: 'Web Developer' }
      ]
    }
  }
};
</script>

<style lang="scss">
/*
.landing-main {
  position: relative;
}
*/
.landing-title {
  font-size: 2em;
  white-space: nowrap;
  opacity: .5;
}
@media only screen  and (min-width : 1224px) {
  .landing-title {
    font-size: 3em;
    transform: rotate(-90deg);
    position: absolute;
    top: 256px;

    // transform-origin: 0 0;
    // padding-top: 3em;
    // padding-left: 1em;
  }
}
/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 1223px) {
  .landing-main {
    padding-left: 1em;
  }
  .landing-title {
    transform: none;
  }
}

</style>