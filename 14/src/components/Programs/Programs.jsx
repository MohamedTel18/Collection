import React from 'react'
import './Programs.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import icon1 from '../../assets/program-icon-1.png'
import icon2 from '../../assets/program-icon-2.png'
import icon3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='Programs'>
      <div className="program">
        <img src={program1} alt="program1" />
        <div className="caption">
            <img src={icon1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="program2" />
        <div className="caption">
            <img src={icon2} alt="" />
            <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="program3" />
        <div className="caption">
            <img src={icon3} alt="" />
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
