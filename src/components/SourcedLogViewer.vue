<!-- SourcedLogViewer component -->
<template>
    <log-viewer v-bind:object_name=" object_id " v-bind:logs=" logs "></log-viewer>
    <button @click=" startLogging ">Start</button>
    <button @click=" clearLog ">Clear Log</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogViewer from "log-vuer";
import { LogObjectContainerSource } from "log-object-processor";
import { SourceConfig } from "./SourceConfig";
import jQuery from "jquery";
export default defineComponent( {
    name: "SourcedLogViewer",
    components: { LogViewer },
    data () {
        return {
            log_count: 0,
            logObjectContainerSource: new LogObjectContainerSource(
                new SourceConfig( this.data_source_type, this.data_source_location, this.object_id )
            ),
            read_interval: 0,
            logs: [ { id: "1", timestamp: 100, message: "ready.", method: "No Source." } ]
        }; },
    methods: {
        startLogging () {
            setInterval( () => {
                this.logObjectContainerSource.refresh( this.object_id );
                this.logs = this.logObjectContainerSource.logObjectProcessor.getWrittenLogs();
                if ( this.log_count != this.logs.length ) {
                    jQuery( "#" + this.object_id ).animate(
                        { scrollTop: jQuery( "#" + this.object_id ).prop( "scrollHeight" ) * 2 }, 150 );
                    this.log_count = this.logs.length; }}, 1000 ); },
        async clearLog () {
            this.logObjectContainerSource.logObjectProcessor.clearLogs();
            this.logs = []; }},
    props: {
        data_source_type: { type: String, default: "url" },
        data_source_location: { type: String, default: "http://localhost:8080" },
        object_id: { type: String, default: "MessageManager_1616" }}
} );
</script>

<style scoped>
</style>
