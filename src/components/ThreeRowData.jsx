import React from 'react'
import "./BackToSchool.css";
import { useState, useEffect } from "react";


export const ThreeRowData = ({url}) => {
    const [data, setData] = useState([]);
    const [config, setConfig] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() =>{
        const fetchItems = await fetch(`http://localhost:5000/${url}`)
        const result = await fetchItems.json();
        result.map((item)=>{
            setData(item.data);
            setConfig(item.config)
        }) 
        console.log(data)
        console.log(config);
      }

    return (
        <div className="backToSchoolContentContainer">
          {data.map((item, index) => (

            <div key={index} className="backToSchoolContentItems">
              <img
                src={item.image}
                alt={item.title}
                height={config[0].img_height}
                 width={config[0].img_width}
              />
              {config[0].title == "h4" ? ( <h4>{item.title}</h4>) : ( <h6>{item.title}</h6>)}             
              <span>{item.subTitle && config[0].subTitle == "h4" ? ( <h4>{item.subTitle}</h4>) : ( <h6>{item.subTitle}</h6>)}</span>
            </div>
          ))}
        </div>
    )
}

