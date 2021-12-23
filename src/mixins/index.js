export const utils = {
    data: () => ({
        tokenStorageKey: 'token'
    }),
    computed: {
        isMobile() {
            return this.$vuetify.breakpoint.xsOnly;
        }
    },
    methods: {
        getToken() {
            let token = localStorage.getItem(this.tokenStorageKey)
            return token ? token : 0
        },
        async saveToken(token) {
            // console.log()
            await localStorage.setItem(this.tokenStorageKey, token)
        }
    }
}
