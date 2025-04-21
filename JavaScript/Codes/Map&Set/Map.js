// cache example : where key is object

function process(obj) {
    // do expensive work here
    console.log('here i was');
    
    return JSON.stringify(obj); // pretend this is expensive
  }

const cache = new Map();

function cachedProcess(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  const result = process(obj);
  cache.set(obj, result);
  return result;
}

const obj1 = { x: 10 };
const obj2 = { x: 10 }; // same content, different reference

cachedProcess(obj1); // processed
cachedProcess(obj2); // processed again, because ref is different
console.log(cachedProcess(obj1))
console.log(cachedProcess(obj2))