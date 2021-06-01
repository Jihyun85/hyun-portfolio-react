import React from "react";
import profile from "../images/profile_1.jpg";
import Profile from "./Profile";
import Subtitle from "./Subtitle";

const About = () => (
  <article id="aboutBox" class="about">
    <Subtitle subtitle="소개" />

    <div class="about-content">
      <Profile className="about-profile" profile={profile} />
      <div>
        <dl class="description-list">
          <div class="description-item">
            <dt>이름</dt>
            <dd>안지현</dd>
          </div>
          <div class="description-item">
            <dt>이메일</dt>
            <dd>
              <a href="mailto:hyun.front.dev@gmail.com">
                hyun.front.dev@gmail.com
              </a>
            </dd>
          </div>
          <div class="description-item">
            <dt>교육</dt>
            <dd>부트캠프 항해99(2기)</dd>
          </div>
          <div class="description-item item-phrase">
            <dt>개발자가 된 이유</dt>
            <dd>
              (한국식 lorem ipsum) 국회나 그 위원회의 요구가 있을 때에는
              국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리
              또는 국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로
              하여금 출석·답변하게 할 수 있다. 공무원은 국민전체에 대한
              봉사자이며, 국민에 대하여 책임을 진다. 대통령의 임기가 만료되는
              때에는 임기만료 70일 내지 40일전에 후임자를 선거한다.
            </dd>
          </div>
        </dl>
        <button type="button" class="about-btn btn-pink">
          더 상세한 소개 보기
        </button>
      </div>
    </div>
  </article>
);

export default About;
