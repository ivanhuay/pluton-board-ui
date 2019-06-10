import React, {useState} from 'react';
import Input from '../input';
import PropTypes from 'prop-types';
const FormNewBoard = ({onSubmit}) => {
  const [value, setValue] = useState('');
  return (
      <div>
          <Input onChange={(e)=>setValue(e.target.value)} value={value} />
          <button onClick={()=>{onSubmit({title: value})}}>Create</button>
      </div>
    );
};

FormNewBoard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormNewBoard;
