
import React from "react";
import "./style/testimonials.css";
import Table from 'react-bootstrap/Table';
import AddModalTest from "./AddModalTest";
import { useState } from "react";
import EditModalTest from "./EditModalTest";



export const Testimonials = () => {

  const [isAddModalVisisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisisible, setIsEditModalVisible] = useState(false);

  const rows = [
    {
    Photo:"https://picsum.photos/200/300",
    Name:"Ahmed",
    Position:"IT Director",
    Opinion:"I started the journey with IEEE HSB since I was in the first year of my ..."
    },
    {
    Photo:"https://picsum.photos/200/300",
    Name:"Khaled",
    Position:"PR Director",
    Opinion:"I started the journey with IEEE HSB since I was in the first year of my ..."
    },
    {
    Photo:"https://picsum.photos/200/300",
    Name:"Samer",
    Position:"HR Director",
    Opinion:"I started the journey with IEEE HSB since I was in the first year of my ..."
    }
  ];

  return (
    <div className="testimonialsPage">

      <div className="testimonialsTitle">Testimonials</div>
  
      <Table striped="columns" bordered hover variant="dark" >
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Position</th>
            <th>Opinion</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {
            rows.map((row,idx) => {

              return <tr key={idx}>
                <td><img src={row.Photo} alt="testimonials-img" /></td>
                <td>{row.Name}</td>
                <td>{row.Position}</td>
                <td>{row.Opinion}</td>
                <td>
                  <div className="tableBtn">
                    <button className="editBtn Btn" onClick={()=> {setIsEditModalVisible(true)}}>Edit</button>
                    <button className="deleteBtn Btn">Delete</button>
                  </div>
                </td>
              </tr>
            })
          }

          
        </tbody>
      </Table>
        <button className="addBtn Btn" onClick={()=> {setIsAddModalVisible(true)}}>Add</button>


      <AddModalTest trigger={isAddModalVisisible}>

        <div className="modalBody">
          <img src="https://picsum.photos/200/300" alt="testimonial-img" />
          <div className="inputBoxs">
            <div className="inputBox">
            <span>Name</span>
            <input type="text" required />
            </div>
            <div className="inputBox">
            <span>Position</span>
            <input type="text" required />
            </div>
            <div className="inputBox">
            <span>Opinion</span>
            <input type="text" required />
            </div>
            <div className="inputBox">
            <span>Image</span>
            <input type="image" required  alt=""/>
            </div>
          </div>
        </div>

        <div className="modalFooter">
          <button className="closeBtn Btn" onClick={()=> setIsAddModalVisible(false)}>Close</button>
          <button type="submit" className="saveBtn Btn">Save</button>
        </div>

      </AddModalTest>

      <EditModalTest trigger={isEditModalVisisible}>

        <div className="modalBody">
          <img src="https://picsum.photos/200/300" alt="testimonial-img" />
          <div className="inputBoxs">
            <div className="inputBox">
            <span>Name</span>
            <input type="text" required />
            </div>
            <div className="inputBox">
            <span>Position</span>
            <input type="text" required />
            </div>
            <div className="inputBox">
            <span>Opinion</span>
            <input type="text" required />
            </div>
            <div className="inputBox">
            <span>Image</span>
            <input type="image" required  alt=""/>
            </div>
          </div>
        </div>

        <div className="modalFooter">
          <button className="closeBtn Btn" onClick={()=> setIsEditModalVisible(false)}>Close</button>
          <button type="submit" className="saveBtn Btn">Save</button>
        </div>

      </EditModalTest>

    </div>


    
  );
};
