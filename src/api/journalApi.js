
import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-4072e-default-rtdb.firebaseio.com'
})

export default journalApi