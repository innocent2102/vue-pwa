<template>
  <div class="pwa-app__main-container">
    <v-card
      height="100%"
      width="256"
      class="mx-auto"
    >
      <nav>
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Vue-PWA
              </v-list-item-title>
              <v-list-item-subtitle>
                MEAN
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
              <router-link :to="item.url">
                <div class="pwa-app__menu-item">
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </div>
              </router-link>

            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </nav>

    </v-card>
    <div class="pwa-app__router-container">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {},
})
export default class Home extends Vue {
  items = [
    { title: 'Home', icon: 'mdi-image', url: '/' },
    { title: 'About', icon: 'mdi-help-box', url: '/about' },
    { title: 'Camera', icon: 'mdi-camera', url: '/camera-view' }
  ];
  right = null;
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

a, a:link, a:visited, a:active, a:hover {
  color: black;
  text-decoration: none;
  width: 100%;
}

.v-list-item__icon {
  padding: 0 12px 0 0;
}

.pwa-app {
  &__main-container {
    height: 100%;
    display: flex;
  }

  &__router-container {
    padding: 12px;
  }

  &__menu-item {
    display: flex;
  }
}
</style>
