<template>
  <div class="app">
    <!--
    ---- Icon
    --->
    <div class="app__icon">
      <img
        src="../public/images/kav-dance-logo.gif"
        aria-hidden="true"
      />
    </div>

    <!--
    ---- Nav
    --->
    <nav class="app__nav">
      <ul class="app__nav-list">
        <li
          v-for="(section, i) of $siteContent.sections"
          :key="i"
          class="app__nav-list-item"
          :class="{'active': navOpen[i]}"
          @click="openItem(i)"
        >
          <a
            v-if="!section.pages"
            :href="'#/' + section.url"
          >
            {{ section.title }}
          </a>
          <button v-if="section.pages">
            {{ section.title }}
          </button>
          <ul
            v-if="section.pages"
            class="app__nav-list-sub"
            :class="{'active': navOpen[i]}"
          >
            <li
              v-for="page of section.pages"
              :key="page.title"
              class="app__nav-list-sub-item"
              :class="{'active': currentSection === section.url && currentPage === page.url}"
            >
              <a :href="'#/' + section.url + '/' + page.url">
                {{ page.title }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <!--
    ---- Title
    --->
    <header class="app__header">
      <h1 class="app__header-title">
        <div class="app__header-title-sub">
          {{ currentSection }}
        </div>
        {{ pageData.heading || pageData.title }}
      </h1>
    </header>

    <!--
    ---- Main
    --->
    <main class="app__main">
      <p
        v-if="pageData.text"
        class="app__main-lede"
        :innerHTML="pageData.text"
      ></p>

      <!-- Gallery -->
      <div
        v-if="pageData.images"
        class="app__main-gallery"
      >
        <img
          class="app__main-gallery-item"
          :class="{'app__main-gallery-item--shop': currentSection === 'Shop'}"
          v-for="(image, i) of pageData.images"
          :key="i"
          :src="'../public/images/' + image"
        />
      </div>

      <!-- Video link -->
      <div v-if="pageData.videoLink">
        <iframe
          class="app__main-video-container"
          width="720"
          :height="pageData.videoLinkHeight || 405"
          :src="pageData.videoLink"
          title="Video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        currentSection: '',
        currentPage: '',
        pageData: {},
        navOpen: []
      }
    },
    inject: ['$siteContent'],
    created() {
      this.urlChange();
      this.navOpen = this.$siteContent.sections.map(s => s.url === this.currentSection);
    },
    mounted() {
      window.addEventListener('hashchange', this.urlChange);
    },
    methods: {
      urlChange() {
        const VIEW = window.location.hash.match(/[a-z0-9]+/gi);
        if (VIEW) {
          const SECTION = this.$siteContent.sections.find(s => s.url === VIEW[0]);
          if (SECTION) {
            if (SECTION.pages) {
              this.pageData = SECTION.pages.find(p => p.url === VIEW[1]);
              if (this.pageData) {
                this.currentSection = VIEW[0];
                this.currentPage = VIEW[1];
                this.setPageTitle();
                return;
              }
            } else {
              this.pageData = SECTION;
              if (this.pageData) {
                this.currentSection = VIEW[0];
                this.currentPage = '';
                this.setPageTitle();
                return;
              }
            }
          }
        }

        // Default to about page
        window.location.hash = '#/About';
      },
      setPageTitle() {
        document.title = this.$siteContent.title + ' | ' + (this.currentPage || this.currentSection);
      },
      openItem(i) {
        this.navOpen = this.navOpen.map(() => false);
        if (typeof i === 'number') {
          this.navOpen[i] = true;
        }
      }
    },
  }
</script>

<style lang="scss">
  @import './App.scss';
</style>