<template>
  <div>
    product
  </div>
</template>

<script>
import {useCommon} from "~/store/index.js";

export default {
  name: 'Product Single',
  setup() {
      const layoutStore = useCommon();


    // definePageMeta({
    //   middleware: [
    //     function(to, from){
    //       console.log(to);
    //       if(to.name === 'l-id-p-product'){
    //         console.log("true");
    //       }
    //     }
    //   ]
    // })
  }
}
</script>