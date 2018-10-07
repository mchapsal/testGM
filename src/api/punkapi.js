import axios from 'axios';

export default {
  data() {
    return {
      beers: [],
      errors: [],
      loading:true
    }
  },
  mounted() {
    axios.get('https://api.punkapi.com/v2/beers?malt=extra_pale')
    .then(response => {
      this.beers = response.data
      this.loading=false
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
