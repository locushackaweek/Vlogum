<template>
  <v-app class="grey lighten-4 text-xs-center" id="">
    <v-navigation-drawer
        disable-route-watcher
        fixed
        v-model="drawerRight"
        right
        app
        temporary
        width="350"
      >
        <v-list three-line>
          <template v-for="item in notItems">
            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="item.title" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>

    <v-toolbar
          color="blue darken-3"
          dark
          app
          clipped-left
          fixed
        >
          <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <span class="hidden-xs-only">Vlogum</span>
          </v-toolbar-title>
          <v-text-field
            light
            solo
            prepend-icon="search"
            placeholder="Search"
            style="max-width: 500px; min-width: 128px"
          ></v-text-field>
          <div class="d-flex align-center" style="margin-left: auto">
            <v-btn @click.stop="drawerRight = !drawerRight" icon>
              <v-icon>notifications</v-icon>
            </v-btn>
            <v-btn icon large router to="/vlogs">
              <v-avatar size="45px" tile>
                <img style="width:45px;height:45px;border-radius:100%"
                     class="ma-2"
                     src="https://avatars0.githubusercontent.com/u/17315781?s=460&v=4"
                />
              </v-avatar>
            </v-btn>
          </div>
    </v-toolbar>

    <div>
    <v-navigation-drawer
      fixed
      light
      clipped
      :stateless="left"
      app
      width="250"
      mini-variant.sync="false"
      v-model='drawer'
    >
      <v-list dense style="padding-top:0px">
        <v-list-tile class="avatar-holder" avatar>
          <v-list-tile-avatar class="text-xs-left">
            <img style="width:60px;height:60px" src="https://avatars0.githubusercontent.com/u/17315781?s=460&v=4" />
          </v-list-tile-avatar>
          <v-spacer></v-spacer>
          <v-list-tile-content xs6>
              <v-flex class="white--text">
                <span class="body-2"><b>Ishan Subedi</b></span><br>
                <span  class="caption">Software Engineer</span><br>
              </v-flex>
          </v-list-tile-content>
        </v-list-tile>
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" :key="item.text" no-action>
            <v-list-tile slot="item">
              <v-list-tile-action>
                <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>

            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              router :to="child.href"
            >
              <div style="margin-left:55px;">
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </div>
            </v-list-tile>
          </v-list-group>
          <v-list-tile exact router :to="item.href" :key="item.text" v-else>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    </div>
    <v-content>
      <v-container class="pa-0 grey lighten-3" fill-height flex align-center justify-center>
        <router-view/>
      </v-container>
    </v-content>
</v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'app',
  data: () => ({
    drawerRight: false,
    drawer: true,
    right: false,
    left: null,
    items: [
      {
        icon: 'fa-bullhorn',
        'icon-alt': 'fa-bullhorn',
        text: 'Feeds',
        model: false,
        href: '/feeds'
      },
      {
        icon: 'fa-bullhorn',
        'icon-alt': 'fa-bullhorn',
        text: 'My Vlogs',
        model: false,
        href: '/vlogs'
      },
      {
        icon: 'fa-building',
        'icon-alt': 'fa-building',
        text: 'Memories',
        children: [
          { text: 'My Memories', href: '' },
          { text: 'New Memory' }
        ],
        model: false
      }
    ],
    notItems: [
      { header: 'Today' },
      { avatar: 'https://randomuser.me/api/portraits/men/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
      { divider: true, inset: true },
      { avatar: 'https://randomuser.me/api/portraits/men/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend." },
      { divider: true, inset: true },
      { avatar: 'https://randomuser.me/api/portraits/women/3.jpg', title: 'Oui oui', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?" },
      { divider: true, inset: true },
      { avatar: 'https://randomuser.me/api/portraits/women/2.jpg', title: 'Birthday gift', subtitle: "<span class='grey--text text--darken-2'>Trevor Hansen</span> — Have any ideas about what we should get Heidi for her birthday?" },
      { divider: true, inset: true },
      { avatar: 'https://randomuser.me/api/portraits/men/5.jpg', title: 'Recipe to try', subtitle: "<span class='grey--text text--darken-2'>Britta Holt</span> — We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
    ]

  }),
  props: {
    source: String
  },
  computed: mapState([
    'miniDrawer'
  ]),
  methods: {
    ...mapMutations([
      'showFulDrawer'
    ]),
    test () {
      alert('aa')
    }
  }
}
</script>

<style>
  .nav{
  }
  #inspire{
    height:auto;
  }

  .avatar-holder{
    width:100%;
    border-radius:0;
    padding:20px 0px;
    background: url('http://demo.geekslabs.com/materialize/v2.3/layout03/images/user-profile-bg.jpg');
    background-size: cover;
  }

  .f12{
    font-size:12px;
  }
  .f13{
    font-size:18px;
  }

</style>
