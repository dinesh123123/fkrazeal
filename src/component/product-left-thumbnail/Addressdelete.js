import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import React from 'react'
import axios from 'axios';

function Addressdelete(props) {
    const [lists, setLists]=useState([]);
    const [Id, setId]=useState(props.Id);
    //console.log("id of checking",Id)
      useEffect(() => {
      getHomeData();
    }, []);
  
    useEffect(() => {
        getHomeData2();
      }, []);
    
      const getHomeData2 = async () => {
      const userid = localStorage.getItem('_id');
      
        const options = {
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          },
        };
            const data = JSON.stringify({
              "userId":userid
                });
      
        try {
          const res = await axios.post('http://103.104.74.215:3018/krazeal/api/address_list', data, options);
                  setLists(res.data.data);  

                        } catch (err) {
          console.error(err);
        }
      };




    const getHomeData = async () => {
    const userid = localStorage.getItem('_id');
    
      const options = {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        },
      };
          const data = JSON.stringify({
            "userId":userid,
            "addressId":Id

            // "addressId":"645e2ec0fc675a48b92e6ba2"
              });
    
      try {
        const res = await axios.post('https://admin.krazeal.com/krazeal/api/address_delete', data, options);
                setLists(res.data.data);  
                console.log("responseof data",data)      
      } catch (err) {
        console.error(err);
      }
    };
    return (
        <div className="button-group">
        <button className="btn btn-sm add-button w-100" onClick={getHomeData} ><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg>
          Remove</button>        
        {/* <button onClick={getHomeData} className="btn btn-sm add-button w-100" data-bs-toggle="modal" data-bs-target="#removeProfile"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg>
          Remove</button> */}
      </div>
          
          )
        }
        
        export default Addressdelete