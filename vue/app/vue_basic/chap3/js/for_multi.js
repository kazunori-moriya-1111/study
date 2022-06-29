Vue.createApp({
  data() {
    return {
      songs:[
        {
          title: '赤とんぼ',
          lyrics: '夕焼け',
          composer: '山田'
        },
        {
          title: '工場の月',
          lyrics: '夏の花',
          composer: '滝'
        }
      ]
    }
  }
}).mount('#app');