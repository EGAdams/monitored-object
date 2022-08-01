<!-- SourcedLogViewer component -->
<template>
    <sourced-log-viewer 
        data_source_type=     this.data_source_type
        data_source_location= this.data_source_location
        object_id=            this.object_id>
    </sourced-log-viewer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SourcedLogViewer from "@egadams/log-viewer";
export default defineComponent( {
    name: "SourcedLogViewer",
    components: { SourcedLogViewer },
    data () {
        return {
            logs: [ { id: "1", timestamp: 100, message: "ready.", method: "No Source." } ]
        }; },
    methods: { async clearLog () { this.logs = []; }},
    props: {
        data_source_type: { type: String, default: "url" },
        data_source_location: { type: String, default: "http://localhost:8080" },
        object_id: { type: String, default: "MessageManager_1616" }}
} );
</script>

<style scoped>
</style>
