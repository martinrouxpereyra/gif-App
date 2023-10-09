import { useState } from 'react';
import { AddCategory, GifGrid } from './components';//poner /index es redundante

export const GifApp = () => {
  const [categories, setCategories] = useState(['John Cena']);
  
  const onAddCategory = (newCategory) =>{
  
    if(categories.includes(newCategory)) return;
  
    setCategories([newCategory, ...categories ]);
  }

  return (
    <>

      <h1>Gif APP</h1>

      <AddCategory
        //setCategories={setCategories}
        onNewCategory={ (value) => onAddCategory(value) }
      />


      {
        categories.map((category) => (
          <GifGrid key={category} category={category}/> 
        ))
      }   


    </>
  )
}
