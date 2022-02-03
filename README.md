This is the new bit:

```
{
  "type": "node",
  "request": "launch",
  "name": "Run AVA test",
  "program": "${workspaceFolder}/node_modules/ava/profile.js",
  "args": [
    "${file}",
    "--serial"
  ],
  "skipFiles": [
    "<node_internals>/**/*.js"
  ]
}
```

What this allows us to do is to open an ava test file, execute this configuration and stop on breakpoints.
