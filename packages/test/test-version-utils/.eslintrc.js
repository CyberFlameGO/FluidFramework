/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = {
    "extends": [
        "@fluidframework/eslint-config-fluid"
    ],
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": "off", // requires strictNullChecks=true in tsconfig
    },
    "parserOptions": {
        "project": ["./tsconfig.json", "./src/test/tsconfig.json"]
    }
}
