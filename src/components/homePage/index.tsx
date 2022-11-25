import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DemoContext } from '../../context/company'

export default function HomePage() {
  const { material, reget } = useContext(DemoContext)
  const [keys, setKeys] = useState<string[]>();
  const [search, setSearch] = useState<number | string>('')
  const navigate = useNavigate()
  useEffect(() => {
    reget()
  }, [])
  useEffect(() => {
    if (material && material.length !== 0) {
      const a = Object.keys(material[0].backgroundInformation)
      setKeys(a)
    }
  }, [material])

  const seach = (data: any) => {
    return data && data.filter((item: any) =>
      keys?.some(key => typeof item.backgroundInformation[key] === 'string' && item.backgroundInformation[key].toLowerCase().includes(search)))
  }
  return (
    <div className='form'>
      <input className='form-control' type="search" placeholder='Search...' onChange={e => setSearch(e.target.value)} />
      <table className='table'>
        <thead>
          <tr className='text-center'>
            <th scope='col'>#</th>
            <th scope='col'>年度</th>
            <th scope='col'>國家</th>
            <th scope='col'>城市</th>
            <th scope='col'>公司名稱</th>
            <th scope='col'>公司電話</th>
            <th scope='col'>姓名</th>
            <th scope='col'>職稱</th>
            <th scope='col'>手機</th>
            <th scope='col'>電子郵件</th>
            <th scope='col'>公司網址</th>
            <th scope='col'>產業類別</th>
            <th scope='col'>業務執行狀態</th>
            <th scope='col'>傳真</th>
            <th scope='col'>備註</th>
          </tr>
        </thead>
        <tbody>
          {
            material && seach(material).map((todo: any,i:any) => {
              return <tr key={todo.backgroundInformation.id} className='text-center'>
                <th scope="row">{i+1}</th>
                <td>{todo.backgroundInformation.negotiateYear}</td>
                <td>{todo.backgroundInformation.country}</td>
                <td>{todo.backgroundInformation.city}</td>
                <td>{todo.backgroundInformation.companyName}</td>
                <td>{todo.backgroundInformation.compantPhone}</td>
                <td>{todo.backgroundInformation.employeeName}</td>
                <td>{todo.backgroundInformation.position}</td>
                <td>{todo.backgroundInformation.cellPhone}</td>
                <td>{todo.backgroundInformation.email}</td>
                <td>{todo.backgroundInformation.companyUrl}</td>
                <td>{todo.backgroundInformation.industryType}</td>
                <td className='text-start'>
                  <ul>
                    {
                      todo.businessExecutionStatuDto && todo.businessExecutionStatuDto.map((item: any, i: any) => {
                        return <li key={i}>{item.date + item.state}</li>
                      })
                    }
                  </ul>
                </td>
                <td>{todo.backgroundInformation.fax}</td>
                <td>{todo.backgroundInformation.remark}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      <button onClick={() => { navigate('/form') }}><i className="fa-sharp fa-solid fa-pen"></i></button>
    </div>
  )
}
