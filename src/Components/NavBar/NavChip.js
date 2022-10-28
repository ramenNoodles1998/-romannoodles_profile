import './NavBar.css';
//TODO: add background and on click reveal website.
function NavChip(props) {
    return (
        <div className="bg-color-gray-900 cursor-pointer text-white font-mono border-2 border-gray-400 m-3 p-3 rounded-full">
           { props.chipName} 
        </div>
    );
}

export default NavChip;