import React from "react";
import logo from "../images/logo.svg";
import { MdMenu, MdLibraryBooks } from "react-icons/md";

const Gnb = () => (
  <div className="gnb">
    <div className="gnb-left">
      <button id="menuBtn" className="sm-only" type="button">
        <MdMenu className="iconBtn" aria-label="메뉴 열기 버튼" />
      </button>
      <h1 className="sm-hidden">
        <a href="/">
          <img className="logo" src={logo} alt="로고" />
        </a>
      </h1>
      <nav className="sm-hidden">
        <ul className="gnb-list">
          <li className="gnb-item">
            <button className="js-about-btn" type="button">
              소개
            </button>
          </li>
          <li className="gnb-item">
            <button className="js-skills-btn" type="button">
              기술역량
            </button>
          </li>
          <li className="gnb-item">
            <button className="js-work-btn" type="button">
              포트폴리오
            </button>
          </li>
          <li className="gnb-item">
            <button className="js-contact-btn" type="button">
              연락처
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <div className="gnb-center">
      <h1 className="sm-only">
        <a href="/">
          <img className="logo" src={logo} alt="로고" />
        </a>
      </h1>
    </div>

    <div className="gnb-right">
      <a href="./side.html" className="gnb-resume">
        <MdLibraryBooks className="iconBtn" aria-label="이력서 보러가기" />
        <p className="sm-hidden">이력서 보러가기</p>
      </a>
    </div>
  </div>
);

export default Gnb;
