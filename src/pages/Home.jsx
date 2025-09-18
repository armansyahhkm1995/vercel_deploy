import React, { useState } from "react";
import Button from "../components/Button";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <section 
      style={{
        minHeight: "100vh",  // penuh tinggi layar
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h2>Welcome to My Vercel App</h2>
      <p>Counter: {count}</p>
      <div>
        <Button onClick={() => setCount(count + 1)}>+ Tambah</Button>
        <Button onClick={() => setCount(count - 1)}>- Kurangi</Button>
      </div>
    </section>
  );
}
