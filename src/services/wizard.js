import axios from 'axios'

class Wizard {
    constructor() {
        this.base = 'https://wizard-challenge-api.herokuapp.com'
    }

    login = credentials => axios.post(`${this.base}/auth/login`, credentials)

    signup = data => axios.post(`${this.base}/auth/signup`, data)

    listGenders = () => axios.get(`${this.base}/gender`)

    listCountries = () => axios.get(`${this.base}/country`)
}

const wizard = new Wizard()

export default wizard