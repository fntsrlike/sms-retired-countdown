let inDate = new Date('2016-10-18')
let outDate = new Date('2017-10-03')
let now = Date.now()
let unit = 1000*3600*24

let already_days = Math.floor((now - inDate) / unit)
let retired_days = (outDate - now) / unit

new Vue({
    el: '#app',
    data: {
        already_days: already_days,
        retired_days: retired_days
    }
})