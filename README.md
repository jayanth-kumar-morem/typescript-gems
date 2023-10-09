# Chapter 1 - Hello World

Welcome to the first chapter of our TypeScript journey! In this chapter, we'll set up a basic TypeScript project and write our first TypeScript program.

## Setting Up

Before we dive into the code, let's set up our TypeScript environment:

1. **Initialize a new npm project**:
   ```bash
   npm init -y
   ```

2. **Install TypeScript**:
   ```bash
   npm i typescript
   ```

3. **Initialize a TypeScript configuration file**:
   This command sets up a TypeScript project with a source directory (`src`) and a compilation output directory (`lib`).
   ```bash
   npx tsc --init --rootdir src --outdir lib
   ```

4. **Compile and Watch for Changes**:
   This command will watch for any changes in your TypeScript files and compile them automatically.
   ```bash
   npx tsc --watch
   ```

5. **Run the Compiled JavaScript**:
   After compiling, you can run the generated JavaScript file.
   ```bash
   node lib/1.init.js
   ```
