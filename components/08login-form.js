app.component('login-form', {
    props: {
        email: {
            type: String,
            default: ''
        },
        password: {
            type: String,
            defaullt: ''
        }
    },
    template: `
        <h2>Formulario de login en Vue 3</h2>
        <input
            type="email"
            :value="email"
            @input="$emit('update:email', $event.target.value)"
        />
        <input
            type="password"
            :value="password"
            @input="$emit('update:password', $event.target.value)    "
        />  
    `
})

app.component('use-login-form', {
    setup() {
        const loginForm = reactive({
            email: '',
            password: ''
        })
        watch(loginForm, (lForm, oldForm) => {
            console.log(lForm.email)
            console.log(lForm.password)
        })
        return { loginForm }
    },
    template: `
        <login-form
            v-model: email="loginForm.email"
            v-model: password="loginForm.password"
        />
    `
})