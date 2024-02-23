import { defineComponent, type PropType } from "vue"

export default defineComponent({
    props: {
        msg: {
            type: Object as PropType<{ msg: string }>,
        }
    },
    setup () {
        return () => <div>child</div>
    }
})