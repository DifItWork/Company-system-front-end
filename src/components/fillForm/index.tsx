import React, { useState } from 'react'
import customerInformation from '../../server/customerInformation'
import { useNavigate } from 'react-router-dom'

const Form: React.FC = () => {
    const [backgroundInformation, setBackgroundInformation] = useState({})
    const [businessExecutionStatu] = useState([{companyName:'',date:'',state:''},{companyName:'',date:'',state:''}])
    const navigate = useNavigate()

    const sed = async () => {
        const newdata = businessExecutionStatu.filter(e=>e.state!== '')
        console.log(newdata);   
        const data = { backgroundInformation, businessExecutionStatu:newdata}
        const rep = await customerInformation.postCompanyData(data)
        const da = await rep.data;
        if (da) navigate('/')
        else alert('不能有空格')
    }
  

    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className="col-6">
                    <label className='form-label' htmlFor="">年度</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, negotiateYear: e.target.value })} className='form-control' type="text" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">區域</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, area: e.target.value })} list="datalistOptions" className='form-control' type="text" />
                    <datalist id="datalistOptions">
                        <option value="澳洲" />
                        <option value="美洲" />
                        <option value="歐洲" />
                        <option value="大洋洲" />
                        <option value="亞洲" />
                        <option value="非洲" />
                    </datalist>
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">國家</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, country: e.target.value })} className='form-control' type="text" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">城市</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, city: e.target.value })} className='form-control' type="text" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">公司名稱</label>
                    <input onChange={e => {
                        setBackgroundInformation({ ...backgroundInformation, companyName: e.target.value })
                        businessExecutionStatu[0].companyName = e.target.value;
                        businessExecutionStatu[1].companyName = e.target.value
                    }
                    } className='form-control' type="text" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">公司電話</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, compantPhone: e.target.value })} className='form-control' type="phone" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">姓名</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, employeeName: e.target.value })} className='form-control' type="text" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">職稱</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, position: e.target.value })} className='form-control' type="text" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">手機</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, cellPhone: e.target.value })} className='form-control' type="phone" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">電子郵件</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, email: e.target.value })} className='form-control' type="email" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">地址</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, areaAddress: e.target.value })} className='form-control' type="email" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">公司網址</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, companyUrl: e.target.value })} className='form-control' type="text" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">產業類別</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, industryType: e.target.value })} className='form-control' type="text" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">傳真</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, fax: e.target.value })} className='form-control' type="text" />
                </div>
                <div className="col-6">
                    <label className='form-label' htmlFor="">備註</label>
                    <input onChange={e => setBackgroundInformation({ ...backgroundInformation, remark: e.target.value })} className='form-control' type="text" />
                </div>
                <div className="col-12">
                    <label className='form-label' htmlFor="">業務執行狀態</label>
                    <input className='form-control' type="date" onChange={e => businessExecutionStatu[0].date = e.target.value} />
                    <input className='form-control' type="text" onChange={e => businessExecutionStatu[0].state = e.target.value} />
                    <input className='form-control' type="date" onChange={e => businessExecutionStatu[1].date = e.target.value} />
                    <input className='form-control' type="text" onChange={e => businessExecutionStatu[1].state = e.target.value} />
                </div>
                <button onClick={sed} className='btn btn-light mt-4'>送出</button>
            </div>
        </div>
    )
}

export default Form;