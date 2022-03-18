app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})

app.component('vmodel', {
    setup() {
        const framework = ref('Vue 3')
        return { framework }
    },
    template: `
        <h2>Trabajando con v-model en Vue 3</h2>
        <input v-model="framework" v-focus />
        <p>El framework escogido es: {{ framework }}</p>
    `
})