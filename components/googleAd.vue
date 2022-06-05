<template>
  <div>
    <template v-if="isDev">
      [ADSENSE PLACEHOLDER]
    </template>
    <template v-else>
     <!-- MPLD -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8627466046363756"
     data-ad-slot="8674878351"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
    </template>
  </div>
</template>

<script>

export default {
  head() {
    // let productionScripts = []
    if (!this.isDev) {
      return {
        productionScripts: [],
        scripts: [{ 
            hid: 'adsense', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8627466046363756', async: true, crossorigin: 'anonymous',
            },
          ]
      }
    }

    return { }
  },  
  data() {
    return {
       isDev: process.env.NODE_ENV !== 'production'
    }
  },
  mounted() {
    if (!this.isDev) {
      this.$nextTick(() => {
        try {
          // this is required for each ad slot (calling this once will only load 1 ad)
          (window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (error) {
          console.error(error)
        }
      })
    }
  },
  components: {

  }
}
</script>