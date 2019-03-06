<template>
  <Layout>
    <article>
      <g-image class="heroImage" :alt="$page.project.title" :src="$page.project.cover"/>
      <div class="section">
        <div>
          <h1>{{$page.project.title}}</h1>
          <p style="display: block">{{$page.project.date}}</p>
        </div>
        <div v-html="markdown"/>
      </div>
    </article>
  </Layout>
</template>

<page-query>
  query Project ($path: String!) {
    project (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      cover
    }
  }
</page-query>

<script>
import marked from "marked";
export default {
  name: "Project",
  // props: [''],
  // components: {},
  data() {
    return {
      markdown: ""
    };
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [{ name: "description", content: this.$page.project.description }]
    };
  },
  mounted: function() {
    this.markdown = marked(this.$page.project.content);
  }
};
</script>
<style>
article ul {
  list-style: disc inside;
  margin-bottom: 1rem;
}
article ul li {
  margin-bottom: 1rem;
}

</style>