if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(registration => {
        console.log('SW registered')
    })
    .catch(err => {
        console.log(err)
    })
}















