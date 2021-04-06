import React from 'react';
import './App.css';


const title = 'New Italian brand';
const img = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.luxury-sports-cars.com%2Fwp-content%2Fuploads%2F2016%2F08%2F10-luxurious-cars-best-photos-3.jpg&f=1&nofb=1';
const description = 'This is our fantastic car of 2021, perfect for exigent clients around the world.';


function App() {
  return (
    <div className="container">
      <Card motor='green energy'/>
      <Card color='orange'/>
      <Book1 />
      <Book2 />
      <Book3 />
      <Book4 />
    </div>
  );
}

const Card = (props) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <img src={img} alt=''/>
      <div>{description}</div>
       <p className="motor">{props.motor}</p>
       <p className="color">{props.color}</p>
    </div>
  );
}

const Book1 = ( ) => {
  return (
    <div className="card_books">
       <img src={ imgBook1 } alt=''/>
       <br></br>
       <br></br>
       <div className="title_book"><p>{titleBook1}</p></div>
       <br></br>
       <p>{author1}</p>
    </div>
  );
}

const imgBook1 = 'https://images-na.ssl-images-amazon.com/images/I/51O5MbvmHJL._SX404_BO1,204,203,200_.jpg';
const titleBook1 = 'Angular for Enterprise-Ready Web Applications: Build and deliver production-grade and cloud-scale';
const author1 = 'Doguhan Uluca';

const Book2 = ( ) => {
  return (
    <div className="card_books">
       <img src={ imgBook2 } alt=''/>
       <br></br>
       <br></br>
       <div className="title_book"><p>{titleBook2}</p></div>
       <br></br>
       <p>{author2}</p>
    </div>
  );
}

const imgBook2 = 'https://images-na.ssl-images-amazon.com/images/I/51noIwSubgL._SX404_BO1,204,203,200_.jpg';
const titleBook2 = 'React and React Native: A complete hands-on guide to modern web and mobile development with React.js';
const author2 = 'Adam Boduch';

const Book3 = ( ) => {
  return (
    <div className="card_books">
       <img src={ imgBook3 } alt=''/>
       <br></br>
       <br></br>
       <div className="title_book"><p>{titleBook3}</p></div>
       <br></br>
       <p>{author3}</p>
    </div>
  );
}

const imgBook3 = 'https://m.media-amazon.com/images/I/4108SQnlGiL._AC_UY327_FMwebp_QL65_.jpg';
const titleBook3 = 'Ionic 5: Create awesome apps for iOS, Android, Desktop and Web';
const author3 = 'Andreas Dormann ';

const Book4 = ( props ) => {
  return (
    <div className="card_books">
       <img src={ fourthBook.img} alt=''/>
       <br></br>
       <br></br>
       <div className="title_book"><p>{ fourthBook.title}</p></div>
       <br></br>
       <p>{ fourthBook.author}</p>
    </div>
  );
}



const fourthBook= {
  img: 'https://m.media-amazon.com/images/I/4108SQnlGiL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'Ionic 5: Create awesome apps for iOS, Android, Desktop and Web',
  author:'Andreas Dormann'
}




export default App;
