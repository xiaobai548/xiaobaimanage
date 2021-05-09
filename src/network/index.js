import axios from 'axios'
const requie = axios.create({
    timeout:3000,
})
requie.interceptors.request.use(
    config=>{
        return config
    },
    err=>{
        return err
    }
)
requie.interceptors.response.use(
    response=>{
        let res={}
        res.status=response.status,
        res.data=response.data
        return res
    },
    err=>{
        return err
    }
)
export default requie



