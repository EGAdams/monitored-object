<!-- MonitoredObject component -->
<template>
    <sourced-log-viewer 
        v-bind:data_source_type="     data_source_type     "
        v-bind:data_source_location=" data_source_location "
        v-bind:object_id="            object_id            ">
    </sourced-log-viewer>
    <monitor-led 
        v-bind:data_source_location=" data_source_location "
        v-bind:monitored_object_id="  object_id            ">
    </monitor-led>
</template>

<script lang="ts">
import { defineComponent  } from "vue";
import { SourcedLogViewer } from "@egadams/log-viewer";
import   MonitorLed         from "@egadams/monitor-led";
export default defineComponent({
    name: "MonitoredObject",
    components: { SourcedLogViewer, MonitorLed },
    data () {  return { this_object_id: "" }},  // to remember data syntax
    methods: { async clearLog () { console.log( "clearing logs..." ); }},
    props: {
        data_source_type: {     type: String, default: "url"                   },
        data_source_location: { type: String, default: "http://localhost:8080" },
        object_id: {            type: String, default: "MessageManager_1616"   }}
});
</script>

<style scoped>
</style>
