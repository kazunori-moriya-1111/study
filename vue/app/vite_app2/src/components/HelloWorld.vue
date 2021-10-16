<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr>
    <div class="alert alert-light">
      <h3>Inner Slot</h3>
      <div class="alert alert-warnig h5">
        <!-- 名前付きslot以外の表示 -->
        <slot />
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <slot name="first"/>
        </li>
        <li class="list-group-item">
          <slot name="second"/>
        </li>
        <li class="list-group-item">
          <slot name="third"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      title: 'Slot',
      message: 'This is message.',
    }
  },
}
</script>

<style>
pre {
  font-size:16pt;
  line-height: 1.25;
}
div.out {
  padding: 0px;
  background-color: #eee;
  width: 300px;
  height: 200px;
}
div.mid {
  padding: 0px;
  background-color: #ddd;
  width: 200px;
  height: 170px;
}
div.in {
  padding: 0px;
  background-color: #ccc;
  width: 100px;
  height: 140px;
}
</style>