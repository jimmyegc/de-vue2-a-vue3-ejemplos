

app.component('hola-mundo', {
    setup() {
        const message = ref('Hola mundo!')
        return { message }
    },
    template: `
        <h2>Componente Hola mundo en Vue 3</h2>
        <p>{{ message }}</p>
    `
});