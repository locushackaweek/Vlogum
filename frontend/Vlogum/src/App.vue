<template>
  <v-app class="grey lighten-4 text-xs-center" id="">
    <v-navigation-drawer
        disable-route-watcher
        fixed
        v-model="drawerRight"
        right
        app
        temporary
      >
          <v-list dense>
          </v-list>
      </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      clipped-right
      fixed
      class="nav"
      height="54"
    >
      <v-toolbar-title>Feeds</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          placeholder="Search..."
          single-line
          append-icon="search"
          :append-icon-cb="() => {}"
          class="white--text"
          hide-details
        ></v-text-field>
      </v-layout>
      <v-spacer></v-spacer>

       <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
         <v-btn router to="/login" icon>
          <v-icon>perm_identity</v-icon>
        </v-btn>
        <v-btn @click.stop="drawerRight = !drawerRight" icon>
          <v-icon>notifications</v-icon>
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
      <v-container class="pa-0" fill-height flex align-center justify-center>
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
          { text: 'New Momory' }
        ],
        model: false
      }
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
    background: url('./assets/Images/avatar-bg.jpeg');
    background-size: cover;
  }

  .f12{
    font-size:12px;
  }
  .f13{
    font-size:18px;
  }

</style>
