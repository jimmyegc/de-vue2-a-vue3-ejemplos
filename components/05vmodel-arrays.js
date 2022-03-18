app.component('vmodel-arrays', {
    setup() {
        const frameworks = ref([])
        return { frameworks }
    },
    template: `
        <h2>v-model con arrays en Vue 3</h2>
        <input type="checkbox" id="vue" value="Vue" v-model="frameworks" >
        <label for="vuejs2">Vue</label>
        <input type="checkbox" id="laravel" value="Laravel" v-model="frameworks" >
        <label for="vuejs2">Laravel</label>
        <input type="checkbox" id="django" value="Django" v-model="frameworks" >
        <label for="vuejs2">Django</label>
        <p>Frameworks seleccionados: {{ frameworks }} </p>
    `
})