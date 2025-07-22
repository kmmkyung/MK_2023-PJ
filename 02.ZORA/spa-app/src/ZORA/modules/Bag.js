import React from "react";
import "../css/bag.css";

const Bag = (props) => {
  const {cart, setCart} = props;
  const addItemNum = (idx) => {
    setCart(prev =>
      prev.map(item =>
        item.idx === idx ? { ...item, num: item.num + 1 } : item
      )
    );
  };

  const removeItemNum = (idx) => {
    setCart(prev =>
      prev.map(item =>
        item.idx === idx
          ? { ...item, num: item.num > 1 ? item.num - 1 : 1 }
          : item
      )
    );
  };

  function removeItem(idxToRemove) {
    // 삭제할 idx 빼고 새로운 배열 만들기
    const newCart = cart.filter(item => item.idx !== idxToRemove);
  
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  }

  const changeItemNum = (idx, value) => {
    // 입력 값 숫자 변환 및 최소 1로 제한
    let num = parseInt(value);
    if (isNaN(num) || num < 1) num = 1;
  
    setCart(prev =>
      prev.map(item =>
        item.idx === idx ? { ...item, num } : item
      )
    );
  };
  

  return (
    <>
      {cart && cart.map((v, i) => (
        <div className="bag-items__con" key={i}>
          <img src={v.src} alt="bag_img" />
          <div className="bag-items-txt">
            <h5>{v.tit}</h5>
            <div className="con-btn">
              <span className="con-btn__span" alt="no" onClick={() => removeItemNum(v.idx)}
                style={{ cursor: "pointer" }}>-</span>
              <input
                htmlFor="number"
                className="con-btn__input"
                onChange={(e) => changeItemNum(v.idx, e.target.value)}
                value={v.num}
              />
              <span className="con-btn__span" alt="add" onClick={() => addItemNum(v.idx)}
                style={{ cursor: "pointer" }}>+</span>
            </div>
            <p>${(v.price * v.num).toFixed(2)}</p>
            <span className="remove" onClick={()=>removeItem(v.idx)}>remove</span>
          </div>
        </div>
      ))}
    </>
  );
};
export default Bag;
