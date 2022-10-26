import { useState, useEffect, useRef } from 'react';

function Repeat(props) {
  const ref = useRef(null);

  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    setColumns(Math.floor(document.body.clientWidth / 50));
    setRows(Math.floor(ref.current.parentElement.offsetHeight / 50));
    console.log(columns, rows);
  });
  
  let items = [];
  for (let i = 0; i < (columns * rows); i++) {
    items.push(props.children(i));
  }
  return <div ref={ref} className="flex flex-wrap">{items}</div>;
}

export default Repeat;