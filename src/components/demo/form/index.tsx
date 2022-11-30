import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Statu from './statuDto'
interface Iprop {
    data: any
    reget:Function
}

interface sort {
    backgroundInformation: {
        negotiateYear: string
    }
}
interface data {
    backgroundInformation: {
        country: string,
        city: string,
        negotiateYear: string,
        fax: string,
        areaAddress?: string,
        companyName: string,
        employeeName: string,
        position: string,
        cellPhone: string,
        area: string,
        email: string,
        companyUrl: string,
        industryType: string,
        remark: string,
        compantPhone: string
    }
}
const Form: React.FC<Iprop> = ({ data ,reget}) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [show, setShow] = useState<boolean>(false);
    const [object, setObject] = useState({});
    const itemsPerPage = 5;
    useEffect(() => {
        if (data) {
            const newData = data.sort((a: sort, b: sort) => {
                return Number(a.backgroundInformation.negotiateYear) - Number(b.backgroundInformation.negotiateYear)
            })
            const endOffset = itemOffset + itemsPerPage
            setCurrentItems(newData.slice(itemOffset, endOffset))
            setPageCount(Math.ceil(newData.length / itemsPerPage))
        }
    }, [itemOffset, itemsPerPage, data])

    const statu = (todo:object) => {
        setShow(true)
        setObject(todo)
    }

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    }

    return (
        <>
            <table>
                <thead>
                    <tr >
                        <th>NO.</th>
                        <th>Year</th>
                        <th>Area</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Industry</th>
                        <th>Company Name</th>
                        <th>Telephone</th>
                        <th>Cell Phone</th>
                        <th>Email</th>
                        <th>Fax</th>
                        <th>Name</th>
                        <th><i className="fa-solid fa-chevron-down me-2"></i>Job Title</th>
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems.map((todo: data, i: number) => {
                            return <tr key={i} onClick={() => statu(todo)}>
                                <td className='No'>{i + 1 + itemOffset}.</td>
                                <td className='Year'>{todo.backgroundInformation.negotiateYear}</td>
                                <td className='Area'>{todo.backgroundInformation.area}</td>
                                <td className='Country'>{todo.backgroundInformation.country}</td>
                                <td className='City' style={
                                    todo.backgroundInformation.city === 'No' && 'no' ? { color: 'rgb(170, 170, 170)' } : { color: 'rgb(61, 61, 61)' }
                                }>{todo.backgroundInformation.city}</td>
                                <td className='Industry'><i className="fa-solid fa-o"></i>{todo.backgroundInformation.industryType}</td>
                                <td className='CompanyName'>{todo.backgroundInformation.companyName.charAt(0).toUpperCase() + todo.backgroundInformation.companyName.slice(1)}</td>
                                <td className='Telephone'>{todo.backgroundInformation.compantPhone}</td>
                                <td className='CellPhone' style={todo.backgroundInformation.cellPhone === 'No' && 'no' ? { color: 'rgb(170, 170, 170)' } : { color: 'rgb(0, 71, 163)' }
                                }>{todo.backgroundInformation.cellPhone}</td>
                                <td className='Email'>{todo.backgroundInformation.email}</td>
                                <td style={
                                    (todo.backgroundInformation.fax === 'no' || todo.backgroundInformation.fax === 'No') ? { color: 'rgb(170, 170, 170)' } : { color: 'rgb(0, 71, 163)' }
                                } className='Fax'>{todo.backgroundInformation.fax}</td>
                                <td className='Name'>{todo.backgroundInformation.employeeName}</td>
                                <td className='JobTitle'>{todo.backgroundInformation.position}</td>
                                <td className='Remark'>{todo.backgroundInformation.remark}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className='pag'>
                <span className='remark'>showing {itemOffset + 1} - {currentItems.length + itemOffset} of {data && data.length} results</span>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={undefined}
                    containerClassName='pagination'
                    pageLinkClassName='page-num'
                    previousLinkClassName='page-nums'
                    nextLinkClassName='page-nums'
                    activeLinkClassName='active'
                />
                <span className='remark'>items per page {pageCount}</span>
            </div>
            <Statu show={show} setShow={setShow} object={object} reget={reget}/>
        </>

    )
}
export default Form;