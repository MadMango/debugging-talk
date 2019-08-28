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

What this allows us to do is to open an ava test file, execute this configuration and stop on breakpoints. You actually need to have a test file open for this to work, it will always debug the one you're focused on.

There is a gotcha with breakpoints in tests though - support varies between testing frameworks and operating systems, hence the `debugger` statement in the ava test file, it's more reliable.

Also, for some odd reason you have to run an ava test at least once before you're able to debug it, at least for me this was the case.