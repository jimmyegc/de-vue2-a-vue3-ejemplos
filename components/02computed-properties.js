
app.component('computed-properties', {
    setup() {
        const name = ref('Jimmy')
        const surname = ref('García')
        const fullName = computed( () => {
            return `${name.value} ${surname.value}`
        })
        return { name, surname, fullName }
    },
    template: `
        <h2>Computed properties en Vue 3</h2>
        <p>Nombre: {{ name }} | Apellido. {{ surname }}</p>
        <p>Nombre Completo: {{ fullName }}</p>
    `
})