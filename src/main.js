import { createApp } from 'vue';
import App from './App.vue';

function formatUrl(s) {
  return s.replace(/[^a-z0-9]/gi, '');
}

// Load site dynmaic data
fetch('siteContent.json')
  .then(response => response.json()
    .then(data => {
      const APP = createApp(App);
      data.sections.forEach(s => {
        s.url = formatUrl(s.title);
        if (s.pages) {
          s.pages.forEach(p => p.url = formatUrl(p.title));
        }
      });
      APP.provide('$siteContent', data);
      APP.mount('#app');
    })
  );