import React from 'react'
import './index.css'
const Demo: React.FC = () => {
    return (
        <div className='formHome container-fluid'>
            <span className='label'><i className="fa-solid fa-house pe-3"></i>DIF Backend System / from</span>
            <div className='title'>
                <div className='text'>Customer Backend Form</div>
                <div className='butn'>
                    <button className='E me-3'><i className="fa-solid fa-file-excel pe-2"></i>Excel</button>
                    <button className='B'><i className="fa-solid fa-plus pe-2"></i>Create customer</button>
                </div>
            </div>
            <div className='tour'>
                <div className='inp'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type='search' placeholder='Search anything...' />
                    <i className="fa-solid fa-sliders"></i>
                </div>
                <div className='sels'>
                    <div className='sel'>
                        <i className="fa-solid fa-calendar"></i>
                        <select id="year">
                            <option value="2020">2020年</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Demo;