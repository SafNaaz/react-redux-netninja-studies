import React from "react";
import Rainbow from "../hoc/Rainbow";

function About() {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        temporibus dicta quam, ab quibusdam voluptas beatae dolor veniam maiores
        necessitatibus placeat ratione autem laboriosam, iste aliquam culpa
        voluptatem. Iusto, velit.
      </p>
    </div>
  );
}

export default Rainbow(About);
