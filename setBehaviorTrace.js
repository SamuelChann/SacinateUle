function modifyBehaviorType(body) {
  try {
    let obj = JSON.parse(body);
	
	
    if (obj.behaviorType !== 1 && obj.behaviorType !== 4) {
      obj.behaviorType = 9999999999;
    }
    obj.isForceSubmit = 0;
    



    return JSON.stringify(obj);
  } catch (e) {
    return null;
  }
}

if (typeof $request !== 'undefined') {
  let newBody = modifyBehaviorType($request.body);
  if (newBody === null) {
    // Surge 响应 drop：status 599 或直接不响应
    $done({ status: 599, body: '' });
  } else {
    $done({ body: newBody });
  }
} else {
  $done({});
}
