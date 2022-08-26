import { useState, useEffect } from "react";
import './ShopDeptt.css';

export const ShopDepttContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetchData();
  }, [])

const fetchData = async() =>{
  const data = await fetch('http://localhost:5000/departments')
  const result = await data.json();
  setData(result)
}

return (
    <div className="">
      <div className="shopDepttContentContainer">
        {data.map((item, index) => (
          <div key={index} className="shopDepttContentItems">
            <img              
              src={item.image}
              alt={item.title}
            />
            <h6>{item.title}</h6>
          </div>
        ))}
        
      </div>
    </div>
  );
};
