import { useRef } from "react";
function Search(props) {
    const data = useRef('');
  
    const divStyle = {  
     marginTop:'10px',
     marginBottom:'10px',
     display:'flex',
     justifyContent:'space-between',
    }
  
    const formSubmitHandler = event => {
      event.preventDefault();
      props.onSearchdData(data.current.value);
    }
  
    return (
      <form onSubmit={formSubmitHandler} style={divStyle}>
        <input type="text" ref={data} />
        <button>Cari</button>
      </form>
    );
  }

  export default Search;