import { useState, useEffect } from "react";
import "./BackToSchool.css";

export const BackToSchoolContent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() =>{
        const data = await fetch('http://localhost:5000/backToSchoolContent')
        const result = await data.json();
        setData(result)
    }

  return (    
        <div className="backToSchoolContentContainer">
          {data.map((item, index) => (
            <div key={index} className="backToSchoolContentItems">
              <img              
                src={item.image}
                alt={item.title}
              />
              <h6>{item.title}</h6>
            </div>
          ))}    
      </div>
    );
};
