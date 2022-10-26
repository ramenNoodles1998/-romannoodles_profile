import Repeat from './Repeat';

const divStyle = {
  display: 'inlineBlock',
  height: '100px',
  width: '100px',
  backgroundColor: 'rgb(23, 23, 23)',
  margin: '.25rem'
};

function Blocks() {
  return (
    <Repeat>
      {(index) => <div style={divStyle} key={index}></div>}
    </Repeat>
  );
}

export default Blocks;