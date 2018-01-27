<template>
  <v-flex elevation-1 xs10 offset-xs1>
    <v-card light style="box-shadow:none">
        <v-layout row wrap>
          <v-flex xs12>
            <v-flex xs12>
              <v-text-field
                label="Share Something  "
                full-width
                multi-line
                hide-details
                style="height:100px"
              ></v-text-field>
            </v-flex>
          </v-flex>
        </v-layout>
    </v-card>
    <v-flex class="px-1 py-1" xs12>
      <v-layout row wrap>
        <v-flex>
          <div class="text-xs-left">
            <v-btn small fab class="ma-1 white"><v-icon class="f15">camera_alt</v-icon></v-btn>
          </div>
        </v-flex>
        <v-flex class="text-xs-right">
          <v-btn color="light-blue darken-1 white--text">Post</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-flex>
</template>

<script>
export default {
  data: () => ({})
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
