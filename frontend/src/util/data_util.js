import axios from 'axios';

export const getData = () => {
    return (
        axios.get('/api/data')
            .then(data => (data.data.msg))
    )
};