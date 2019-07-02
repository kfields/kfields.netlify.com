<template>
  <Layout>
    <article>
      <g-image class="heroImage" :alt="$page.project.title" :src="$page.project.cover"/>
      <div class="section">
        <div>
          <h1>{{$page.project.title}}</h1>
          <!-- <p style="display: block">{{$page.project.date}}</p> -->
        </div>
        <div v-html="markdown" class="darkdown-body"/>
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
    /*
    const renderer = new marked.Renderer()

    renderer.heading = function (text, level) {
      var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')

      return `
              <h${level}>
                <a name="${escapedText}" class="anchor" href="#${escapedText}">
                  <span class="header-link"></span>
                </a>
                ${text}
              </h${level}>`
    }
    this.markdown = marked(this.$page.project.content, { renderer: renderer })
    */
  }
}
</script>
<style lang="scss">
span.icon {
  // visibility: hidden;
  margin-left: -24px;
}
article ul {
  list-style: disc inside;
  margin-bottom: 1rem;
}
article ul li {
  margin-bottom: 1rem;
}
</style>
