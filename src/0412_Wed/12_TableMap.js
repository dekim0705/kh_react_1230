import {useState, useEffect} from "react";
import "./App.css";


// 배열로 구성된 객체를 전달받아 map으로 화면에 표시하고, 표시된 화면 영역에 이벤트 연결
const TableMap = () => {
    const data = [
        {id: 1, name: 'Meredith', age: 30},
        {id: 2, name: 'Christina', age: 31},
        {id: 3, name: 'Izzie', age: 32}
    ];
    const [mapdata, setMapData] = useState('');

    useEffect(() => {
        setMapData(data);
    }, []);

    const handleTableRowClick = (item) => {
        console.log(item);
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id} onClick={() => handleTableRowClick(item)}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default TableMap;

// map  : 내부요소를 순회하여 새로운 배열 생성
//      : always requires key value
//      : iterates 3 times here
// item : each object
