<template>
  <div>
    <table class="custom-table">
      <thead>
      <tr>
        <th>序号</th>
        <th>名称</th>
        <th>原因</th>
        <th>QQ/VX/...</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in chooseForm()" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.why }}</td>
        <td style="width: 2em;">{{ item.style }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import mwpzdatajson from '../works_json/mw_pz.json'

export default {
  name: "WorkTable",
  props: {
    work_type: {
      type: String,
      required: true
    }
  },
  methods: {
    chooseForm() {
      switch (this.work_type) {
        case "mwpz":
          return this.mwpzdata
        default:
          return []
      }
    }
  },
  data() {
    return {
      mwpzdata: [],
    };
  },
  mounted() {
    this.mwpzdata = mwpzdatajson;
  }
}
</script>

<style scoped>
.custom-table {
  text-align: center;
}

.custom-table th, .custom-table td {
  padding-top: 1%;
  padding-bottom: 1%;
  height: 10px;
}
</style>
