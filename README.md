## ahoy.

This repo shows a couple of different ways we can use debugging tools.

The main 'app' here is just a node server that returns some dummy data.

It's branch based experience and each branch contains as little distractions as possible, run `git branch -a` to see what's available, a little more explanation below.

`README` changes from branch to branch, this one gives an overview and the ones in branches go in a bit more detail about the changes

## branches explained:

* `master` - where this readme is, it is also just the app that you can run in debug mode and [inspect from chrome dev tools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27)
* `ide-config` - this includes a bit of config that allow us to debug from vscode directly, feel free to add jetbrains or atom configs if you wish.
* `excuses/*` - I can't use a debugger because \<insert excuse from the list here>
  * `typescript` - includes config to run a typescript app and run it in debug mode
  * `live-reload` - if you want typescript AND you want to attach to the app from vscode AND have the app reload every time you make an update AND you want to keep the debugger attached between restarts
  * `tests `- if you're worried that you can't debug when running tests - this example is using `ava` but it's also possible with `mocha`, `cucumber` and a bunch of others
  * `docker` - if you're running your app in docker. On windows you might need to use chokidar for it to work but I'm not a fan on docker on windows so won't go any deeper into it in this repo.