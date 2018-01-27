<template>
  <v-layout>
    <v-flex xs12 elevation-1 class="ma-3 white">
      <v-flex>
        <v-flex xs12>
          <div style='height:300px' class="cover-image" elevation-1></div>
            <v-avatar size="45px" style="margin-top:-20px" tile>
            <img style="width:120px;height:120px;border-radius:100%;z-index:1;border:3px solid white"
                 class="ma-2"
                 src="https://avatars0.githubusercontent.com/u/17315781?s=460&v=4"
            />
          </v-avatar>
          <v-flex> <br><br>
            <h1> Ishan Subedi </h1>
            <span class="subheading grey--text">Lorem Ipsom dolor sit amet amen. </span> <br>
            <v-btn small class="green" dark> Follow </v-btn>
            <v-btn small class="blue" dark> Message </v-btn>
          </v-flex>
        </v-flex>

        <v-layout wrap class="pa-4">
          <v-flex xs6 v-for="video in videos" :key="video.poster" class="px-2 py-2">
            <video-player class="vjs-custom-skin"
                :options="video"
                @ready="playerReadied">
            </video-player>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import VCardTitle from 'vuetify/src/components/VCard/VCardTitle'
export default {
  data: () => ({
    size: 'xs',
    items: [
      { text: 'Extra small (1px)', value: 'xs' },
      { text: 'Small (4px)', value: 'sm' },
      { text: 'Medium (8px)', value: 'md' },
      { text: 'Large (16px)', value: 'lg' },
      { text: 'Extra large (24px)', value: 'xl' }
    ],
    videos: [
      {
        height: '500',
        autoplay: false,
        muted: false,
        fluid: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'https://ftp.gnu.org/video/A_Digital_Media_Primer_For_Geeks-360p.webm'
        }],
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'
      },
      {
        height: '500',
        autoplay: false,
        muted: false,
        fluid: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L'
        }],
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-3.jpg'
      }
    ]
  }),
  components: {
    VCardTitle,
    videoPlayer
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
  .cover-image{
    color: #FFF;
    margin: 0;
    padding: 0;
    max-width: 2560px;
    width: 100%;
    height: 20%;
    overflow: hidden;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: block;
    z-index:0;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    background-image: url('https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.twitrcovers.com%2Fwp-content%2Fuploads%2F2013%2F10%2FNature-Grass-l.jpg&f=1');
  }
</style>
