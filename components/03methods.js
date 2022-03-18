app.component('methods', {
    setup() {
        const name = ref('Jimmy')
        const surname = ref('García')
        const fullName = computed( () => {
            return `${name.value} ${surname.value}`
        })
        const helloUser = () => {
            alert(`hola ${fullName.value}`)
        }
        return { helloUser }
    },
    template: `
        <h2>Ejecutar Metodos con Vue 3</h2>
        <p @click="helloUser">Pulsa aquí</p>
    `
})