<template>
  <div class="container">
    <audio
      :src="url"
      autoplay
      controls
      loop
      @ended="nextsong()"
    ></audio>
  </div>
</template>

<script>
export default {
  name: 'player',
  data() {
    return {
      url: 'http://m8.music.126.net/20210531232533/32c1bef95c4b4158ab6177806aa7e0c6/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/4026464288/dab9/d9d5/873a/b5764e156f1180c339c5e70597a688b0.mp3',
    };
  },
  methods: {
    nextsong() {
      this.url = 'src/assets/music.mp3';
    },
  },
  components: {

  },
};
</script>

<style lang="less" scoped>

</style>
