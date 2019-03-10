import React from "react";
import { Flowpoint, Flowspace } from "flowpoints";

export default () => (
  <div>
    <h1>Using Flowpoint</h1>
    <Flowspace>
      <Flowpoint
        theme="indigo"
        variant="filled"
        key="point_a"
        outputs={["point_b"]}
        startPosition={{ x: 400, y: 100 }}
      >
        Install
      </Flowpoint>
      <Flowpoint
        theme="amber"
        variant="filled"
        key="point_b"
        outputs={["point_c"]}
        startPosition={{ x: 200, y: 200 }}
      >
        Customize
      </Flowpoint>
      <Flowpoint
        theme="purple"
        variant="filled"
        key="point_c"
        outputs={["point_d"]}
        startPosition={{ x: 400, y: 300 }}
      >
        Test
      </Flowpoint>
      <Flowpoint
        theme="lime"
        variant="filled"
        key="point_d"
        outputs={["point_a"]}
        startPosition={{ x: 600, y: 200 }}
      >
        Deploy
      </Flowpoint>
    </Flowspace>
  </div>
);
