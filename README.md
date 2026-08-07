# ks-ai-insert-table 🚀

> **Automatically scaffold table routers and insert route registrations into your Express.js `routes.js` file with safe, idempotent code injections.**

[![npm version](https://img.shields.io/npm/v/ks-ai-insert-table.svg?style=flat-square)](https://www.npmjs.com/package/ks-ai-insert-table)
[![License](https://img.shields.io/npm/l/ks-ai-insert-table.svg?style=flat-square)](LICENSE)

---

# 📖 Overview

`ks-ai-insert-table` is a lightweight developer utility and AST scaffold engine designed strictly to update Express.js routing files.

It targets the `fromRoutesJsEnd` structure, meaning it:
1. Copies a table's endpoint router template to a new subfolder in your workspace.
2. Injects import statements into your central `routes.js` file.
3. Injects corresponding `router.use()` declarations to mount the table's router.

Version 5 introduces a pre-execution validation gate powered by `ks-ai-insert-table-check` to verify that `routes.js` exists in the target path before executing any code changes.

The project is a core building block of the **KeshavSoft API Generation Suite**, enabling CLI generators and VS Code extensions to create database table endpoints programmatically with zero duplication risk.

---

# 📂 Version History & Support

* **v1-v3**: Legacy implementations supporting dynamic router insertions and code modifications.
* **v4**: Introduction of positional arguments and enhanced error checking patterns.
* **v5 (Latest)**: Integrates `ks-ai-insert-table-check` to verify file environments before executing modifications, ensuring high safety boundaries.

---

# 🚀 Generation Flow

## 1. Environment Pre-Check (v5+)
Runs `ks-ai-insert-table-check` against the target workspace directory to confirm a valid central `routes.js` file is present.

## 2. Copy Table Template
Copies table router template boilerplate code (`end-points.js`) to a new subdirectory matching the table name.

## 3. Inject Imports
Parses the target `routes.js` and injects import statements for the newly generated table router.

## 4. Register Route Usage
Safely appends `router.use("/tableName", routerFromTableName)` statements to register the route mount point in `routes.js`.

---

# 📦 Installation

```bash
npm install ks-ai-insert-table
```

---

# 💻 CLI Usage

```bash
npx ks-ai-insert-table <tableName> [toPath] [--alterArray]
```

---

# 🌐 Documentation

Complete documentation is available here:

**Documentation Portal**
https://keshavsoft.github.io/ks-ai-insert-table/

---

# ❤️ Maintainer

Developed and maintained by **KeshavSoft**

GitHub: [keshavsoft](https://github.com/keshavsoft)

---

# 📄 License

MIT License