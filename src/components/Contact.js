import React from "react";
import Subtitle from "./Subtitle";

const Contact = () => (
  <section id="contactBox" className="contact">
    <Subtitle subtitle="연락처" />
    <div className="contact-content">
      <article className="contact-mine">
        <div className="contact-info">
          <p>
            아래 연락처나 폼을 통해 메시지를 보내주시면 <br />
            확인 후 회신드리겠습니다.
          </p>
        </div>
        <dl className="description-list contact-list">
          <div className="description-item">
            <dt>이메일</dt>
            <dd>
              <a href="mailto:hyun.front.dev@gmail.com">
                hyun.front.dev@gmail.com
              </a>
            </dd>
          </div>
          <div className="description-item">
            <dt>블로그</dt>
            <dd>
              <a href="https://velog.io/@hwiyu25">Be.log</a>
            </dd>
          </div>
          <div className="description-item">
            <dt>깃허브</dt>
            <dd>
              <a href="https://github.com/Jihyun85">
                https://github.com/Jihyun85
              </a>
            </dd>
          </div>
        </dl>
      </article>

      <article className="contact-company">
        <h3 className="contact-company-title sm-only">제안 보내기</h3>
        <form
          className="contact-form"
          method="POST"
          action="https://formspree.io/f/xbjqokvy"
        >
          <div className="contact-form-item">
            <label className="form-label" for="form-company">
              회사명
            </label>
            <input
              id="form-company"
              className="form-text"
              type="text"
              name="법인명 혹은 서비스명"
              placeholder="법인명이나 서비스명을 입력해주세요."
            />
          </div>
          <div className="contact-form-item">
            <label className="form-label" for="form-contact">
              연락처
            </label>
            <input
              id="form-contact"
              className="form-text"
              type="text"
              name="연락 가능한 이메일"
              placeholder="연락 가능한 이메일을 입력해주세요."
            />
          </div>
          <div className="contact-form-item">
            <label className="form-label" for="form-url">
              URL
            </label>
            <input
              id="form-url"
              className="form-text"
              type="text"
              name="회사 홈페이지 URL 혹은 공고의 URL"
              placeholder="(선택) 회사 홈페이지 URL이나 공고의 URL을 입력해주세요."
            />
          </div>
          <div className="contact-form-item contact-form-textarea">
            <label className="form-label" for="form-message">
              메시지
            </label>
            <textarea
              id="form-message"
              className="form-textarea"
              name="메시지"
              placeholder="자세한 내용을 적어주시면 회신드리겠습니다."
            ></textarea>
          </div>
          <button className="contact-btn btn-pink" type="submit">
            메시지 보내기
          </button>
        </form>
      </article>
    </div>
  </section>
);

export default Contact;
