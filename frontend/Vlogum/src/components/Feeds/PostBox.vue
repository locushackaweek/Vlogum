<template>
  <div>
    <v-flex elevation-1
            class="my-5"
            v-for="notice in notices"
            :key="notice.posted_by"
            xs8 offset-xs2
            width="853"
    >
      <v-flex  class="white">
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
        <v-layout>
          <v-flex xs12>
            <video-player class="vjs-custom-skin"
                :options="notice.video"
                @ready="playerReadied">
            </video-player>
          </v-flex>
        </v-layout>



        <v-layout class="px-3 pb-3 mt-2" row wrap>
          <div class="blue--text">
            <v-btn @click="isBlue = !isBlue"  flat icon class="pa-0 ma-0 mr-0">
              <v-icon light :class="['pr-1 display-1', { 'blue--text': isBlue }]">star</v-icon>
            </v-btn>
          </div>
          <v-spacer></v-spacer>

          <v-spacer></v-spacer>
          <div class="blue--text">
            <v-btn @click="comments = !comments"  flat icon class="pa-0 ma-0 mr-0">
              <v-icon light class="'pr-1 display-1">comment</v-icon>
            </v-btn>
          </div>
        </v-layout>
      </v-flex>
      <v-layout class="pa-0" row wrap v-if="comments">
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
              <v-btn flat small fab><v-icon class="grey--text"> delete </v-icon></v-btn>
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
    isBlue: false,
    comments: false
  }),
  components: {
    videoPlayer
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    playerReadied (player) {
      console.log('the player is readied', player)
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

  .rounded{
    border-radius: 10px;
  }

</style>
