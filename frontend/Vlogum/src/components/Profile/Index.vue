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
      </v-flex>

      <v-flex xs12>
       <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <br>
            <v-card>
              <v-flex fluid v-bind="{ [`grid-list-${size}`]: true }">
                <v-layout row wrap>
                  <v-flex
                    xs4
                    v-for="n in 9"
                    :key="n"
                  >
                    <v-card flat tile>
                      <v-card-media
                        :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                        height="150px"
                      >
                      </v-card-media>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-card>
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
    size: 'sm',
    items: [
      { text: 'Extra small (1px)', value: 'xs' },
      { text: 'Small (4px)', value: 'sm' },
      { text: 'Medium (8px)', value: 'md' },
      { text: 'Large (16px)', value: 'lg' },
      { text: 'Extra large (24px)', value: 'xl' }
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
