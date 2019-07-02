<template>
  <Layout>
    <HeroBanner>
      <h1>Projects</h1>
    </HeroBanner>
    <main>
      <Projects/>
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
    // console.log('Portfolio.vue')
    // console.log(this)
  },
  metaInfo() {
    return {
      title: 'Projects',
      meta: [
        { name: 'description', content: 'Projects' }
      ]
    }
  }
};
</script>
