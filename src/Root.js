import React from 'react';
import Clock from './Clock.js';
import Folder from './Folder.js';
import Weather from './Weather.js';
import Autocomplete from './Autocomplete.js';

// const folders = [
//   {title: 'one', content: 'I am the first'},
//   {title: 'two', content: 'Second folder here'},
//   {title: 'three', content: 'Third folder here'}
// ];

const Root = () => {

  const folders = [
    {title: 'one', content: 'I am the first'},
    {title: 'two', content: 'Second folder here'},
    {title: 'three', content: 'Third folder here'}
  ];
  return (
    <div className="widget-container">
      <Clock />
      <Weather />
      <Folder folders={folders}/>
      <Autocomplete names={["Cheese", "Burger"]}/>
    </div>
  )
};

export default Root;
