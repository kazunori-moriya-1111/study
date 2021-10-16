<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr>
    <div class="form-group text-left">
      <label>Value:</label>
      <input type="number" v-model="val" class="form-control">
    </div>
    <table class="bg-white table mt-4">
      <tr><th>add:</th><td>{{ add }}</td></tr>
      <tr><th>sub:</th><td>{{ sub }}</td></tr>
      <tr><th>multiple:</th><td>{{ mult }}</td></tr>
      <tr><th>div:</th><td>{{ div }}</td></tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'Watchers',
      message: '値の監視',
      val: 0,
      add: 0,
      sub: 0,
      mult: 0,
      div: 0,
    }
  },
  watch: {
    val(newValue, oldValue) {
      console.log(oldValue + ' -> ' + newValue)
      this.val = newValue
      var val = parseInt(this.val)
      this.add = Math.floor(val + 2)
      this.sub = Math.floor(val - 2)
      this.mult = Math.floor(val * 2)
      this.div = Math.floor(val / 2)
    }
  },
  created() {
    this.val = 6
  }
}
</script>
