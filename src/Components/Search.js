import { useRef } from "react";
import {Button, Form} from "react-bootstrap";
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
      data.current.value="";
    }
  
    return (
      <form onSubmit={formSubmitHandler} style={divStyle}>
        {/* <input type="text" ref={data} /> */}
        <Form.Control type="text" placeholder="Search City" ref={data} style={{marginRight:"5px"}}/>
        <Button type="submit">Search</Button>
      </form>
    );
  }

  export default Search;