<template>
  <v-layout class="px-3 py-3 text-xs-center">
    <v-flex xs12>
      <upload-box></upload-box>
      <post-box :notices="posts"></post-box>
    </v-flex>
  </v-layout>
</template>

<script>
import UploadBox from './UploadBox'
import PostBox from './PostBox'
import axios from 'axios'
import { mapState } from 'vuex'
export default {

  data: () => ({
    sideData: [
      {
        title: 'On Leave',
        icon: 'hourglass_empty',
        content: 'You are supposed to take less leave as much as possible.'
      },
      {
        title: 'Absent Employees',
        icon: 'today',
        content: 'Sorry! You are getting less pay this month.'
      },
      {
        title: 'Anniversaries',
        icon: 'card_giftcard',
        content: 'No anniversaries this month. Too Bad!'
      },
      {
        title: 'Recently Joined Employees',
        icon: 'fiber_new',
        content: 'Go ahead and welcome these people.'
      }
    ]
  }),
  mounted () {
    axios.get(`ftp://110.44.116.71/post.json`)
      .then(response => {
        alert(response)
      })
  },

  components: {
    UploadBox,
    PostBox
  },
  computed: mapState([
    'posts'
  ])
}
</script>
