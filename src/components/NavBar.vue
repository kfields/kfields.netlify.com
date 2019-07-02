<template>
  <header>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <g-link class="navbar-item" to="/">
          <img alt class="nav-logo" src="/logos/only-logo.svg">
          <span style="font-size: 1.5em">KFields</span>
        </g-link>
        
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="burgerClick"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" ref="navMenu">
        <div class="navbar-start">
          <g-link class="navbar-item" to="/blog">Blog</g-link>
          <g-link class="navbar-item" to="/projects">Projects</g-link>
          <g-link class="navbar-item" to="/about">About</g-link>
          <g-link class="navbar-item" to="/contact">Contact</g-link>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://github.com/kfields/kfields.netlify.com/issues">Report an issue</a>
        </div>

        <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/kfields">
              <v-icon name="brands/github" scale="2"/>
            </a>
        </div>

      </div>
    </nav>
  </header>
</template>
<!--
<static-query>
query Home {
  metaData {
    siteName
  }
}
</static-query>
-->
<script>
import "vue-awesome/icons/brands/github";

export default {
  name: "NavBar",
  props: [],
  components: {},
  data() {
    return {};
  },
  mounted: function() {
  },
  methods: {
    burgerClick (event) {
      const el = event.currentTarget
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      //const $target = document.getElementById(target);
      const $target = this.$refs['navMenu']

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    }
  }
};
</script>
<style lang="scss">
.navbar, .navbar-menu.is-active {
  background-color: #18453B;
  color: #ffffff;
  // margin-bottom: 1em;
}

a.navbar-item {
  color: #ffffff;
}
a.navbar-item:hover {
  color: #18453B;
  // background-color: #ffffff;
}
</style>