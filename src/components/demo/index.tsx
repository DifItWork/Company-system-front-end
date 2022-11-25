import React from 'react'
import Form from './form';
import './index.css'
const Demo: React.FC = () => {
    return (
        <div className='formHome container-fluid'>
            <span className='label'><i className="fa-solid fa-house pe-3"></i>DIF Backend System / from</span>
            <div className='title'>
                <div className='text'>Customer Backend Form</div>
                <div className='butn'>
                    <button className='E me-3'><i className="fa-solid fa-file-excel pe-2"></i>Excel</button>
                    <button className='B mt-3 me-2'><i className="fa-solid fa-plus pe-2"></i>Create customer</button>
                </div>
            </div>
            <div className='tour '>
                <div className='inp'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type='search' placeholder='Search anything...' />
                </div>
                <div className='sels'>
                    <label className='sel'>
                        <i className="fa-solid fa-calendar"></i>
                        <select id="year">
                            <option value="Data year">Data year</option>
                        </select>
                    </label>
                    <label className='sel '>
                        <i className="fa-solid fa-globe"></i>
                        <select id="year">
                            <option value="Area">Area</option>
                        </select>
                    </label>
                    <label className='sel '>
                        <i className="fa-solid fa-location-dot"></i>
                        <select id="year">
                            <option value="Country">Country</option>
                        </select>
                    </label>
                    <label className='sel '>
                        <i className="fa-solid fa-building"></i>
                        <select id="year">
                            <option value="City">City</option>
                        </select>
                    </label>
                    <label className='sel '>
                        <i className="fa-solid fa-briefcase"></i>
                        <select id="year">
                            <option value="Conpany name">Conpany name</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className='nave mx-3 mt-3'>
                <span className='customers'>All customers</span>
                <span className='nb'>50</span>
            </div>
            <div className='form mt-3'>
                <Form/>
            </div>
        </div>
    )
}
export default Demo;