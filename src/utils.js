import Vue from 'vue';
export function formatExpressionToArray(str) {
  const temp = str.replace(/\[['"]/g, '{').replace(/['"]\]/g, '}');
  const result = [];
  let s = '', inExpression = false;
  for (let i = 0, j = temp.length; i < j; i++) {
    const char = temp.charAt(i);
    switch (char) {
      case '.':
        if (inExpression) {
          s += char;
        } else {
          if (s) result.push(s);
          s = '';
        }
        break;
      case '}':
        if (s) result.push(s);
        s = '';
        inExpression = false;
        break;
      case '{':
        if (s) result.push(s);
        s = '';
        inExpression = true;
        break;
      default:
        s += char;
    }
  }
  if (s) result.push(s);
  return result;
}

export function getValueFromExpressionArray(object, expressions) {
  let result = object;
  for (let i = 0, j = expressions.length; i < j; i++) {
    try{
      result = result[expressions[i]];
    } catch(e) {
      return;
    }
  }
  return result;
}

export function setValueFromExpressionArray(object, expressions, value) {
  if (expressions.length) {
    let result = object;
    for (let i = 0, j = expressions.length; i < j; i++) {
      const expression = expressions[i];
      if (i === j - 1) {
        Vue.set(result, expression, value);
      } else {
        if (result[expression] === undefined) {
          Vue.set(result, expression, {});
        }
        result = result[expression];
      }
    }
  }
}

export function setArrayValueFromExpressionArray(object, expressions, method, args) {
  if (expressions.length) {
    let result = object;
    for (let i = 0, j = expressions.length; i < j; i++) {
      const expression = expressions[i];
      if (i === j - 1) {
        if (Array.isArray(result[expression])) {
          switch (method) {
            case 'push': result[expression].push(...args); break;
            case 'pop': result[expression].pop(); break;
            case 'unshift': result[expression].unshift(...args); break;
            case 'shift': result[expression].shift(); break;
            case 'splice': result[expression].splice(...args); break;
            case 'reverse': result[expression].reverse(); break;
            case 'sort': result[expression].sort(...args); break;
            default:
              const methodName = Array.prototype[method];
              if (methodName) {
                methodName.call(result[expression], ...args);
              }
          }
        }
      } else {
        if (result[expression] === undefined) {
          Vue.set(result, expression, {});
        }
        result = result[expression];
      }
    }
  }
}

export function defineReactive(object, name, target) {
  Object.defineProperty(object, name, {
    get() {
      return target;
    }
  })
}