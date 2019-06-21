import React, {useState} from 'react';
import Input from '../input';
import PropTypes from 'prop-types';
import Button from '../Button';
const FormNewBoard = ({onSubmit}) => {
  const [value, setValue] = useState('');
  return (
      <div>
          <Input onChange={(e)=>setValue(e.target.value)} value={value} />
          <Button onClick={()=>{onSubmit({title: value})}}>Create</Button>
      </div>
    );
};

FormNewBoard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormNewBoard;
