import anime from 'animejs/lib/anime.es.js';
import Repeat from './Repeat';
import './NavBar.css'
import {useState} from 'react';

function Blocks() {
  let columns = 0;
  let rows = 0;
  const [toggled, setToggled] = useState(0);

  const animateBlock = (index) => {
    if(toggled) {
      setToggled(!toggled);
    }

    anime({
      targets: '.block',
      opacity: toggled ? 1 : 0,
      backgroundColor: 'rgb(23, 23, 23)',
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index
      })
    })
  };

  const setRowAndCol = (col, row) => {
    columns = col;
    rows = row;
  }

  return (
    <div>
      <Repeat setRowAndCol={setRowAndCol}>
        {(index) => <div onClick={() => animateBlock(index)} className="block" key={index}></div>}
      </Repeat>
      <h1 className="title font-mono ml-3 pl-3">Roman Noodles</h1>
    </div>
  );
}

export default Blocks;