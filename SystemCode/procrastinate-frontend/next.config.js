module.exports = {
    output: "export",
    async rewrites() {
        return [
            {
            source: '/',
            destination: 'https://0929-116-15-175-85.ngrok-free.app'
            },
        ]
    },
}