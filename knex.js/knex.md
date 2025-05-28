# Knex.js

It is a query builder in Node.js.Because we write SQL query using code and query builder will process it further. To migrate, we need knexfile.

`cmd` 
npx knex init 
npx knex migrate:make init --migrations-directory /migrations
 npx knex migrate:latest --knexfile knexfile.js



 https://javascript.plainenglish.io/use-sql-query-builder-knex-js-with-node-js-and-express-js-4373e8d3ed33 








 //------------------------------------------------------------------ problem with knex module ------------------------

 You're absolutely right — using **ES modules (`"type": "module"`)** in Node.js **with Knex** can cause friction, especially with `knexfile.js`, which defaults to CommonJS. But it's solvable with a few adjustments.

---

### ✅ The Problem

When using `"type": "module"` in `package.json`:

* **Default `knexfile.js` (CommonJS)** format won't work directly.
* Knex CLI expects CommonJS by default, **not ESM**.
* You get errors like:

  * `ERR_MODULE_NOT_FOUND`
  * Syntax errors on `module.exports` or `require`

---

### ✅ The Solution

Here’s how you can **make Knex work with ESM** (`"type": "module"`) properly:

---

### 🛠️ 1. Use `knexfile.mjs` (or `knexfile.ts` with `--esm`)

Rename your file to `knexfile.mjs` and use `export default`:

```js
// knexfile.mjs
export default {
  development: {
    client: 'pg',
    connection: {
      database: 'knex',
      user: 'postgres',
      password: 'shifa'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  }
};
```

> ✅ Use `export default` instead of `module.exports`.

---

### 🛠️ 2. Update your CLI commands to use `--esm`

Run Knex commands with `--esm` and point to your `knexfile.mjs`:

```bash
npx knex --knexfile knexfile.mjs --esm migrate:latest
```

You must always include `--esm` with the CLI when using `.mjs` or `.ts` with `"type": "module"`.

---

### ✅ 3. Use ESM Syntax Everywhere

Your internal project files should all use ESM:

```js
// db.js
import knex from 'knex';
import config from '../knexfile.mjs';

export const db = knex(config.development);
```

Make sure to import with `.mjs` extension or proper relative paths.

---

### 📝 If You Use TypeScript

If you use `knexfile.ts`:

* Compile with `ts-node`
* Add `--esm` flag
* Update your `package.json`:

```json
"type": "module",
"scripts": {
  "migrate": "knex --esm --knexfile knexfile.ts migrate:latest"
}
```

---

### 🔒 Summary

| Item                  | Solution                                  |
| --------------------- | ----------------------------------------- |
| CommonJS/ESM conflict | Rename to `knexfile.mjs`                  |
| Export syntax         | Use `export default`                      |
| CLI errors            | Always use `--esm` with `knex` CLI        |
| Imports               | Use `.mjs` or relative path with `import` |

---

Let me know if you want a working ESM template with Knex!
