import React from 'react';
import Axios from 'axios';

import ENG from '../img/Others/ENG.jpg';
import EE from '../img/Others/EE.jpg';
import CS from '../img/Others/CS.jpg';

import { getUser } from '../Utils/Common';

function BookList2(props) {
    const book1 = "8183711545";
    const book2 = "0070586705";
    const book3 = "110871644X";

    const user = getUser();

    const handleLogout = () => {
        props.history.push('/BookList');
    }
    const myfunction1 = () => {
        console.log("CLICKED1");
        Axios.put('http://localhost:3001/updateOthers', {
                USER: user,
                BOOK: book1,
        }).then (() => {               
        })
        alert("This book has been added to your list.");
    }
    const myfunction2 = () => {
        console.log("CLICKED2");
        Axios.put('http://localhost:3001/updateOthers', {
                USER: user,
                BOOK: book2,
        }).then (() => {               
        })
        alert("This book has been added to your list.");
    }
    const myfunction3 = () => {
        console.log("CLICKED3");
        Axios.put('http://localhost:3001/updateOthers', {
                USER: user,
                BOOK: book3,
        }).then (() => {               
        })
        alert("This book has been added to your list.");
    }
    return(<div>
        <button  onClick={handleLogout}>Go Back </button>
        <div className="container9">
            <button className="btn"><span class="numberCircle"><span>1</span></span><img src={ENG} style={{ width: 150, height: 220}} onClick={myfunction1} /><br />BooK now</button>
            <button className="btn1"><span class="numberCircle"><span>1</span></span><img src={EE} style={{ width: 150, height: 220}} onClick={myfunction2} /><br />BooK now</button>
            <button className="btn2"><span class="numberCircle"><span>1</span></span><img src={CS} style={{ width: 150, height: 220}} onClick={myfunction3} /><br />BooK now</button>
            <h3><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />&emsp;&emsp;&emsp;&emsp;English for Engineering&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;Engineering Economics&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;Communication Skills
                <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;for Engineering<br />
                &emsp;&emsp;&nbsp;&emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;N.P. Sudharshana&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;James Riggs &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;K.R. Lakshminarayanan<br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;C. Savitha&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;T. Murugavel
            </h3>
        </div>
        
    </div>
        
    );
}

 
export default BookList2;