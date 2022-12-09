import React from "react";
import { FaPenSquare } from "react-icons/fa";
import * as _ from "./Content.style";

const About = () => {
  return (
    <_.Contant>
      <_.Icon>
        <FaPenSquare />
      </_.Icon>
      <_.Title>About</_.Title>
      <_.Overview>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum
        similique quisquam officiis neque, cumque dignissimos architecto nisi
        totam sapiente eos et illum laborum atque vero ea perferendis
        consectetur veritatis.
      </_.Overview>
    </_.Contant>
  );
};

export default About;
