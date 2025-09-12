import React from 'react'
import { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider = useRef();
  let tx=0;

  const SlideForward = () => {
    if(tx>-50){
        tx-=25;
        slider.current.style.transform=`translateX(${tx}%)`;
    }
  }

  const SlideBackward = () => {
    if(tx<0){
        tx+=25;
        slider.current.style.transform=`translateX(${tx}%)`;
    }
  }



  return (
    <div className="testimonials">
      <img src={next} alt="" className="next-btn" onClick={SlideForward}/>
      <img src={back} alt="" className="back-btn" onClick={SlideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-section">
                        <img src={user1} alt="user1" />
                        <div className="user-info">
                            <h3>Emily Williams</h3>
                            <p>Edusity, USA</p>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-section">
                        <img src={user2} alt="user2" />
                        <div className="user-info">
                            <h3>William Jackson</h3>
                            <p>Edusity, USA</p>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-section">
                        <img src={user3} alt="user3" />
                        <div className="user-info">
                            <h3>Emily Williams</h3>
                            <p>Edusity, USA</p>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-section">
                        <img src={user4} alt="user4" />
                        <div className="user-info">
                            <h3>William Jackson</h3>
                            <p>Edusity, USA</p>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
