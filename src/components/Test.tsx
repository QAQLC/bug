import { defineComponent } from "vue"
import Child from "./Child"
export default defineComponent({
    setup () {
        return () => <Child />
    }
})