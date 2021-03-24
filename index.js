function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  Object.assign({}, object, { [key]: value })
  delete Object.assing[key]
  return Object.assign({}, object, { [key]: value })
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object
}
