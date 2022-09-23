<template>
  <ul>
    <li>Departure Date: {{currentDate()}}</li>
    <li>Arrival Date: {{inAWeek()}}</li>
    <li>Price: {{toEuro(price)}}</li>
    <li v-html="description"></li>

  </ul>
</template>

<script>
export default {
  data() {
    return {
      price: 213133,
      description: "<p>Lorem ipsum <a href=\"#\">dolor sit amet</a></p>"
    };
  },
  methods: {
    currentDate() {
      const current = new Date()
      const date = `${current.getDate()}.${current.getMonth() + 1}.${current.getFullYear()}`
      return date
    },
    inAWeek() {
      const current = new Date()
      const date = `${current.getDate() + 7}.${current.getMonth() + 1}.${current.getFullYear()}`
      return date
    },
    toEuro(value) {
      const result = value.toLocaleString("de-DE", { minimumFractionDigits: 2 })
      const euro = `€${result}`
      return euro
    
    }
  },

}

</script>