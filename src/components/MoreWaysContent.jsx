import { useState, useEffect } from "react";
import "./MoreWaysToSave.css";

export const MoreWaysContent = () => {    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() =>{
        const data = await fetch('http://localhost:5000/moreWaysContent')
        const result = await data.json();
        setData(result)
      }

    return (
        <div className="moreWaysContentContainer">
          {data.map((item, index) => (
            <div key={index} className="moreWaysContentItems">
              <img
                src={item.image}
                alt={item.title}
              />
              <h4>{item.title}</h4>
              <span>{item.subTitle}</span>
            </div>
          ))}
        </div>
    )
}

