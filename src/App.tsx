import React from "react";
import "./App.css";
import MyData from "./data.json";
import WiseCom from "./WiseCom";

const App: React.FC = () => {
  return (
    <div className="container">
      <header>
        <p>타이틀</p>
        <div>
          <ul>
            <li>
              <a href="#">소개</a>
            </li>
            <li>
              <a href="#st2">친구</a>
            </li>
            <li>
              <a href="#st3">위치</a>
            </li>
          </ul>
        </div>
      </header>
      <section id="st1">
        <p>tt</p>
        <img
          className="prophoto"
          src={process.env.PUBLIC_URL + "/img/점심리그 2.png"}
        />
        <div className="prodesc">
          <ul>
            {MyData.myprofile.map((pro) => (
              <li>
                {pro.name} : {pro.value}
              </li>
            ))}
          </ul>
        </div>
        <p className="proessay">
          안녕하세요, 저는 한세사이버보안고에 재학 중인 정하늘입니다. 저는
          네트워크 보안, 시스템 해킹, 포렌식 등의 분야에 관심이 많으며, 학교에서
          다양한 활동을 통해 실력을 쌓아가고 있습니다. 앞으로도 더 많은 경험을
          통해 성장하고자 합니다.
        </p>
        <WiseCom />
      </section>
      <section id="st2">
        <p></p>
        <div>
          <ul>
            {MyData.friend.map((fr) => (
              <li>
                <a href={fr.url}>{fr.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="st3">
        <p>위치</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.1432683726207!2d126.94942191121255!3d37.55168822486317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c989ec9569761%3A0x9eb569d21b56c211!2z7ZWc7IS47IKs7J2067KE67O07JWI6rOg65Ox7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1723610783022!5m2!1sko!2skr"
          width="500"
          height="450"
          loading="lazy"
        ></iframe>
      </section>
      <footer>
        <p>
          © 2024. <a href="#">Twins</a> All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
