# ks-ai-insert-table 🚀

> **Automatically generate, update, and organize Express.js routing files with safe, idempotent code generation and integrated environment validations.**

[![npm version](https://img.shields.io/npm/v/ks-ai-insert-table.svg?style=flat-square)](https://www.npmjs.com/package/ks-ai-insert-table)
[![License](https://img.shields.io/npm/l/ks-ai-insert-table.svg?style=flat-square)](LICENSE)

---

# 📖 Overview

`ks-ai-insert-table` is a lightweight developer utility and AST scaffold engine that automatically generates and updates Express.js routing files.

It safely inserts router imports, endpoint methods, version routes, and table routes while preventing duplicate code generation. Starting in version 5, it features a built-in pre-execution validation step powered by `ks-ai-insert-table-check` to safeguard your workspace against incorrect generation environments.

The project serves as one of the core building blocks of the **KeshavSoft API Generation Suite**, enabling CLI tools and VS Code extensions to scaffold Express APIs with minimal effort.

---

# 📂 Version History & Support

* **v1-v3**: Legacy implementations supporting dynamic router insertions and code modifications.
* **v4**: Introduction of positional arguments and enhanced error checking patterns.
* **v5 (Latest)**: Integrates `ks-ai-insert-table-check` to verify file environments before executing modifications, ensuring high safety boundaries.

---

# 🚀 Generation Flow

## 1. App.js Generator
Automatically updates **app.js** with imports and registrations.

## 2. Version Route Generator
Automatically organizes routes into version folders like `/v1` and `/v2` for scalability.

## 3. Table Route Generator
Creates Express routes based on your schema table name configurations.

## 4. Endpoint Generator
Generates Express endpoint methods (GET, POST, PUT, DELETE) in router files.

## 5. Integration Validator (New in v5)
Uses the `ks-ai-insert-table-check` module to verify target path readiness before any write or scaffolding operations take place.

---

# 📦 Installation

```bash
npm install ks-ai-insert-table
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