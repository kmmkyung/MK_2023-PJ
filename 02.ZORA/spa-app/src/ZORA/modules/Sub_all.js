// 상세페이지 컴포넌트 - SubItem.js
import "../css/subitem.css";
import "../css/subnext.css";
import SubItem_data from "../data/SubItem_data";
import SubNext_data from "../data/SubNext_data";
import Bag_data from "../data/Bag_data";
import DomeSlide from "./DomeSlide";

import $ from "jquery";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { chocobreak } from "./ChocoDomeCon";


function inputclick(params) {
  // 인풋
  const sumInput = $(params);

  // 인풋 버튼
  $(params)
    .parent()
    .find("span")
    .click(function () {
      // console.log('this', $(this));

      // 1. 클릭된 버튼 구분하기
      let altbtn = $(this).attr("alt");
      // console.log('구분버튼',altbtn); // ok

      // 2. 현재값 읽어오기 문자->숫자
      let isV = Number(sumInput.val());

      // 3. 버튼 분기하기
      if (altbtn === "add") {
        sumInput.val(++isV);
      } else {
        isV = --isV;
        if (isV === 0) isV = 1;
        sumInput.val(isV);
      }
    });

  // 직접입력
  sumInput.keyup(function () {
    let txt = sumInput.val();
    if (txt === "") return;

    // 숫자가 아니거나, 1미만이거나, 빈값이거나, 소수점 아닌 -1일 경우
    if (isNaN(txt) || txt < 1 || txt === "" || txt.indexOf(".") !== -1) {
      sumInput.val(1);
    } else {
      if (txt >= 100) {
        alert("Please call Me!🙏");
      }
    }
  });
}

//_____________________________________________________________________________________

function SubAll(props) {

  function addCart_data() {
    let org = JSON.parse(localStorage.getItem("cart")) || [];
    let selidx = Number(SubItem_data[props.num].idx);
    let inputNum = Number($(".subface-con .number-btn__input").val());
  
    let seldt = Bag_data.find((v) => Number(v.idx) === selidx);
    // console.log("seldt:", seldt);

    if (!seldt) return;
  
    let existingItem = org.find(item => item.idx === selidx);
    if (existingItem) {
      existingItem.num = Number(existingItem.num) + inputNum;
    } else {
      org.push({
        idx: selidx,
        tit: seldt.tit,
        src: seldt.src,
        num: inputNum,
        price: seldt.price
      });
    }
  
    localStorage.setItem("cart", JSON.stringify(org));
    // console.log("Updated cart in localStorage:", org);
  
    if (props.setCart) {
      props.setCart(org);
    }
  }

    
  

  // 버튼 액션
  const btnAct = () => {
    window.scrollTo(0, 0);
    $(".subface-con .number-btn__input").val("1");
  }; /////////// btnAct ///////////

  useEffect(() => inputclick(".number-btn__input"), []);
  useEffect(chocobreak, []);

  const [winW, setWinW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWinW(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // 클린업 함수: 이벤트 해제
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
                <span className="number-btn__span" alt="no">
                  -
                </span>
                <input
                  htmlFor="number"
                  className="number-btn__input"
                  defaultValue="1"
                />
                <span className="number-btn__span" alt="add">
                  +
                </span>
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
                  <img
                    src={SubItem_data[props.num].tasting[i].src}
                    alt="tasting img"
                  />
                  <h4>{SubItem_data[props.num].tasting[i].tit}</h4>
                  <h5>{SubItem_data[props.num].tasting[i].about}</h5>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
      <DomeSlide />
      <section id="subnext">
        <h2 className="subnext-tit">You may also enjoy</h2>
        <div className="subnext-wrap">
          <div className="subnext-con">
            <div className="subnext-L">
              <div className="subnext-L-wrap">
                <div className="subnext-L-con">
                  <div className="subnext-img">
                    <img
                      className="chocolatepack"
                      src={SubNext_data[props.num].src1_L}
                      alt=""
                    />
                    <img
                      className="chocolatebreak"
                      src={SubNext_data[props.num].src2_L}
                      alt=""
                    />
                  </div>
                  <h3 className="tit_LT">
                    {SubNext_data[props.num].tit_L.split("^")[0]}
                  </h3>
                  <h3 className="tit_LB">
                    {SubNext_data[props.num].tit_L.split("^")[1]}
                  </h3>
                  <Link
                    to="/sub"
                    state={{
                      num:
                        Number(props.num) - 1 === -1 ? 4 : Number(props.num) - 1,
                    }}
                  >
                    <button className="btn-B" onClick={btnAct}>
                      {SubNext_data[props.num].btn_L}
                    </button>
                  </Link>
                </div>
                <div
                  className="subnext-bg"
                  style={{
                    backgroundColor: SubNext_data[props.num].bgc_L,
                  }}
                ></div>
              </div>
            </div>
            <div className="subnext-R">
              {
                winW < 768 && //768보다 작으면 코드 실행
              <div className="subnext-R-wrap" style={{ backgroundColor: SubNext_data[props.num].bgc_L }}>
                <div className="subnext-R-con">
                  <div className="subnext-img">
                    <img
                      className="chocolatepack"
                      src={SubNext_data[props.num].src1_R}
                      alt=""
                    />
                    <img
                      className="chocolatebreak"
                      src={SubNext_data[props.num].src2_R}
                      alt=""
                    />
                  </div>
                  <h3 className="tit_RT">
                    {SubNext_data[props.num].tit_R.split("^")[0]}
                  </h3>
                  <h3 className="tit_RB">
                    {SubNext_data[props.num].tit_R.split("^")[1]}
                  </h3>
                  <Link
                    to="/sub"
                    state={{
                      num:
                        Number(props.num) + 1 === 5 ? 0 : Number(props.num) + 1,
                    }}
                  >
                    <button className="btn-B" onClick={btnAct}>
                      {SubNext_data[props.num].btn_R}
                    </button>
                  </Link>
                </div>
                <div
                  className="subnext-bg"
                  style={{
                    backgroundColor: SubNext_data[props.num].bgc_R,
                  }}
                ></div>
              </div>
              }
              {winW>= 768 &&
              <div className="subnext-R-wrap">
                <div className="subnext-R-con">
                  <div className="subnext-img">
                    <img
                      className="chocolatepack"
                      src={SubNext_data[props.num].src1_R}
                      alt=""
                    />
                    <img
                      className="chocolatebreak"
                      src={SubNext_data[props.num].src2_R}
                      alt=""
                    />
                  </div>
                  <h3 className="tit_RT">₩
                    {SubNext_data[props.num].tit_R.split("^")[0]}
                  </h3>
                  <h3 className="tit_RB">
                    {SubNext_data[props.num].tit_R.split("^")[1]}
                  </h3>
                  <Link
                    to="/sub"
                    state={{
                      num:
                        Number(props.num) + 1 === 5 ? 0 : Number(props.num) + 1,
                    }}
                  >
                    <button className="btn-B" onClick={btnAct}>
                      {SubNext_data[props.num].btn_R}
                    </button>
                  </Link>
                </div>
                <div
                  className="subnext-bg"
                  style={{
                    backgroundColor: SubNext_data[props.num].bgc_R,
                  }}
                ></div>
              </div>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
} //______________ SubItem _______________//
export { SubAll, inputclick };
