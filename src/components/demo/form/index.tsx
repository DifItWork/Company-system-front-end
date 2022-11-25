import React from 'react'

const Form: React.FC= () => {
    return (
        <table>
            <thead>
                <tr className='text-center'>
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
                    <th><i className="fa-solid fa-chevron-down me-2"></i>Name</th>
                    <th><i className="fa-solid fa-chevron-down me-2"></i>Job Title</th> 
                    <th>Remark</th>      
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}
export default Form;