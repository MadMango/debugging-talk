A couple of new things here, first of all we have a very basic [`Dockerfile`](Dockerfile) and [`docker-compose.yaml`](docker-compose.yaml), these would allow us to run the app in production and debugging is not enabled there.

We have a separate set of [`Dockerfile.dev`](Dockerfile.dev) and [`debug-compose.yaml`](debug-compose.yaml) for local development and those will run the app with live reload and debugging enabled. We want to keep that separate from the production config for security reasons.

You can run that debug config with `docker-compose -f debug-compose.yaml up`.

The following config has been added to [`.vscode/launch.json`](.vscode/launch.json):

```
{
  "name": "Docker: Attach to Node",
  "type": "node",
  "request": "attach",
  "port": 9229,
  "address": "localhost",
  "localRoot": "${workspaceFolder}",
  "remoteRoot": "/usr/src/app"
}
```

It allows us to attach to the debug port exposed from the docker container and also, to map our files to where they reside in the container (`/usr/src/app`) so that our breakpoints map correctly.