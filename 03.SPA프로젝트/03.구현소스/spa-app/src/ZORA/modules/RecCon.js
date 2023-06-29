/* eslint-disable */
// 사각 컴포넌트 - RecCon.js
import { Link } from "react-router-dom";
import "../css/reccon.css";
import RecCon_data from "../data/RecCon_data";
// 제이쿼리
import $ from "jquery"
import { useEffect } from "react";

function jqFn(){
    $(()=>{ 
        console.log('RecCon로딩')
    }); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

function RecCon(props){
    let content = RecCon_data[props.cat][props.num]

    console.log(props.sty);
    
    function chgimg(props){
        let chgimgnum=0;
        let img = ['./images/Inspire women_1.jpg','./images/Inspire women_2.jpg','./images/Inspire women_3.jpg']
        
        setInterval(()=>{
            if(!document.querySelector(".reccon-con img"))return;
            document.querySelector(".reccon-con img").setAttribute("src",img[chgimgnum])
            chgimgnum++
            if(chgimgnum===img.length){chgimgnum=0}
            
        },800)
    }

    useEffect(chgimg,[])

    const setVal = (i) => {
        // return i==0 && props.sty ? props.sty : '';
        if(i==0)
        return props.sty;
    }


    return(
        <>        
            <section id="reccon">
                <div className="reccon-con">
                    {
                        content.src !== "" &&
                        <img src={content.src} alt="이미지" />
                    }
                    <div className="reccon-text">
                        {
                        content.tit.split("^").map((v,i)=>{
                            return <h2 key={i} style={setVal(i)}>{v}</h2> 
                        })
                        }
                        <p>{content.cont}</p>
                        <Link to='/story'>
                            <button className="reccon-text__btn btn-B">{content.btn}</button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* {jqFn()} */}
        </>
    )
} //______________ RecCon _______________//
export default RecCon;