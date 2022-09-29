import { UserSwitchOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

function FetchSearch() {
    const [userData, setUserData] = useState([])
    // const [dataStore, setDataStore] = useState()
    const [data, setData] = useState('')


    const fetchApi=async()=>{
        try{
        let res=await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log("res",res);
        let allSearch=res.data
        setUserData(allSearch)
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchApi()
    },[])


  return (

    <div>
        <input placeholder='Enter Data' name="data" value={data} onChange={(e)=>{setData(e.target.value)}}/>
        <Table Striped border>
            <thead>
                <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            </tr>
            </thead>
        
        <tbody>
       { userData.filter((value)=>{
        if(data===''){
            return value;
        }
        else if(value.address.city.toLowerCase().includes(data)){
            return value;
        }
       })
       
       
       
       .map((val,idx)=>{
            return ( 
                <tr key={idx}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.address.city}</td>
                </tr>
                )
        })
}
</tbody>
</Table>

{/* <input placeholder='Search' name='data' value={dataStore} onChange={(e)=>{setDataStore(e.target.value)}}/>

{
    userData.filter((val)=>{
        return val.name.toLowerCase().includes(dataStore)
    }).map((val)=>{
        return (<li key={val.id}>{val.name}</li>)
    })
} */}

    </div>
  )
}

export default FetchSearch
