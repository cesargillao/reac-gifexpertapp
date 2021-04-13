import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
   // const categories = [
   //    'One Punch',
   //    'Samurai X',
   //    'Dragon Ball'
   // ];

   const [categories, setCategories] = useState(['One Punch']);

   // const handleAdd = () => {
   //    setCategories([...categories, 'Naturo']);
   //    // setCategories(['Naturo', ...categories]);
   //    // setCategories(categories => [...categories, 'Naturo']);
   // }

   return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={ setCategories } />
         {/* <button onClick={ handleAdd }>Agregar</button> */}
         <hr />
         {
            categories.map(category => (
               <GifGrid 
                  key={ category }
                  category={ category }
               />
            ))
         }
      </>
   )
}

export default GifExpertApp
