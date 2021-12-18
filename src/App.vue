<template>
  <v-app>
    <Authenticator>
      <v-main>
        <router-view/>
      </v-main>
    </Authenticator>
  </v-app>
</template>

<script>
import Authenticator from "@/components/Authenticator";

export default {
  name: 'App',
  components: {
    Authenticator
  }
};
</script>
