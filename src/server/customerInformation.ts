import axios from 'axios';


const COMPANT_API_DATA = 'https://localhost:7222/api/';

class customerInformation {
    //拿取公司資料
    getCompanyData() {
        return axios.get(COMPANT_API_DATA + 'Crm/getDate')
    }

    //新增客戶資料
    postCompanyData(data: object) {
        return axios.post(COMPANT_API_DATA + 'Crm/postDate', data)
    }
}

export default new customerInformation()