const AV = require('leanengine')

const config = {
    appId: 'Bfw8DjNmL4FLoxqoz3vUlLGd-gzGzoHsz',
    appKey: '33hHJV3K3Am3vhOw5AghkoOG'
}

AV.init({
  appId: config.appId,
  appKey: config.appKey
});
AV.Cloud.useMasterKey()

exports.AV = AV
