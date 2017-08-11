var path = require("path")
var Cucumber = require('cucumber')
var JsonFormatter = Cucumber.Listener.JsonFormatter()
var fs = require('fs')

module.exports = function JsonOutputHook () {
  JsonFormatter.log = function (resultString) {
    const jsonFileLocation = path.join(__dirname, './tests_result.json')

    if (fs.existsSync(jsonFileLocation)) {
      const allResults = JSON.parse(fs.readFileSync(jsonFileLocation).toString())
      allResults.push(JSON.parse(resultString)[0])
      fs.writeFileSync(jsonFileLocation, JSON.stringify(allResults))
    } else {
      fs.writeFileSync(jsonFileLocation, resultString)
    }
  }
  
  this.registerListener(JsonFormatter)
  
}

