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
export default {
  data: () => ({
    posts: [
      {
        posted_by: 'SomeCute Girl',
        profile_picture: 'https://randomuser.me/api/portraits/women/3.jpg',
        post_time: 'Just Now',
        notice: 'Hey Beautifull People!',
        comments: [
          { posted_by: 'Ugly Guy',
            profile_picture: 'https://randomuser.me/api/portraits/women/12.jpg',
            post_time: 'Just Now',
            comment: 'Hi Cute Girl'
          }
        ]
      },
      {
        posted_by: 'Adsfds Hsdfs',
        profile_picture: 'https://randomuser.me/api/portraits/women/4.jpg',
        post_time: 'Just Now',
        notice: 'sdfsdf fghgdh wfsdf dfgdf g sadsd f '
      },
      {
        posted_by: 'Ugly Guy',
        profile_picture: 'https://randomuser.me/api/portraits/women/12.jpg',
        post_time: 'Just Now',
        notice: 'This is a Notice'
      },
      {
        posted_by: 'gyAni KT Moh',
        profile_picture: 'https://randomuser.me/api/portraits/women/15.jpg',
        post_time: 'Just Now',
        notice: 'I am a don'
      }
    ],
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
  components: {
    UploadBox,
    PostBox
  }
}
</script>
