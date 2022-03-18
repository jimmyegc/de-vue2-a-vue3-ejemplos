app.component('refs', {
    setup() {
        const childRef = ref(null)
        const parentData = ref('Datos del componente padre')
        onMounted( () => {
            console.log(childRef.value.carBrand)
        })
        return { childRef }
    },
    template: `
        <h2>Refs en Vue 3</h2>
        <child ref="childRef"></child>        
    `
})