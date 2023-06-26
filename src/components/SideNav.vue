<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    variant="plain"
    permanent
    absolute
    @click="rail = !rail"
    style="height: fit-content; top: 56px;"
  >
    <v-list-item
      prepend-icon="mdi:mdi-menu"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          @click.stop="rail = !rail"
        >
          <v-icon icon="mdi:mdi-menu" size="24" color="grey"></v-icon>
        </v-btn>
      </template>
    </v-list-item>

      <!-- <v-divider></v-divider> -->

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
    </v-list>
  </v-navigation-drawer>








  <!-- <v-navigation-drawer
    expand-on-hover
    rail
    absolute
    floating
    color="#1F1B16"
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
    </v-list> -->

    <!-- <v-divider></v-divider> -->

    <!-- <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
      <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
      <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
    </v-list>
  </v-navigation-drawer> -->
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      rail: true,
      drawer: ''
    }
  }
}
</script>
