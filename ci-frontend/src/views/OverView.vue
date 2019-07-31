<template>
  <div>
    <el-row>
      <el-col class="token-container" :span="8" :offset="8">
        <el-form>
          <el-input
            placeholder="请输入 Token"
            v-model="editToken"
            show-password
          >
            <template slot="prepend">
              <i v-if="token === ''" class="el-icon-warning color-warning"></i>
              <i v-else class="el-icon-success color-success"></i>
            </template>
            <template slot="append">
              <el-button v-if="token === ''" @click="updateToken"
                >Save</el-button
              >
              <el-button v-else @click="updateToken">Change</el-button>
            </template>
          </el-input>
        </el-form>
      </el-col>
    </el-row>
    <div class="overview-container"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OverView",
  data: function() {
    return {
      editToken: ""
    };
  },
  computed: {
    ...mapGetters(["token"])
  },
  methods: {
    updateToken() {
      this.$store.dispatch({
        type: "updateToken",
        token: this.editToken
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.token-container {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
