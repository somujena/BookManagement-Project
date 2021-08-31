import React from 'react';
import Axios from 'axios';

import C from '../img/CS/C.jpg'
import COA from '../img/CS/COA.jpg'
import DBMS from '../img/CS/DBMS.jpg'
import DSA from '../img/CS/DSA.jpg'

import { getUser } from '../Utils/Common';

function BookList1(props) {
    const book1 = "935316513X";
    const book2 = "9789332570405";
    const book3 = "9351282015";
    const book4 = "819324527X";

    const user = getUser();
    
    const handleLogout = () => {
        props.history.push('/BookList');
      }
    const myfunction1 = () => {
        console.log("CLICKED1");
        Axios.put('http://localhost:3001/updateCS1', {
                USER: user,
                BOOK: book1,
        }).then (() => {               
        })
        alert("This book has been added to your list.");
    }

    const myfunction2 = () => {
        console.log("CLICKED2");
        Axios.put('http://localhost:3001/updateCS2', {
                USER: user,
                BOOK: book2,
        }).then (() => {               
        })
        alert("This book has been added to your list.");

    }
    const myfunction3 = () => {
        console.log("CLICKED3");
        Axios.put('http://localhost:3001/updateCS2', {
                USER: user,
                BOOK: book3,
        }).then (() => {               
        })
        alert("This book has been added to your list.");

    }
    const myfunction4 = () => {
        console.log("CLICKED4");
        Axios.put('http://localhost:3001/updateCS1', {
                USER: user,
                BOOK: book4,
        }).then (() => {               
        })
        alert("This book has been added to your list.");

    }
    return(
    <div>
        <button  onClick={handleLogout}>Go Back </button>
        <h1>Computer Books</h1>
        <div className="container9">
            
            <button className="btn"><span class="numberCircle"><span>1</span></span><img src={C} style={{ width: 150, height: 220}} onClick={myfunction1} /><br />BooK now</button>
            
            <button className="btn1"><span class="numberCircle"><span>2</span></span><img src={COA} style={{ width: 150, height: 220}} onClick={myfunction2} /><br />BooK now</button>
            <button className="btn2"><span class="numberCircle"><span>2</span></span><img src={DBMS} style={{ width: 150, height: 220}} onClick={myfunction3} /><br />BooK now</button>
            <button className="btn3"><span class="numberCircle"><span>1</span></span><img src={DSA} style={{ width: 150, height: 220}} onClick={myfunction4} /><br />BooK now</button>
            
            <h3><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />&emsp;&emsp;&nbsp;&emsp;&emsp;Programming in Ansi C&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer Organizing&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Structured Query
                <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; and Architecture
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Language<br />
                &emsp;&emsp;&emsp;&nbsp;&emsp;E. BALAGURUSWAMY&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;WILLIAN STALLINGS &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;KRITI SHINA
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />&emsp;&emsp;&emsp;&emsp;&emsp;DATA STRUCURES<br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;and Algorithms<br />
                &emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;N. KARUMANCHI
            </h3>
            
        </div>
      

    </div>
     );
}

 
export default BookList1;