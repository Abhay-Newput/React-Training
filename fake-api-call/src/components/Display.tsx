// src/components/Display.tsx
import React from "react";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface DisplayProps {
  data: Product[];
}

const Display: React.FC<DisplayProps> = ({ data }) => {
  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Category: {item.category}</p>
              <img src={item.image} alt={item.title} width="100" />
              <p>
                Rating: {item.rating.rate} ({item.rating.count} reviews)
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default Display;
