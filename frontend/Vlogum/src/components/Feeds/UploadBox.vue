<template>
  <v-flex elevation-1 xs10 offset-xs1>
    <v-card light style="box-shadow:none">
        <v-layout row wrap>
          <v-flex xs12>
            <v-flex xs12>
              <vue-clip class="pa-4" :options="options">
                <template slot="clip-uploader-action">
                  <div>
                    <div class="dz-message">
                      <v-icon class="display-4"> file_upload </v-icon>
                      <h2> Click or Drag and Drop files here upload </h2>
                    </div>
                  </div>
                </template>

                <template slot="clip-uploader-body" scope="props">
                  <div v-show="showFiles" v-for="file in props.files" :key="file">
                    <span class="blue--text headline">
                      <v-icon class="blue--text"> video_label</v-icon>
                      {{ file.name }} </span>
                  </div>
                </template>

              </vue-clip>
            </v-flex>
          </v-flex>
        </v-layout>
    </v-card>
    <v-progress-linear
      v-show="showProgress"
      v-bind:indeterminate="query"
      v-bind:query="true"
      v-model="value"
      v-bind:active="show"
      class="my-0"
    ></v-progress-linear>
    <v-flex class="px-1 py-0 grey lighten-4" xs12>
      <v-layout row wrap>
        <v-flex class="text-xs-right">
          <v-btn @click='queryAndIndeterminate()' color="light-blue darken-1 white--text">Merge</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    options: {
      url: 'https://up.uploadfiles.io/upload',
      paramName: 'file'
    },
    value: 0,
    query: false,
    show: true,
    interval: {},
    showProgress: false,
    showFiles: true
  }),
  methods: {
    queryAndIndeterminate () {
      this.query = true
      this.show = true
      this.showProgress = true
      setTimeout(function () {
        this.query = false
        this.show = false
        this.showProgress = false
        this.showFiles = false
      }.bind(this), 3000)
    }
  }
}
</script>

<style scoped>

  textarea.status-box{
    width:100%;
    height:100px;
    border:none;
  }

  .f15{
    font-size:15px !important;
  }

</style>
