<template>
  <div class="preview">
    <g-link :to="`/blog/${article.slug}`" >
      <!--
      <g-image class="previewImage" :alt="article.title" :src="article.cover"/>
      -->
      <div class="previewTitle">
        {{article.title}}
      </div>
      <p class="previewSummary">
        {{article.description}}
      <p/>
    </g-link>
    <!--
    <div class="previewDate">
      <small class="previewDate">{{article.date}}</small>
    </div>
    -->
  </div>
</template>
<script>
export default {
  name: 'ArticlePreview',
  props: ['article'],
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
<style  lang="scss">
.preview {
  padding-bottom: 1rem;
}
.previewTitle {
  font-size: 1.5rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
  // line-height: 1rem;
}
.previewSummary {
  color:#A0A0A0
}
.previewImage {
  max-height: 200px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  object-fit: cover;
  /*
  border-radius: 5%;
  border-width: 1px;
  border-style: solid;
  border-color: #eeeeee;
  */
}

.previewDate {
  text-align: right;
}

.tag {
  color: #A0A0A0;
  text-decoration: none;
  display: inline-block;
  padding: .33333rem .5rem;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid #A0A0A0;
  margin-right: .5em;
}
</style>