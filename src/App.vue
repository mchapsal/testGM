<template>
  <v-app>
  <h1>{{title}}</h1>
    <v-content>
      <Beers/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import Beers from './components/Beers'
export default {
  name: 'App',
  components: {
    Beers
  },
  data () {
    return {
      title: 'Beers from Punk API'
        }
      }
}
</script>
