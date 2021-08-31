import React from 'react';
import Axios from 'axios';

import CHEM from '../img/PCM/CHEMISTRY.jpg';
import DEC from '../img/PCM/DEC.jpg';
import ETRN from '../img/PCM/ELECTRONICS.jpg';
import math from '../img/PCM/math.jpg';
import PHY from '../img/PCM/PHYSICS.jpg';
import MECH from '../img/PCM/MECH.jpg';

import { getUser } from '../Utils/Common';

function BookList3(props) {
    const book1 = "9384588024";
    const book2 = "9788126514663";
    const book3 = "9781316632932";
    const book4 = "8184875606";
    const book5 = "9352606957";
    const book6 = "9789332584747";

    const user = getUser();

    const handleLogout = () => {
        props.history.push('/BookList');
      }
    const myfunction1 = () => {
        console.log("CLICKED1");
        Axios.put('http://localhost:3001/updatePCM2', {
                USER: user,
                BOOK: book1,
        }).then (() => {               
        })
        alert("This book has been added to your list.");
    }
    const myfunction2 = () => {
        console.log("CLICKED2");
        Axios.put('http://localhost:3001/updatePCM3', {
                USER: user,
                BOOK: book2,
        }).then (() => {               
        })
        alert("This book has been added to your list.");
    }
    const myfunction3 = () => {
        console.log("CLICKED3");
        Axios.put('http://localhost:3001/updatePCM3', {
                USER: user,
                BOOK: book3,
        }).then (() => {               
        })
        alert("This book has been added to your list.");
    }
    const myfunction4 = () => {
        console.log("CLICKED4");
        Axios.put('http://localhost:3001/updatePCM1', {
                USER: user,
                BOOK: book4,
        }).then (() => {               
        })
        alert("This book has been added to your list.");
    }
    const myfunction5 = () => {
        console.log("CLICKED5");
        Axios.put('http://localhost:3001/updatePCM2', {
                USER: user,
                BOOK: book5,
        }).then (() => {               
        })
        alert("This book has been added to your list.");
    }
    const myfunction6 = () => {
        console.log("CLICKED6");
        Axios.put('http://localhost:3001/updatePCM2', {
                USER: user,
                BOOK: book6,
        }).then (() => {               
        })
        alert("This book has been added to your list.");
    }
    return(
    <div>
        <button  onClick={handleLogout}>Go Back </button>
        <h1>Science Books</h1>
        <div className="container9">
            <button className="btn"><span class="numberCircle"><span>2</span></span><img src={CHEM} style={{ width: 150, height: 220}} onClick={myfunction1} /><br />BooK now</button>
            <button className="btn1"><span class="numberCircle"><span>3</span></span><img src={DEC} style={{ width: 150, height: 220}} onClick={myfunction2} /><br />BooK now</button>
            <button className="btn2"><span class="numberCircle"><span>3</span></span><img src={ETRN} style={{ width: 150, height: 220}} onClick={myfunction3} /><br />BooK now</button>
            <button className="btn3"><span class="numberCircle"><span>1</span></span><img src={math} style={{ width: 150, height: 220}} onClick={myfunction4} /><br />BooK now</button>
            <button className="btn4"><span class="numberCircle"><span>2</span></span><img src={PHY} style={{ width: 150, height: 220}} onClick={myfunction5} /><br />BooK now</button>
            <button className="btn5"><span class="numberCircle"><span>2</span></span><img src={MECH} style={{ width: 150, height: 220}} onClick={myfunction6} /><br />BooK now</button>
            <h3><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />&emsp;&emsp;&emsp;&emsp;&nbsp;Engineering Chemistry&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;Digital Electronics&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Basic Electronics
                <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;R.V. Gadag&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;C. Saha &emsp;A. Halder
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;A.N. Shetty&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Anil K. Maini &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;D. Ganguly
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;Advanced Engineering&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Engineering Physics&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Engineering Mechanics
                <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Mathematics&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;H.K. Malik
                <br />
                &emsp;&emsp;&emsp;&emsp;R.K. Jain &nbsp; S.R.K. Iyengar&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;A.K. Singh&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;R.C. Hibbeler
            </h3>
        </div>
        
    </div>
        
    );
}

 
export default BookList3;