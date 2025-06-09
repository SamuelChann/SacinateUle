function modifyBehaviorType(body) {
  try {
    let obj = JSON.parse(body);
	
	
    obj.isForceSubmit = 0;
    obj.leaveLimit = 0;
    obj.leaveLimitTime = 999999999;
    obj.openSafeKeyboard = 0;
    obj.screenshotMonitor = 0;
    obj.enableDeviceMonitor = 0;
    obj.optionOrderBreak = 0;
    obj.questionOrderBreak = 0;



    return JSON.stringify(obj);
  } catch (e) {
    return null;
  }
}

if (typeof $response !== 'undefined') {
  let newBody = modifyBehaviorType($response.body);
  if (newBody === null) {
    $done({ status: 599, body: '' });
  } else {
    $done({ body: newBody });
  }
} else {
  $done({});
}
