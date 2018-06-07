export function getterName(namespace, path) {
  return `${namespace}__getter__${path.join('_')}`;
}

export function commitName(namespace, path) {
  return `${namespace}__committer__${path.join('_')}`;
}

export function actionName(namespace, path) {
  return `${namespace}__actor__${path.join('_')}`;
}

export function arrayPushCommitName(namespace, path) {
  return `${namespace}__committer__array__push__${path.join('_')}`;
}

export function arrayUnShiftCommitName(namespace, path) {
  return `${namespace}__committer__array__unshift__${path.join('_')}`;
}

export function arraySpliceCommitName(namespace, path) {
  return `${namespace}__committer__array__splice__${path.join('_')}`;
}

export function objectDeleteCommitName(namespace, path) {
  return `${namespace}__committer__object__delete__${path.join('_')}`;
}

export function getTarget(state, path) {
  if (!path.length) return state;
  let result = state;
  for (let i = 0; i < path.length; i++) {
    if (result[path[i]] === undefined) throw new Error(`miss path argument in [${path.join(',')}]`);
    result = result[path[i]];
  }
  return result;
}

export function setTarget(state, path, callback) {
  if (!path.length) throw new Error('miss path');
  let result = state;
  for (let i = 0; i < path.length; i++) {
    if (result[path[i]] === undefined) throw new Error(`miss path argument in [${path.join(',')}]`);
    if (path.length - 1 === i) {
      callback(result, path[i]);
    } else {
      result = result[path[i]];
    }
  }
}

export function parseModuleExpression(name) {
  const index = name.indexOf(':');
  if (index === -1) return {
    moduleName: null,
    expression: name.split('.')
  };
  
  return {
    moduleName: name.substring(0, index),
    expression: name.substring(index + 1).split('.')
  }
}