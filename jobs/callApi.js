const request = require('request')
const config = require('../config/requestParams/index')
const databaseHelper = require('../config/database/index')
module.exports = {
 callApi : () => {
    request.post('https://www.redbus.in/search/SearchResults?fromCity='+config.fromCity+'&toCity='+config.toCity+'&src='+config.src+'&dst='+config.dst+'&DOJ='+config.DOJ+'&meta=true', {
        json: {
            "headers": { "Content-Type": "application/json" }        }
      }, (error, res, body) => {
        if (error) {
          console.error(error)
          return
        }
        databaseHelper.saveResponse(body)
      })
  }
}