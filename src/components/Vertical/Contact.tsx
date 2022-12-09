import React from "react";
import { FaEnvelope } from "react-icons/fa";
import * as _ from "./Content.style";

const Contact = () => {
  return (
    <_.Contant>
      <_.Icon>
        <FaEnvelope />
      </_.Icon>
      <_.Title>Contact</_.Title>
      <_.Overview>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum
        similique quisquam officiis neque, cumque dignissimos architecto nisi
        totam sapiente eos et illum laborum atque vero ea perferendis
        consectetur veritatis.
      </_.Overview>
    </_.Contant>
  );
};

export default Contact;
