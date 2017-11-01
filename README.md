## What is Typescript?
  - a statically typed superset of Javascript that compiles to plain JS.
  
  Here is the sample of snippet of code exerpted from the Typescript website video https://channel9.msdn.com/Events/Build/2017/B8088/


### On the terminal,
  - to create tsconfig.json
  
 ```sh
    $ tsc -init
```
  - to start compiling
   ```sh
    $ tsc -w
```

## When should we use Typescript
- When you have a large codebase, and more than one person works on the project, this can help you avoid a lot of common errors.
  This is because all the checking will be done by the compiler and therefore, a lot of trivial bugs are caught at a very early stage.

- When the team is already used to statically typed languages and don't want to go all-in on Javascript, thus it is a good alternative.
  Typescript was created by the same guy who made C# so its easy for the statically typed language to leverage to Typescript.
