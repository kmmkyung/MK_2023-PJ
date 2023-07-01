// 상세페이지 컴포넌트 - SubItem.js
// CSS
import "../css/subitem.css";
// Data
import SubItem_data from "../data/SubItem_data";
// 제이쿼리
import $ from "jquery";
import { useEffect } from "react";
import Bag_data from "../data/Bag_data";
function jqFn() {
    $(() => {
        console.log("Subitem로딩");
    }); //--- JQB ---//
}

function inputclick(params) {
    // 인풋
    const sumInput = $(params);
    console.log("suminput", sumInput);

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
            console.log("현재값", isV);

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
                alert("Please call Me 🙏");
            }
        }
    });
}

function SubItem(props) {
    function addCart_data() {
        // 로컬에 cart가 없으면 배열로 문자 넣기
        if (localStorage.getItem("cart") == null) {
            localStorage.setItem("cart", "[]");
            // console.log("cart후", localStorage.getItem("cart"));
        }

        let org = localStorage.getItem("cart");
        org = JSON.parse(org); // 객체화 한 데이터

        // 

        console.log(org, $(".subface-con h1").text(),props.idx);
        let seltit = $(".subface-con h1").text();


        console.log(seltit);
        console.log(Bag_data);

        // 로컬스 데이터가 있으면...
        if (org.length > 0) {
            let seldt = org.find((v) => {
                if (v.tit === seltit) return true;
            });
            // 
            console.log(
                "있다!",
                seldt.num, // 누르기 전 갯수
                seldt, // 해당 데이터
                Number($(".subface-con .number-btn__input").val()) // input 값에 찍히는 갯수
            );
            seldt.num = Number(seldt.num) + Number($(".subface-con .number-btn__input").val());
        } else {
            let seldt = Bag_data.find((v) => {
                if (v.tit === seltit) return true;
            });
            org.push({
                idx: org.length + 1,
                tit: seltit,
                src: seldt.src,
                num: Number($(".subface-con .number-btn__input").val()),
            });

        }
        localStorage.setItem("cart", JSON.stringify(org));
    console.log("저장후", localStorage.getItem("cart"));
    } /// addCart_data ///

    useEffect(() => inputclick(".number-btn__input"), []);

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
                                    Empowerment Program and fund one day of schooling for a girl in
                                    rural Ghana.
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
            {jqFn()}
        </>
    );
} //______________ SubItem _______________//
export { SubItem, inputclick };
