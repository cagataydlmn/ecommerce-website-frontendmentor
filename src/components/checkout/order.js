import { useSelector } from "react-redux";
import React from "react";

export default function Order(){
    const items = useSelector((state) => state.cart.items);

    if (items.length === 0) {
      return <p>Sepet boş</p>;
    }
    return(
        <div>
        <h2>Sepetim</h2>
        {items.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <img src={item.image.desktop.replace("./", "/")} alt={item.name} width={100} />
            <div>{item.name}</div>
            <div>Adet: {item.quantity}</div>
            <div>Fiyat: ${item.price}</div>
            <div>Toplam: ${item.total}</div>
          </div>
        ))}
  
        <h3>
          Genel Toplam: $
          {items.reduce((acc, item) => acc + item.total, 0)}
        </h3>
      </div>
    )
}