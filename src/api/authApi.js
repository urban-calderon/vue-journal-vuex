
import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyBrOkafjWZgArwf6nVFd-Hp9t167lazopk'
    }
})

export default authApi