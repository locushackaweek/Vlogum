import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
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
        ],
        video: {
          height: '500',
          autoplay: false,
          muted: false,
          fluid: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            src: 'ftp://110.44.116.71/a.webm'
          }],
          poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'
        }
      },
      {
        posted_by: 'Adsfds Hsdfs',
        profile_picture: 'https://randomuser.me/api/portraits/women/4.jpg',
        post_time: 'Just Now',
        notice: 'sdfsdf fghgdh wfsdf dfgdf g sadsd f ',
        video: {
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
          poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-3.jpg'
        }
      }
    ]
  },
  mutations,
  actions
})
