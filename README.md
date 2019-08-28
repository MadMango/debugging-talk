## `package.json`:

```
start:watch:debug": "nodemon --inspect ./bin/www
```

## `.vscode/launch.json`:
```
{
  "name": "Attach to Process",
  "type": "node",
  "request": "attach",
  "port": 9229,
  "restart": true
}
```

As simple as it gets, the script in package.json runs node (well nodemon, cause we want live reload) with `--inspect` flag and the vscode config will allow us to a debugger attach to it. It will also reattach every time we make changes and the app restarts.