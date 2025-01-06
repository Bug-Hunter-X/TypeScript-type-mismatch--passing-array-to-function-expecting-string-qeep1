# TypeScript Type Mismatch Bug

This repository demonstrates a subtle bug in TypeScript where type checking fails to catch a mismatch between an array argument and a function expecting a string. The bug manifests as a runtime error rather than a compile-time error.  This highlights the importance of thorough testing, even with statically-typed languages like TypeScript.

## Bug Description
The function `greeter` is defined to accept a string argument and return a greeting. However, the code passes an array to it, resulting in incorrect concatenation during runtime.  TypeScript should ideally flag this type mismatch during compilation.

## Reproduction Steps
1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Run the compiled JavaScript code.
4. Observe the unexpected output and runtime error.