<template>
  <div class="app">
    <!--
    ---- Icon
    --->
    <div class="app__icon">
      <a
        href="#/"
        aria-label="landing page"
      >
        <img
          src="images/kav-dance-logo.gif"
          aria-hidden="true"
        />
      </a>
    </div>

    <!--
    ---- Nav
    --->
    <nav
      class="app__nav"
      :class="{'open': mobileNavOpen}"
    >
      <!-- Mobile burger menu -->
      <div class="app__nav-button-container">
        <button
          class="app__nav-button"
          @click="mobileNavOpen = !mobileNavOpen"
          aria-label="open navigation"
        ></button>
      </div>

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
            @click="mobileNavOpen = false"
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
              <a
                :href="'#/' + section.url + '/' + page.url"
                @click="mobileNavOpen = false"
              >
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
    <main
      class="app__main"
      :class="{'landing-page': currentPage === 'landing'}"
    >
      <p
        v-if="pageData.text"
        class="app__main-lede"
        :innerHTML="pageData.text"
      ></p>

      <!-- Contact -->
      <div 
        v-if="pageData.contact"
        class="app__main-contact"
      >
        <template
          v-for="(contact, i) of pageData.contact"
          :key="i"
        >
          <span>
            {{ contact.text }}
          </span>
          <a
            :href="contact.link"
            target="_blank"
          >
            {{ contact.label }}   
          </a>
        </template>
      </div>

      <!-- Video link -->
      <div v-if="pageData.videoLink">
        <iframe
          class="app__main-video-container"
          :width="videoPlayerWidth"
          :height="videoPlayerHeight"
          :src="pageData.videoLink"
          title="Video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Gallery -->
      <div
        v-if="pageData.images"
        class="app__main-gallery"
      >
        <img
          v-for="(image, i) of pageData.images"
          class="app__main-gallery-item"
          :class="{
            'app__main-gallery-item--shop': currentSection === 'Shop',
            'loaded': imageLoadState[i]
          }"
          :key="i"
          :src="'images/' + image"
          tabindex="0"
          role="button"
          :aria-label="image + '. click to enlarge'"
          :alt="image"
          @click="lightboxImage = image"
          @load="imageLoadState[i] = true"
        />
      </div>

      <!-- Image lightbox -->
      <div
        class="app__main-lightbox"
        :class="{'open': lightboxImage}"
        tabindex="0"
        role="button"
        aria-label="close image"
        @click="lightboxImage = null"
      >
        <img
          :src="'images/' + lightboxImage"
          :alt="lightboxImage"
        />
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
        navOpen: [],
        imageLoadState: [],
        mobileNavOpen: false,
        lightboxImage: null,
        videoPlayerWidth: 720,
        videoPlayerHeight: 405,
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
        document.title = this.$siteContent.title;

        const VIEW = window.location.hash.match(/[a-z0-9]+/gi);
        if (VIEW) {
          const SECTION = this.$siteContent.sections.find(s => s.url === VIEW[0]);
          if (SECTION) {
            if (SECTION.pages) {
              this.pageData = SECTION.pages.find(p => p.url === VIEW[1]);
              if (this.pageData) {
                this.currentSection = VIEW[0];
                this.currentPage = VIEW[1];
              }
            } else {
              this.pageData = SECTION;
              if (this.pageData) {
                this.currentSection = VIEW[0];
                this.currentPage = '';
              }
            }
          }

          document.title += ' | ' + (this.currentPage || this.currentSection);
        } else {
          // Default to random grid of images for home page
          const IMGS =
            JSON.stringify(this.$siteContent)
            .match(/"[a-z0-9-_()]+\.(gif|png|jpg)"/gi);
          this.pageData = {
            "title": "",
            "text": "",
            "images": []
          }
          for (let i = 0; i < 9; i++) {
            let img;
            do {
              img = IMGS[Math.floor(Math.random() * IMGS.length)].replace(/"/g, '');
            } while(this.pageData.images.indexOf(img) !== -1)
            this.pageData.images.push(i === 4 ? this.$siteContent.landingImage : img);
          }
          this.currentSection = '';
          this.currentPage = 'landing';
        }

        // Hide images until loaded
        if (this.pageData.images) {
          this.imageLoadState = new Array(this.pageData.images.length).fill(false);
        }

        // Set video player size
        if (this.pageData.videoLink) {
          this.videoPlayerWidth = window.innerWidth > 768 ? 720 : window.innerWidth - 48;
          this.videoPlayerHeight = (this.pageData.videoLinkHeight || 405) * (this.videoPlayerWidth / 720);
        }
      },
      openItem(i) {
        this.navOpen = this.navOpen.map(() => false);
        if (typeof i === 'number') {
          this.navOpen[i] = true;
        }
      }
    }
  }
</script>

<style lang="scss">
  @import './App.scss';
</style>