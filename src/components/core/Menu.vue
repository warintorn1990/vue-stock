<template>
  <v-navigation-drawer app permanent dark src="@/assets/background_menu.jpg">
    <router-link to="/" exact>
      <v-img
        src="@/assets/businessman-character-avatar-isolated_24877-60111.jpeg"
        alt=""
        width="100%"
      />
    </router-link>
    <v-list shaped>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <!-- <v-list-item       
        class="title" 
          v-for="([icon, title, route], index) in menus"
          :key="index"
          @click="onClickMenu(route)"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
        <!-- <v-list-item 
          v-for="(item, index) in menus" 
          :key="index"
 
        >  -->

        <v-list-item
          class="tile"
          v-for="([icon, title, route], index) in menus"
          :key="index"
          @click="onClickMenu(route)"
        >
          <!-- {{item[1]}} -->
          <v-list-item-icon>
            <v-icon color="white">{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    onClickMenu(link) {
      this.$router.push(link).catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.selectedMenu = this.menus.findIndex(
      (menu) => menu[2] == this.$route.path
    );
  },
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mdi-apps-box", "Stock", "/stock"],
        ["mdi-chart-areaspline", "Report", "/report"],
        ["mdi-file-document", "About", "/about"],
      ],
    };
  },
  watch: {
    $route(to) {
       console.log(to.path);
      this.selectedMenu = this.menus.findIndex(menu => menu[2] == to.path);
      console.log(this.selectedMenu);
    }
  }
};
</script>

<style>
.v-list-item-group .v-list-item--active {
  color: #fff !important;
  font-weight: bold;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  opacity: 0.7;
}

.tile {
  color: white;
}

.tile:hover {
  background: green;
}

.tile:active {
  background: #05ab71;
}
</style>
