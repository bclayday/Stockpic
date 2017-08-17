var skillVC = require('skillvc');
skillVC.logger.setLevels({'all':'debug'});
var skillVCMain = skillVC.factory.createfromDirectory();

exports.handler = function(event, context) {
skillVCMain.handler(event, context);
}
