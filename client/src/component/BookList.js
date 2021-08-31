import React from 'react';
import { getUser, removeUserSession } from '../Utils/Common';
 
function BookList(props) {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
  const handleLogout1 = () => {
    props.history.push('/BookList1');
  }
  const handleLogout2 = () => {
    props.history.push('/BookList2');
  }
  const handleLogout3 = () => {
    props.history.push('/BookList3');
  }

  return (
    <div>
      BOOK
      <div className="container4">
      <h1>
      <br />Welcome!<br /> {user}(CSE)<br />Fourth Semester
      <br /><button  onClick={handleLogout}>Logout </button></h1>
      </div><br />
      <h3>Now In Stock:12</h3>
      <h3>This Fourth Semester, We have a total of twelve Books in which each student is alloted with six books only.<br />Student will have to choose any Two from Computer Category, Three from Science Category(Math is compulsory) and One from Others Category.
        <br />Books with same number represents that you have to choose one book among them.
      </h3>
        <div className="container6">
          <button className='btn'  onClick={handleLogout1}>Computer Books </button>
          <h4><br />Here we have books related to computer science.<br />Like Data Strucutre, Programming language etc.</h4>
        </div>
        <br />
        <div className="container7">
          <button  className='btn' onClick={handleLogout2}>Science Books </button> <h4><br />Here we have books regarding science.<br />Like Electronics, Math, Physics etc.</h4></div>
          
         <br />
        <div className="container8">
          <button className='btn' onClick={handleLogout3}>Others Books </button>
          <h4><br />Here we have books regarding optional courses.<br />Like Economics.</h4>
        </div>
    </div>
  );
}
 
export default BookList;