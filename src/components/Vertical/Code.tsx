import React from "react";
import { FaCode } from "react-icons/fa";
import * as _ from "./Content.style";

const Code = () => {
  return (
    <_.Contant>
      <_.Icon>
        <FaCode />
      </_.Icon>
      <_.Title>Code</_.Title>
      <_.Overview>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum
        similique quisquam officiis neque, cumque dignissimos architecto nisi
        totam sapiente eos et illum laborum atque vero ea perferendis
        consectetur veritatis.
      </_.Overview>
    </_.Contant>
  );
};

export default Code;
