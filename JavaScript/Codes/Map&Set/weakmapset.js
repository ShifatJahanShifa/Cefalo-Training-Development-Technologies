// const ob={ a: 4 }
// const mp=new WeakMap()
// mp.set(ob,'23')
// console.log(mp);

const secretData = new WeakMap();

function createUser(name) {
  const user = { name };
  secretData.set(user, { password: '123abc' });
  return user;
}

let user1 = createUser('Alice');

// later...
user1 = null; // `user1` is no longer referenced
// `secretData` entry is automatically removed (garbage collected!)
