import React from 'react'; 
import epustak from '../img/E-Library.png';
import IIIT_logo from '../img/IIIT_LOGO.png';
import 'bootstrap/dist/css/bootstrap.min.css';

  
function Home (){ 
    return (
        <div >
            <div className="container1" >
                <h1>IIIT BHUBANESWAR</h1>
                {/* <img src={IIIT_logo} style={{ alignSelf: 'center', width: 100 }}></img> */}
            </div>
            <div className="container2">
                <h3>E-Pustak</h3>
                <h3>BookShop Automation System</h3>
                <p>E-Pustak is a book shop automation which help us to automate all operations in a bookshop.it includes Book Allotted to a Student, Stock Management and Accounts Management. Here we are trying to develop such type of system which will provide automation on any type of the bookshop</p>
            </div>
            <div className='container3'>
                
                <p><img src={epustak} width="220"></img>Welcome to Central Library, IIIT Bhubaneswar, a very special place in IIIT Campus. The Central Library, IIIT Bhubaneswar started in 29th November 2010. As an integral part of the institute, the library has been playing very significant role in supporting the academic and research activities. It is a fully automated library with Internet and Intranet connections with a team of professionally qualified staff members, manages the Library. The library houses more than 33,000 books covering all disciplines of Science, Engineering & Information Technology. Apart from the print books, the Central Library achieved phenomenal progress in the subscription of e-resources by subscribing 1,50,000 of e-books and 7+ e-resources (full text as well as bibliographical databases) to its digital collection making "24 x 7 Library" in real scene on institute-wide network and off-campus access to e-resources. All the housekeeping operations of the library are fully computerized by using HIBISCUS, an open sourced academic information system.</p>
            </div>
           
        </div>    
    );
     
} 
  
export default Home; 