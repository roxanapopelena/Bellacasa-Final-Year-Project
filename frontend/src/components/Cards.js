import React from 'react';
import './assets/styles/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Take a look at our services and available products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ANTIOPE.jpg'
              text='The Classen doors are our best-seller, locally and worldwide. These doors are knows for having a lot of variation in order to meet your design needs and make them blend with the rest of your home. Clients have the ability to choose from an impressing variety, select the color, structure and the design of the door.'
              label='Classen Doors'
              path='/Catalogue/category/Andromeda'
            />
            <CardItem
              src='images/NaturaHR.jpg'
              text='Our metalic doors give a sturdier feel to every room, making you house or apartment feel robust and durable. This range of doors comes in many variations of color and dimension.'
              label='Metalic Doors'
              path='/Catalogue/category/Metalic%20doors'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Venis.jpg'
              text='The woodwork that we provide has a high durability rate and is of an impressing natural beauty. It is very easy to mentain and the selection if very large.'
              label='Quality woodwork'
              path='/Catalogue/category/Arteo'
            />
            <CardItem
              src='images/Bathtub.jpg'
              text='Take some off-time in one of our bath tubs and experience the relaxation of a spa day in the comfort of your own home.'
              label='Bath Tubs'
              path='/Catalogue/category/Freestanding'
            />
            <CardItem
              src='images/Tosca.jpg'
              text='Choose to further personalize the look of your home by implementing some of our accessories.'
              label='Accessories'
              path='/Catalogue/category/2021'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
