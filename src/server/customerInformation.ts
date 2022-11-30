import axios from 'axios';


const COMPANT_API_DATA = 'https://localhost:5001/api/';

class customerInformation {
    //拿取公司資料
    getCompanyData() {
        return axios.get(COMPANT_API_DATA + 'Crm/getData')
    }
    //新增客戶資料
    postCompanyData(data: object) {
        return axios.post(COMPANT_API_DATA + 'Crm/postData', data)
    }
    //新增工作狀態
    postCompanyStatu(data: object) {
        return axios.post(COMPANT_API_DATA + 'Crm/insertChildProfile', data)
    }
    //刪除工作狀態
}

export default new customerInformation()