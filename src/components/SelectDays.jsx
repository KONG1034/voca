import GetRequest from '../hooks/getRequest';


const SelectDays = () => {
    const result = GetRequest('http://localhost:3001/days');
    console.log(result);
    return <>
        <select>
            <option>1</option>
        </select>
    </>
}

export default SelectDays;