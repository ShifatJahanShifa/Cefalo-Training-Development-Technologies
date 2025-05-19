Node.js supports ESM in two main ways. I mean i can use es modules in node.js in two ways. 

way: 1 

using `.mjs` file extension

way: 2

the files are .js extension but in the package.json file, type is set to module. `"type": "module"` 


> from gpt, a list of built-in modules

Node.js comes with a rich set of **built-in (core) modules** that you can use without installing anything via `npm`. These are native to Node.js and provide essential functionalities like working with file systems, networking, buffers, streams, and more.

Here are some of the **most commonly used built-in modules in Node.js**:

---

### 📂 **File System & Path**

| Module        | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| `fs`          | File system operations like reading, writing, updating, deleting files |
| `path`        | Utilities for working with file and directory paths                    |
| `fs/promises` | Promise-based version of `fs`                                          |

---

### 🌐 **Networking & HTTP**

| Module  | Description                                           |
| ------- | ----------------------------------------------------- |
| `http`  | Create web servers and handle HTTP requests/responses |
| `https` | Same as `http`, but supports SSL/TLS                  |
| `net`   | Lower-level TCP/IPC networking                        |
| `dns`   | DNS resolution (e.g., lookup IP addresses)            |
| `url`   | Parse and format URLs                                 |

---

### ⏱️ **Timers & Scheduling**

| Module    | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| `timers`  | Provides scheduling functions like `setTimeout`, `setInterval`, `setImmediate` |
| `process` | Provides information and control over the current Node.js process              |

---

### ⚙️ **Utilities & Tools**

| Module          | Description                                             |
| --------------- | ------------------------------------------------------- |
| `util`          | Utility functions (e.g., `promisify`, `inspect`)        |
| `events`        | Create and handle events using the EventEmitter pattern |
| `child_process` | Run subprocesses (spawn, exec, fork)                    |
| `os`            | Get information about the operating system              |
| `stream`        | Handle streaming data (read/write streams)              |
| `buffer`        | Work with binary data buffers                           |
| `console`       | Standard output like `console.log()`                    |
| `assert`        | Simple assertion testing tool                           |
| `readline`      | Read input from readable streams like the console       |

---

### 🛡️ **Security & Crypto**

| Module        | Description                                               |
| ------------- | --------------------------------------------------------- |
| `crypto`      | Perform cryptographic operations like hashing, encryption |
| `tls` / `ssl` | Implement secure TLS/SSL communication                    |
| `zlib`        | Compress or decompress files using gzip/deflate           |

---

### 📦 **Module & Package Handling**

| Module    | Description                                 |
| --------- | ------------------------------------------- |
| `module`  | Internal module handling                    |
| `vm`      | Run code within V8 Virtual Machine contexts |
| `require` | Used to include modules (CommonJS format)   |

---

You can use any of these modules by simply requiring them, for example:

```js
const fs = require('fs');
const path = require('path');
const http = require('http');
```

---

Let me know if you want examples or more details about any specific module.
