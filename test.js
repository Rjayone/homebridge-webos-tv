var localDevices = require('local-devices')
localDevices().then(devices => { devices 
    devices.forEach(function(item) {
        if (item.mac == 'b8:27:eb:e0:c2:20') {
            console.log(item)
        }
    })
})