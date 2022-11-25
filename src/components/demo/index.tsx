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
        </div>
    )
}
export default Demo;