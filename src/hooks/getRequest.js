import axios from 'axios';
import { useEffect, useState } from 'react';


const GetRequest = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            url: url,
            method:'get'
        })
        //응답 성공 (200)
        .then(res => {
            setData(res.data);
            return data;
        })
        //응답 실패
        .catch(err => {
            return console.log(err);
        })
    }, [url])
}

export default GetRequest;