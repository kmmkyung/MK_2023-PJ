// 사각 컴포넌트 - RecCon.js
import { Link } from "react-router-dom";
import "../css/recblur.css";
import RecCon_data from "../data/RecBlur_data";
// 제이쿼리
import $ from "jquery"
import { motion } from "framer-motion";


function jqFn(){
    $(()=>{ 
        console.log('RecBlur로딩')
    }); //--- JQB ---//
} //_______________ jqFn _______________//
jqFn();

function RecBlur(props){
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      };
    return(
        <>        
            <section id="recblur">
                <div className="recblur-con">
                    <img src={RecCon_data[props.num].src} alt="이미지"  />
                    <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        >
                    <div className="recblur-text">
                        <h2>{RecCon_data[props.num].tit}</h2>
                        <p>{RecCon_data[props.num].con}</p>
                        <Link to='/shop'>
                            <button className="recblur-text__btn btn-B">{RecCon_data[props.num].btn}</button>
                        </Link>
                    </div>
                </motion.div>
                </div>
            </section>
            {/* {jqFn()} */}
        </>
    )
} //______________ RecCon _______________//
export default RecBlur;