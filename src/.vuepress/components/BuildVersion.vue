<script>
import moment from "moment";
import versionJSON from "../utils/versionJSON.json";

export default {
    data() {
        return {
            compileTime: ''
        }
    },
    mounted() {
        this.compileTime = moment(versionJSON.compileTime).format('YY.MM.hhmm')
    }
}
</script>

<template>
    <div class="build-version">
        应用程序版本：{{ compileTime }}
    </div>
</template>

<style>
.build-version {
    border-radius: 5px;
    border: 2px var(--theme-color-dark) solid;
    padding: 2px;
    margin: -1px -2px 4px -2px;
    text-align: center;
    font-size: 15px;
    font-weight: bold
}
</style>