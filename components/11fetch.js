app.component('fetch', {
    setup() {
        const users = ref([])
        onMounted(async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            users.value = await response.json()
        })
        return { users }
    },
    template: `
        <h2>Fetch en Vue 3</h2>
        <ul v-if="users.length">
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
            </li>
        </ul>
        <p v-else>No hay usuarios</p>
    `
})