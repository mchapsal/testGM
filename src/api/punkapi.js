import axios from 'axios';

export default {
  data() {
    return {
      beers: [],
      errors: [],
      pagination: {},
      loading:true,
      switchDegree:true
    }
  },
  mounted() {
    axios.get('https://api.punkapi.com/v2/beers?malt=extra_pale')
    .then(response => {
      this.beers = response.data
      this.loading=false
      this.switchDegree=true
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  computed: {
    filteredItems() {
      return this.beers.filter((i) => {
        try{
          return !this.switchDegree || Number(i.abv)>7
        } catch(err){return false}
      })
    },
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },
  watch: {
    filteredItems () {
      this.$nextTick(() => {
        this.pagination.totalItems = this.filteredItems.length
      })
    }
  }

}
