<template>
  <Layout>
    <HeroBanner>
      <h1>Hi,</h1>
      <p>My name is Kurtis Fields</p>
      <p>Here are some of my favorite projects</p>
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
      title: 'Portfolio',
      meta: [
        { name: 'description', content: 'Portfolio' }
      ]
    }
  }
};
</script>
