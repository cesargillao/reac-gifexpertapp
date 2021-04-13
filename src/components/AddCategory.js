import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

   const [inputValue, setInputValue] = useState('');

   const handleInputChange = (e) => {
      setInputValue(e.target.value);
   }

   const hanldleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim().length > 2) {
         setCategories(c => [inputValue, ...c]);
         // console.log('Submit Hecho');
         setInputValue('');
      }
   }

   return (
      <form onSubmit={ hanldleSubmit }>
         <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
         />
      </form>
   )
}

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired
}