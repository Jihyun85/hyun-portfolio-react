import React from "react";

const Greeting = () => (
  <section className="greeting" aria-label="인사말">
    <h2 className="visually-hidden">인사말</h2>
    <div className="greeting-text">
      <p>안녕하세요,</p>
      <p>프론트엔드 개발자 안지현입니다.</p>
    </div>
  </section>
);

export default Greeting;
