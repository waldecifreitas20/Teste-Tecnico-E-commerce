import { useState, useEffect } from "react";

interface QuantityInputProps {
  initialValue?: number;
}

export function QuantityInput({
  initialValue = 1
}: QuantityInputProps) {
  const [qtd, setQtd] = useState(initialValue);
  const buttonStyle = "bg-slate-800 block p-2 text-slate-100 text-2xl";


  function increment() {
    setQtd(qtd + 1);
  }

  function decrement() {
    setQtd(old => --old);
  }



  return (
    <div className={`flex justify-between w-fit gap-2`}>

      <button
        type="button"
        onClick={decrement}
        disabled={qtd <= 1}
        className={`${buttonStyle} ${qtd <= 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        aria-label="Diminuir quantidade"
      > <i className="fa-solid fa-minus"></i> </button>

      <input
        type="text"
        value={qtd}
        disabled
        className="w-12 text-center border rounded-md border-slate-200"
      />

      <button
        type="button"
        onClick={increment}
        disabled={qtd >= 100}
        aria-label="Aumentar quantidade"
        className={`${buttonStyle} ${qtd >= 100 ? "opacity-50 cursor-not-allowed" : ""}`}
      > <i className="fa-solid fa-plus"></i>  </button>
    </div>
  );
}
