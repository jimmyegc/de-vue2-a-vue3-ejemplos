

app.component('child', {
    emits: ['showCarBrand'],
    setup(props, { emit }) {
        const carBrand = ref('Nissan')
        const emitShowCarBrand = () => {
            emit('showCarBrand', carBrand.value)
        }
        return { carBrand, emitShowCarBrand }
    },
    template: `
        <h2>Emitir eventos con Vue 3</h2>
        <u>{{ $parent.parentData }}</u>
        <p @click="$emit('showCarBrand', carBrand)">
            Emitir un evento al componente Parent desde la template
        </p>
        <p @click="emitShowCarBrand">
            Emitir un evento al componente Parent desde el setup
        </p>    
    `
})

app.component('parent', {
    setup() {
        const parentData = ref('Datos del componente padre')
        const eventReceived = (carBrand) => {
            console.log(carBrand)
        }
        return { parentData, eventReceived }
    },
    template: `
        <h2>Comunicación a través de eventos padre hijo en Vue 3</h2>
        <child @showCarBrand="eventReceived"></child>
    `
})