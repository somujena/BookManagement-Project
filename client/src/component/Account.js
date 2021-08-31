import React from 'react';
import { useState } from "react";
import Axios from "axios";
import { getUser, removeUserSession } from '../Utils/Common';
 
function Account(props) {

  const [FirstName, setFName] = useState("");
  const [LastName, setLName] = useState(0);
  const [CPassword, setCPassword] = useState("");
  

  const [Book, setBook] = useState("");
  const [Book1, setBook1] = useState("");
  const [Book2, setBook2] = useState("");
  const [Book3, setBook3] = useState("");
  const [Book4, setBook4] = useState("");
  const [Book5, setBook5] = useState("");
  const [Book6, setBook6] = useState("");

  const [isbn1, setisbn1] = useState("");
  const [isbn2, setisbn2] = useState("");
  const [isbn3, setisbn3] = useState("");
  const [isbn4, setisbn4] = useState("");
  const [isbn5, setisbn5] = useState("");
  const [isbn6, setisbn6] = useState("");

  const [BookName1, setBookName1] = useState("");
  const [BookName2, setBookName2] = useState("");
  const [BookName3, setBookName3] = useState("");
  const [BookName4, setBookName4] = useState("");
  const [BookName5, setBookName5] = useState("");
  const [BookName6, setBookName6] = useState("");

  const [editon1, setediton1] = useState("");
  const [editon2, setediton2] = useState("");
  const [editon3, setediton3] = useState("");
  const [editon4, setediton4] = useState("");
  const [editon5, setediton5] = useState("");
  const [editon6, setediton6] = useState("");

  const [BookAuthor1, setBookAuthor1] = useState("");
  const [BookAuthor2, setBookAuthor2] = useState("");
  const [BookAuthor3, setBookAuthor3] = useState("");
  const [BookAuthor4, setBookAuthor4] = useState("");
  const [BookAuthor5, setBookAuthor5] = useState("");
  const [BookAuthor6, setBookAuthor6] = useState("");

  const [Publiher1, setPublisher1] = useState("");
  const [Publiher2, setPublisher2] = useState("");
  const [Publiher3, setPublisher3] = useState("");
  const [Publiher4, setPublisher4] = useState("");
  const [Publiher5, setPublisher5] = useState("");
  const [Publiher6, setPublisher6] = useState("");



  const books = {};
  var books_count = 0;

  const book1 = {};
  var book1_count = 0;

  const book2 = {};
  var book2_count = 0;

  const book3 = {};
  var book3_count = 0;

  const book4 = {};
  var book4_count = 0;
  
  const book5 = {};
  var book5_count = 0;

  const book6 = {};
  var book6_count = 0;


  const user = getUser();
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
  const ISBN = () => {
    console.log("in");
    Axios.post('http://localhost:3001/bookfetch', {
      USER: user,
    }).then ((response) => {
     setBook(response.data[0]);
    })
    for (var key in Book) {
      if (Book.hasOwnProperty(key)) {
           books[books_count] = Book[key];
           books_count++;
      }
    }
    console.log(Book);
    setisbn1(books[0]);
    setisbn2(books[1]);
    setisbn3(books[2]);
    setisbn4(books[3]);
    setisbn5(books[4]);
    setisbn6(books[5]);

    Axios.post('http://localhost:3001/book1', {
      isbn1: isbn1,
    }).then ((response) => {
     setBook1(response.data[0]);
    })
    for (var key in Book1) {
      if (Book1.hasOwnProperty(key)) {
           book1[book1_count] = Book1[key];
           book1_count++;
      }
    }
    setBookName1(book1[0]);
    setediton1(book1[3]);
    setBookAuthor1(book1[1]);
    setPublisher1(book1[2]);

    Axios.post('http://localhost:3001/book2', {
      isbn2: isbn2,
    }).then ((response) => {
     setBook2(response.data[0]);
    })
    for (var key in Book2) {
      if (Book2.hasOwnProperty(key)) {
           book2[book2_count] = Book2[key];
           book2_count++;
      }
    }
    setBookName2(book2[0]);
    setediton2(book2[3]);
    setBookAuthor2(book2[1]);
    setPublisher2(book2[2]);

    Axios.post('http://localhost:3001/book3', {
      isbn3: isbn3,
    }).then ((response) => {
     setBook3(response.data[0]);
    })
    for (var key in Book3) {
      if (Book3.hasOwnProperty(key)) {
           book3[book3_count] = Book3[key];
           book3_count++;
      }
    }
    setBookName3(book3[0]);
    setediton3(book3[3]);
    setBookAuthor3(book3[1]);
    setPublisher3(book3[2]);

    Axios.post('http://localhost:3001/book4', {
      isbn4: isbn4,
    }).then ((response) => {
     setBook4(response.data[0]);
    })
    for (var key in Book4) {
      if (Book4.hasOwnProperty(key)) {
           book4[book4_count] = Book4[key];
           book4_count++;
      }
    }
    setBookName4(book4[0]);
    setediton4(book4[3]);
    setBookAuthor4(book4[1]);
    setPublisher4(book4[2]);

    Axios.post('http://localhost:3001/book5', {
      isbn5: isbn5,
    }).then ((response) => {
     setBook5(response.data[0]);
    })
    for (var key in Book5) {
      if (Book5.hasOwnProperty(key)) {
           book5[book5_count] = Book5[key];
           book5_count++;
      }
    }
    setBookName5(book5[0]);
    setediton5(book5[3]);
    setBookAuthor5(book5[1]);
    setPublisher5(book5[2]);

    Axios.post('http://localhost:3001/book6', {
      isbn6: isbn6,
    }).then ((response) => {
     setBook6(response.data[0]);
    })
    for (var key in Book6) {
      if (Book6.hasOwnProperty(key)) {
           book6[book6_count] = Book6[key];
           book6_count++;
      }
    }
    setBookName6(book6[0]);
    setediton6(book6[3]);
    setBookAuthor6(book6[1]);
    setPublisher6(book6[2]);
  }
  
  const del = () => {
    Axios.put('http://localhost:3001/setbook', {
      USER: user,
    }).then (() => {
    })
    setisbn1("");
    setisbn2("");
    setisbn3("");
    setisbn4("");
    setisbn5("");
    setisbn6("");

    setBookName1("");
    setBookName2("");
    setBookName3("");
    setBookName4("");
    setBookName5("");
    setBookName6("");

    setediton1("");
    setediton2("");
    setediton3("");
    setediton4("");
    setediton5("");
    setediton6("");

    setBookAuthor1("");
    setBookAuthor2("");
    setBookAuthor3("");
    setBookAuthor4("");
    setBookAuthor5("");
    setBookAuthor6("");

    setPublisher1("");
    setPublisher2("");
    setPublisher3("");
    setPublisher4("");
    setPublisher5("");
    setPublisher6("");

    alert("Your BookList has been deleted! You may choose again.");
  }

  return (
    <div>
      <div className='container10'>
      <h1>
      <br /><br />Welcome {user}(CSE)!
      <br /><button  onClick={handleLogout}>Logout </button></h1>
      </div>
      <h3>Books are allocated in such a way that students can choose two books from Computer Books category, three books from Science Books category(Math is compulsory) and one from Other Books category. </h3>
      <button  onClick={ISBN}>Show Books </button> &emsp;<button  onClick={del}>DELETE </button>
      
      <div>
        <style dangerouslySetInnerHTML={{__html: "\n#customers {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#customers tr:nth-child(even){background-color: #f2f2f2;}\n#customers tr:nth-child(odd){background-color: #f2f2f2;}\n\n#customers tr:hover {background-color: #ddd;}\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: bold;\n  font-size: 20px;\n  margin: 10px;\n}\n" }} />
        <br/><table id="customers">
          <tbody>
            <tr>
              <th>Book No's</th>
              <th>ISBN</th>
              <th>Book Name</th>
              <th>Edition</th>
              <th>Book Author</th>
              <th>Publiher</th> 
            </tr>
            <tr>
              <td>1</td>
              <td>{isbn1}</td>
              <td>{BookName1}</td>
              <td>{editon1}</td>
              <td>{BookAuthor1}</td>
              <td>{Publiher1}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{isbn2}</td>
              <td>{BookName2}</td>
              <td>{editon2}</td>
              <td>{BookAuthor2}</td>
              <td>{Publiher2}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{isbn3}</td>
              <td>{BookName3}</td>
              <td>{editon3}</td>
              <td>{BookAuthor3}</td>
              <td>{Publiher3}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{isbn4}</td>
              <td>{BookName4}</td>
              <td>{editon4}</td>
              <td>{BookAuthor4}</td>
              <td>{Publiher4}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{isbn5}</td>
              <td>{BookName5}</td>
              <td>{editon5}</td>
              <td>{BookAuthor5}</td>
              <td>{Publiher5}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>{isbn6}</td>
              <td>{BookName6}</td>
              <td>{editon6}</td>
              <td>{BookAuthor6}</td>
              <td>{Publiher6}</td>
            </tr>
            
          </tbody></table>
      </div>
    </div>
  );
}
 
export default Account;