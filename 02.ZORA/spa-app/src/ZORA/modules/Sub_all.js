// 상세페이지 컴포넌트 - Sub_all.jsx
import "../css/subitem.css";
import "../css/subnext.css";
import "../css/nextChco.css";
import SubItem_data from "../data/SubItem_data";
import SubNext_data from "../data/SubNext_data";
import Bag_data from "../data/Bag_data";
import DomeSlide from "./DomeSlide";

import $ from "jquery";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { chocobreak as bindChocoDome } from "./ChocoDomeCon";

// 수량 인풋 컨트롤
function inputclick(params) {
  const sumInput = $(params);
  $(params).parent().find("span").click(function () {
    const altbtn = $(this).attr("alt");
    let v = Number(sumInput.val());
    if (altbtn === "add") sumInput.val(++v);
    else {
      v = Math.max(1, v - 1);
      sumInput.val(v);
    }
  });
  sumInput.keyup(function () {
    const txt = sumInput.val();
    if (txt === "") return;
    if (isNaN(txt) || txt < 1 || String(txt).includes(".")) sumInput.val(1);
    else if (txt >= 100) alert("Please call Me!🙏");
  });
}

// --- #subnext 루트에 '위임'으로 한 번만 바인딩(신규 DOM 자동 대응) ---
function delegateNextChoco() {
  const root = document.querySelector("#subnext");
  if (!root) return () => {};

  const findWrap = (t) =>
    t instanceof Element ? t.closest(".subnext-img") : null;

  const onOver = (e) => {
    // 마우스만 hover 적용
    if (e.pointerType && e.pointerType !== "mouse") return;
    const wrap = findWrap(e.target);
    if (wrap) wrap.classList.add("is-active");
  };
  const onOut = (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const wrap = findWrap(e.target);
    if (wrap) wrap.classList.remove("is-active");
  };
  const onClick = (e) => {
    // 터치 환경은 탭으로 토글
    if (window.matchMedia("(hover: none)").matches) {
      const wrap = findWrap(e.target);
      if (wrap) wrap.classList.toggle("is-active");
    }
  };

  root.addEventListener("pointerover", onOver);
  root.addEventListener("pointerout", onOut);
  root.addEventListener("click", onClick);

  return () => {
    root.removeEventListener("pointerover", onOver);
    root.removeEventListener("pointerout", onOut);
    root.removeEventListener("click", onClick);
  };
}

