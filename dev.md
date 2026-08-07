# Developer Notes – ks-ai-insert-table

---

## 🎯 Purpose

This package serves two major roles in the API generation lifecycle:
1. **CLI Tool**: Invoked via `bin/cli.js` to scaffold table templates and routes.
2. **SDK Reference**: Imported programmatically by external tooling (such as the KeshavSoft VS Code extension `EndPointGen`).

---

## 🧩 Architecture

The CLI uses a dynamic versioning layout:
```text
CLI invocation
  └─► bin/cli.js 
        └─► bin/core/getLatestVersion.js (Scans for highest vX directory)
              └─► bin/core/loadRunner.js (Dynamically imports bin/vX/start.js)
                    └─► bin/vX/index.js (Executes insertion logic)
```

As of version 5, it includes safety boundary pre-checks:
* Before any template files are created or altered, `bin/v5/index.js` imports and runs `ks-ai-insert-table-check` on the target path.
* If the validation check fails (i.e. `routes.js` is not present in the target directory), execution terminates immediately to avoid corrupted scaffolding.

---

## 🔗 Related Ecosystem Projects

### 1. `ks-ai-insert-table-check`
https://github.com/keshavsoft/ks-ai-insert-table-check

The pre-check utility package that verifies if target directory paths contain correct routing file structures before any changes are attempted.

### 2. VS Code Extension (`EndPointGen`)
https://github.com/keshavsoft/EndPointGen

Real-world consumer of this SDK, providing developers a graphical user interface in VS Code to scaffold endpoint configurations.

---

## 🧠 Note

This package is actively run in production systems. Keep the dynamic loader structures (`getLatestVersion.js` and `loadRunner.js`) intact when adding subsequent versions (e.g. `v6`).