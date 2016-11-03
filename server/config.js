const AV = require('leanengine')

const config = {
    appId: '2Kx0qpgITFGLrk2PW9JYpNqq-gzGzoHsz',
    appKey: 'udksjm7Xp4fAWEfJETq73A5J'
}

AV.initialize(config.appId, config.appKey)
AV.Cloud.useMasterKey()

exports.AV = AV
