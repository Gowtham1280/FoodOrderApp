import React from 'react';
import MealList from './MealList';
import classes from './AvailableMeals.module.css';
import Card from './Card';

const Dummy_Items=[

    {id:'1',name:'Biryani',description:'Hyderbad biryani is famous',price:240},
    {id:'2',name:'Legs',description:'you can have crunchy food',price:840},
    {id:'3',name:'Wings',description:'every bite of wing is delicious',price:990},
    {id:'4',name:'panneer',description:'might good for the health',price:130},

];

function AvailableMeal(){

    const mealList=Dummy_Items.map((items)=><MealList key={items.id} id={items.id} name={items.name} description={items.description}
                                                       price={items.price}/> );

    return <section className={classes.meals}>
      <Card>
        <ul> {mealList} </ul>
      </Card>
    </section>

}

export default AvailableMeal;


