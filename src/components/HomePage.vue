<template>
  <div>
    <div>
      <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
        <flag :iso="entry.flag" :squared="false" /> {{entry.title}}
      </button>
    </div>
    <h1>{{ $t('welcomeMsg') }}</h1>
    <label for="dropdown">Choose Travel Date </label>
    <select id="dropdown" v-model="selected">
      <option v-for="(cruise, index) in cruises" :value="index">{{formatDate(cruise.departureDate)}} -
        {{formatDate(cruise.arrivalDate)}} / {{toEuro(cruise.price)}}</option>
    </select>
    <CustomDate v-if="selected == ''" />
    <ul v-if="selected">
      <li>Departure Date: {{formatDate(singleFilteredItem.departureDate)}}</li>
      <li>Arrival Date: {{formatDate(singleFilteredItem.arrivalDate)}}</li>
      <li>Price: {{toEuro(singleFilteredItem.price)}}</li>
      <li v-html="singleFilteredItem.description"></li>
    </ul>
    <!-- <ul v-else-if="selected != ''" v-for="cruise in filterByDates">
      <li>Departure Date: {{formatDate(cruise.departureDate)}}</li>
      <li>Arrival Date: {{formatDate(cruise.arrivalDate)}}</li>
      <li>Price: {{toEuro(cruise.price)}}</li>
      <li v-html="cruise.description"></li>
    </ul> -->
  </div>
</template>

<script>
import CustomDate from "./CustomDate.vue"
import messages from "@/plugins/i18n.js"

export default {
  components: {
    CustomDate
  },
  name: 'HomePage',
  data() {
    return {
      selected: '',
      cruises: [],
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'de', language: 'de', title: 'Deutsch' }
      ]
    };
  },
  async created() {
    const res = await fetch('https://mocki.io/v1/185679b9-8ed1-4080-9070-4034502b218d')
    const response = await res.json()
    this.cruises = response.alternativeTravelDates
    // console.log(await response)
  },
  computed: {
    // filterByDates() {
    //   return this.cruises.filter(cruise => {
    //     return cruise.departureDate.indexOf(this.selected) > -1
    //   })
    // },
    singleFilteredItem() {
      const index = this.selected
      return this.cruises[index]
    }
  },
  methods: {
    toEuro(value) {
      const result = value.toLocaleString("de-DE", { minimumFractionDigits: 2 })
      const euro = `€${result}`
      return euro
    },
    formatDate(value) {
      const datePart = value.match(/\d+/g)
      // console.log(datePart)
      const year = datePart[0], month = datePart[1], day = datePart[2]
      return day + '.' + month + '.' + year
    },
    changeLocale(locale) {
      console.log(messages.locale)
      messages.locale = locale;
      
    }
  },

}
</script>

<style>
/* button {
  padding: 15px;
  border: 1px solid green;
  font-size: 18px;
  margin: 15px;
} */
</style>