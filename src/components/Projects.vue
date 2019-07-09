<template>
  <div class="section">
    <ul class="project-list">
      <li v-for="edge in $static.posts.edges" :key="edge.id">
        <ProjectPreview :article="edge.node" />
      </li>
    </ul>
  </div>
</template>
<static-query>
  query HomeQuery {
    posts: allProject {
      edges {
        node {
          title
          description
          slug
          date(format: "MMMM Do, YYYY")
          tags
          cover
          description
        }
      }
    }
  }
</static-query>
<script>

export default {
  components: {
  },
};
</script>
