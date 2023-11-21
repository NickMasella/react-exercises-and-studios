import { useState } from 'react';

export default function BoardAssignment () {
   let board1 = {label: "sweets", value: "sweets"};
   let board2 = {label: "grandma's cooking", value:"grandma's cooking"};
   let board3 = {label: 'good stuff', value: "good stuff"};
   const boards = [board1, board2, board3];
   const [boardName, setName] = useState('no boards yet!');
   const handleChange = (event) => {
      setName(event.target.value) ;
   }
   
   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      <option value={"sweets"}>{"sweets"}</option>
      <option value={"grandma's cooking"}>{"grandma's cooking"}</option>
      <option value={"good stuff"}>{"good stuff"}</option>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
