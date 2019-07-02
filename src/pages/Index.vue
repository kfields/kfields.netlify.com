<template>
  <Layout>
    <HeroBanner>
      <h1>Code, Jam, Repeat</h1>
    </HeroBanner>
    <main>
      <Articles/>
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
