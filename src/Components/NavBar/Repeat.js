import { useState, useEffect, useRef } from 'react';

function Repeat(props) {
  const ref = useRef(null);

  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    setColumns(Math.floor(document.body.clientWidth / 105));
    setRows(Math.floor(document.body.clientHeight / 105));
    props.setRowAndCol(columns, rows);
  });

  window.onresize = () => {
    setColumns(Math.floor(document.body.clientWidth / 105));
    setRows(Math.floor(ref.current.parentElement.offsetHeight / 105));
    props.setRowAndCol(columns, rows);
  }
  
  let items = [];
  for (let i = 0; i < (columns * rows); i++) {
    items.push(props.children(i));
  }
  return <div ref={ref} className="flex flex-wrap justify-center">{items}</div>;
}

export default Repeat;