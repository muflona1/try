// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

export function delay(ms: number) {
    return new Promise<void>(function (resolve) {
        setTimeout(resolve, ms);
    });
}
