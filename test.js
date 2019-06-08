var localDevices = require('local-devices')
function test(mac, completion) {
    localDevices().then(devices => { devices 
        devices.forEach(function(item) {
            console.log(item)
            if (item.mac == 'b8:27:eb:e0:c2:20') {
                completion(item.ip)
            }
        })
    })
}


test('b8:27:eb:e0:c2:20', function(ip){
    console.log('ip ' + ip);
})