function SubAll(props) {
  function addCart_data() {
    const org = JSON.parse(localStorage.getItem("cart")) || [];
    const selidx = Number(SubItem_data[props.num].idx);
    const inputNum = Number($(".subface-con .number-btn__input").val());
    const seldt = Bag_data.find((v) => Number(v.idx) === selidx);
    if (!seldt) return;

    const exist = org.find((it) => it.idx === selidx);
    if (exist) exist.num = Number(exist.num) + inputNum;
    else
      org.push({
        idx: selidx,
        tit: seldt.tit,
        src: seldt.src,
        num: inputNum,
        price: seldt.price,
      });

    localStorage.setItem("cart", JSON.stringify(org));
    props.setCart?.(org);
  }

  const btnAct = () => {
    window.scrollTo(0, 0);
    $(".subface-con .number-btn__input").val("1");
  };

  useEffect(() => inputclick(".number-btn__input"), []);
  useEffect(bindChocoDome, []); // 상단 ChocoDomeCon(다른 섹션) 호버

  // 위임 바인딩: 한 번만 설치하면 됨(조건부 렌더/리사이즈 영향 없음)
  useEffect(() => {
    const cleanup = delegateNextChoco();
    return cleanup;
  }, []);

  const [winW, setWinW] = useState(window.innerWidth);
  useEffect(() => {
    const onR = () => setWinW(window.innerWidth);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  return (
    <>
      <section id="subface">
        <div className="subface-wrap">
          <img src={SubItem_data[props.num].bg} alt="이미지" />
          <div className="subface-bgwrap">
            <div className="subface-bg">
              <img src="./images/oneschool.png" alt="one school day" />
            </div>
          </div>
        </div>
      </section>

      <main>
        <section>
          <div className="subface-con">
            <h1>{SubItem_data[props.num].tit}</h1>
            <p>{SubItem_data[props.num].con}</p>
            <div className="number-btn">
              <div className="number-btn__1">
                <span className="number-btn__span" alt="no">-</span>
                <input htmlFor="number" className="number-btn__input" defaultValue="1" />
                <span className="number-btn__span" alt="add">+</span>
              </div>
              <button className="number-btn__2" onClick={addCart_data}>
                BUY NOW - 11.86$
              </button>
            </div>
          </div>
        </section>

        <section className="item">
          <div className="item-wrap">
            <div className="item-L">
              <img src={SubItem_data[props.num].item_src} alt="item img" />
            </div>
            <div className="item-R">
              <div className="about about-1">
                <h3>Chocolate we can all feel good about</h3>
              </div>
              <div className="about about-2">
                <p>
                  Every bar you buy helps to support our Women’s Economic
                  Empowerment Program and fund one day of schooling for a girl
                  in rural Ghana.
                </p>
              </div>
              <div className="about about-3">
                <h4>Ingredients</h4>
                <p>{SubItem_data[props.num].Ingredients}</p>
              </div>
              <div className="about about-4">
                <h4>Nutrition Facts</h4>
                <p>{SubItem_data[props.num]["Nutrition Facts"]}</p>
              </div>
              <div className="about about-5">
                <h4>Packaging</h4>
                <p>Made from FSC certified materials & 100% recyclable.</p>
              </div>
            </div>
          </div>
        </section>

        <article className="tasting">
          <div className="tasting-wrap">
            <h2>Tasting notes</h2>
            <div className="tasting-con">
              {SubItem_data[props.num].tasting.map((v, i) => (
                <div className={"tasting-" + i} key={i}>
                  <img src={v.src} alt="tasting img" />
                  <h4>{v.tit}</h4>
                  <h5>{v.about}</h5>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>

      <DomeSlide />

      {/* You may also enjoy */}
      <section id="subnext">
        <h2 className="subnext-tit">You may also enjoy</h2>
        <div className="subnext-wrap">
          <div className="subnext-con">
            {/* LEFT */}
            <div className="subnext-L">
              <div className="subnext-L-wrap">
                <div className="subnext-L-con">
                  <div className="subnext-img">
                    <img className="nextchocolatepack" src={SubNext_data[props.num].src1_L} alt="chocolate" />
                    <img className="nextchocolatebreak" src={SubNext_data[props.num].src2_L} alt="chocolate" />
                  </div>
                  <h3 className="tit_LT">{SubNext_data[props.num].tit_L.split("^")[0]}</h3>
                  <h3 className="tit_LB">{SubNext_data[props.num].tit_L.split("^")[1]}</h3>
                  <Link
                    to="/sub"
                    state={{ num: Number(props.num) - 1 === -1 ? 4 : Number(props.num) - 1 }}
                  >
                    <button className="btn-B" onClick={btnAct}>
                      {SubNext_data[props.num].btn_L}
                    </button>
                  </Link>
                </div>
                <div className="subnext-bg" style={{ backgroundColor: SubNext_data[props.num].bgc_L }}></div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="subnext-R">
              {winW < 768 && (
                <div className="subnext-R-wrap">
                  <div className="subnext-R-con">
                    <div className="subnext-img">
                      <img className="nextchocolatepack" src={SubNext_data[props.num].src1_R} alt="chocolate" />
                      <img className="nextchocolatebreak" src={SubNext_data[props.num].src2_R} alt="chocolate" />
                    </div>
                    <h3 className="tit_RT">{SubNext_data[props.num].tit_R.split("^")[0]}</h3>
                    <h3 className="tit_RB">{SubNext_data[props.num].tit_R.split("^")[1]}</h3>
                    <Link
                      to="/sub"
                      state={{ num: Number(props.num) + 1 === 5 ? 0 : Number(props.num) + 1 }}
                    >
                      <button className="btn-B" onClick={btnAct}>
                        {SubNext_data[props.num].btn_R}
                      </button>
                    </Link>
                  </div>
                  <div className="subnext-bg" style={{ backgroundColor: SubNext_data[props.num].bgc_R }}></div>
                </div>
              )}

              {winW >= 768 && (
                <div className="subnext-R-wrap">
                  <div className="subnext-R-con">
                    <div className="subnext-img">
                      <img className="nextchocolatepack" src={SubNext_data[props.num].src1_R} alt="chocolate" />
                      <img className="nextchocolatebreak" src={SubNext_data[props.num].src2_R} alt="chocolate" />
                    </div>
                    <h3 className="tit_RT">{SubNext_data[props.num].tit_R.split("^")[0]}</h3> {/* ₩ 제거 */}
                    <h3 className="tit_RB">{SubNext_data[props.num].tit_R.split("^")[1]}</h3>
                    <Link
                      to="/sub"
                      state={{ num: Number(props.num) + 1 === 5 ? 0 : Number(props.num) + 1 }}
                    >
                      <button className="btn-B" onClick={btnAct}>
                        {SubNext_data[props.num].btn_R}
                      </button>
                    </Link>
                  </div>
                  <div className="subnext-bg" style={{ backgroundColor: SubNext_data[props.num].bgc_R }}></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { SubAll, inputclick };
