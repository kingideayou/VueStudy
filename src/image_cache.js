export default class ImageCacheDB {
  constructor (dbName) {
    this.LS = null
    this.dbName = dbName
    this.checkLS()
    this.init(dbName)
  }

  checkLS () {
    if (window && window.localStorage) {
        this.LS = window.localStorage
    } else {
        console.log('LocalStorage not found')
    }
  }

  init (dbName) {
    if (this.LS) {
      if (this.LS[name] && this.LS[name].length < 45959) {
          this.data = JSON.parse(this.LS[name])
      } else {
          this.data = {}
      }
    }
  }

  set (uri, data) {
      this.data[uri] = data
      if (this.LS) {
          this.LS[this.name] = JSON.stringify(this.data)
      }
    }

  get (uri) {
    if (this.data[uri]) {
        return this.data[uri]
    }
    return false
  }

}
