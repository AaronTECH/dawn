/**
 * Copyright (c) 2016-present Alibaba Group Holding Limited.
 * @license MIT found in the LICENSE file at https://github.com/alibaba/dawn/blob/master/LICENSE
 * @author DawnTeam
 */

import * as npm from "npm";

console.log(
  npm.commands.install(["chalk", "--no-save"], () => {
    console.log("finsish");
  }),
);
