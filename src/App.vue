<template>
    <div id="log_app">
    <monitored-object
        data_source_type=     "url"
        data_source_location= "http://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php"
        object_id=            "MessageManager_1646">
    </monitored-object>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MonitoredObject from "./components/MonitoredObject.vue";

export default defineComponent({
  name: "ServeDev",
  components: { MonitoredObject },
  data() {
    return {
      test_object_name: "monitored-object",
      logs: [],
    };
  },
  props: { config: Object }
});
</script>
