<template>
  <div>
    <v-flex elevation-1
            class="my-4"
            v-for="notice in notices"
            :key="notice.posted_by"
    >
      <v-flex class="white">
        <v-layout row wrap>
          <v-list>
            <v-flex><v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="notice.profile_picture">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title> <b class="f14"> {{notice.posted_by}} </b></v-list-tile-title>
              <v-list-tile-sub-title>
                <div class="f10">
                  {{notice.post_time}}
                  <v-icon class="mx-1 f12">public</v-icon>
                </div>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile></v-flex>
          </v-list>
          <v-spacer></v-spacer>
          <div class="mr-2">
            <v-menu left>
              <v-btn small fab flat slot="activator">
                <v-icon> arrow_drop_down </v-icon>
              </v-btn>
              <v-list class="py-0">
                <v-list-tile v-for="item in dropDownItems" :key="item.title">
                  <v-list-tile-title class="f14">
                    <v-icon class="f18 mr-1"> {{ item.icon}} </v-icon>
                    {{ item.title }}
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
        </v-layout>
        <v-layout class="px-3 pb-3" row wrap>
          <div class="f13">{{notice.notice}} </div>
        </v-layout>
          <v-layout>
            <v-flex xs6>
              <video-player class="vjs-custom-skin"
                  :options="playerOptions"
                  @ready="playerReadied">
              </video-player>
            </v-flex>
          </v-layout>
        <v-layout class="px-3 pb-3 mt-4" row wrap>
          <div class="grey--text f13">
          <v-icon light class='pr-1 f14'>thumb_up</v-icon>
            Like
          </div>
        </v-layout>
      </v-flex>
      <v-layout class="pa-0" row wrap>
        <v-flex v-if="notice.comments"
                v-for="comment in notice.comments"
                row-wrap
                xs12
                :key="comment.posted_by"
        >
          <v-list class="grey lighten-4">
            <v-layout row-wrap>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="comment.profile_picture">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <b class="f13"> {{comment.posted_by}} </b>
                    <b class='ml-1 caption f10'> {{comment.post_time}} </b>
                  </v-list-tile-title>
                  <div class="f13">{{ comment.comment}}</div>
                </v-list-tile-content>
              </v-list-tile>
              <v-spacer></v-spacer>
              <v-btn flat small fab><v-icon> delete </v-icon></v-btn>
            </v-layout>
          </v-list>
        </v-flex>
        <v-flex row-wrap xs12 class="white mx-3 my-3">
          <textarea placeholder='Post a comment' class='comment-box px-3 py-1' rows="1"> </textarea>
        </v-flex>
      </v-layout>
    </v-flex>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'IndividualNoticeBox',
  props: ['notices'],
  data: () => ({
    dropDownItems: [
      {title: 'Delete', icon: 'delete'},
      {title: 'Edit', icon: 'edit'}
    ],
    playerOptions: {
      height: '360',
      autoplay: false,
      muted: false,
      language: 'en',
      playbackRates: [0.7, 1.0, 1.5, 2.0],
      sources: [{
        type: "video/mp4",
        // mp4
        src: "http://vjs.zencdn.net/v/oceans.mp4",
        // webm
        // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
      }],
      poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg"
    }
  }),
  components: {
    videoPlayer
  },
  mounted() {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>

<style scoped>

  textarea.comment-box{
    width:100%;
    border-radius:30px;
  }

  .f18{
    font-size: 18px;
  }

 .f14{
    font-size: 14px;
  }

  .f13{
    font-size:13px;
  }

  .f12{
    font-size: 12px;
  }

  .f10{
    font-size: 10px !important;
  }

</style>
