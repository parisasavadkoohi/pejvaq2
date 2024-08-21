 import React, { useEffect, useState } from "react";

 import axios,{AxiosResponse} from "axios";
import { relative } from "path";


 interface StoreInfo{
    Name:string;
    CompanyAddress:string;
    CompanyPhoneNumber:string;
    CompanyEmail:string;
    LogoPictureUrl:string;
    HeaderPictureUrl:string;
    WeeekyMotto:string;

 }

 const Header:React.FC=()=>{
    const [storeInfo,setStoreInfo]=useState<StoreInfo |null>(null);
    const [loading,setLoading]=useState<boolean>(true);
    const[error,setError]=useState<string|null>(null);

    useEffect(()=>{
        const fetchStoreInfo=async()=>{
            try{
                const response:AxiosResponse<StoreInfo>=await axios.get(
                    'https://back.pejvaq.com/odata/Store/GetStoreInfo?key=655dae8596487a2f40930666&systemName=&logoSize=0&headerSize=0' 
                );
                setStoreInfo(response.data);


            }catch(error:any){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        };

        fetchStoreInfo();

    },[]);

    if(loading){
        return<div>Loading...</div>;
    }
    if(error){
        return<div>Error:{error}</div>;
    }
    if(!storeInfo){
        return <div>No store information available</div>;
    }
return(
    <header className=" bg-white   flex-col items-center " dir="rtl">
        <img   
        src={`https://back.pejvaq.com${storeInfo.HeaderPictureUrl}`}
        alt="Store Heaader"
        className="w-full h-32 rounded-b-full object-cover mb-4  top-0 img-shadow "
        style={{ maxHeight: '100%' }} />
      <img
      src={`https://back.pejvaq.com${storeInfo.LogoPictureUrl}`}
      alt="Store Logo"
     
      className="w-32 h-32 p-1 z-10 relative object-cover  rounded-full border border-gray-200 img-shadow  mb-2 blink  "style={{ marginTop: '-5rem' }}
      
      />
      <h1 className="text-2xl font-bold p-1 "style={{position:'relative',top:'-30%'}}>{storeInfo.Name}</h1>
      <p className="text-gray-600 ">{storeInfo.WeeekyMotto}</p>


    </header>
)

 }
 export default Header;