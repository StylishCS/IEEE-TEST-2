// import React from "react";
// import "./style/family.css";
// // import * as Yup from 'yup'
// import { useFormik } from 'formik'
// import { useState } from "react";
// import { useEffect } from "react";
const Family = () => {
  //   const [familyArray, setfamilyArray] = useState([]) // to put all members in array
  //   const [updateInfo, setupdateInfo] = useState(false) // to show pop up window to ubdate

  //   // initial Values of inputs in form
  //   let initialValues = {
  //     name: '',
  //     profile: '',
  //     rule: ''
  //   }

  //   // validation about inputs in form
  //   let validationSchema = Yup.object({
  //     name: Yup.string().min(3, 'Min Length Is 3').max('10', 'Max Length Is 10').required('Name Is Required'),
  //     profile: Yup.string().required('Must Add Phto'),
  //     rule: Yup.string().required('Must Add Rule')
  //   })

  //   // to clear inputs after submit

  //   function clearInputs() {
  //     document.getElementById('name').value = ''
  //     document.getElementById('profile').value = ''
  //     document.getElementById('rule').value = ''
  //   }

  //   // function that works when added new member
  //   function familySubmit(val) {
  //     setfamilyArray(prevArray => [...prevArray, val])
  //     clearInputs()
  //     setupdateInfo(true)
  //   }
  //   let familyFormik = useFormik({
  //     initialValues,
  //     validationSchema,
  //     onSubmit: familySubmit
  //   })
  //   // function familyUbdateSubmit(val) {

  //   // }
  //   // let familyMemberUbdate = useFormik({
  //   //   validationSchema,
  //   //   onSubmit: familyUbdateSubmit
  //   // })
  //   // to delete member
  //   function deleteMember(index) {
  //     let elementToRemove = familyArray[index]
  //     setfamilyArray(prev => prev.filter(elm => elm !== elementToRemove))
  //   }

  //   // to ubdate information of member
  //   function updateMember(index) {
  //     document.getElementById('nameUpdate').value = familyArray[index].name
  //     document.getElementById('prevImg').src = familyArray[index].profile
  //     console.log(familyArray[index].profile);
  //     document.getElementById('ruleUpdate').value = familyArray[index].rule
  //   }
  //   return <>
  //     <div>
  //       <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  //         + Add Member
  //       </button>

  //       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  //         <div className="modal-dialog">
  //           <div className="modal-content">
  //             <div className="modal-header">
  //               <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
  //               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //             </div>
  //             <form onSubmit={familyFormik.handleSubmit}>
  //               <div className="modal-body">
  //                 <input type="text" placeholder="Name" name="name" onChange={familyFormik.handleChange} onBlur={familyFormik.handleBlur} id="name" className="form-control my-3" />
  //                 {familyFormik.errors.name && familyFormik.touched.name ? <div className='alert alert-danger p-2 mt-3'>{familyFormik.errors.name}</div> : null}

  //                 <input type="file" placeholder="ٌProfile Image" name="profile" onChange={familyFormik.handleChange} onBlur={familyFormik.handleBlur} id="profile" className="my-3 form-control" />
  //                 {familyFormik.errors.profile && familyFormik.touched.profile ? <div className='alert alert-danger p-2 mt-3'>{familyFormik.errors.profile}</div> : null}

  //                 <input type="text" placeholder="Rule" name="rule" onChange={familyFormik.handleChange} onBlur={familyFormik.handleBlur} id="rule" className="form-control my-3" />
  //                 {familyFormik.errors.rule && familyFormik.touched.rule ? <div className='alert alert-danger p-2 mt-3'>{familyFormik.errors.rule}</div> : null}

  //               </div>
  //               <div className="modal-footer">
  //                 <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  //                 <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="container">
  //         {familyArray == '' ? <div className="text-center">
  //           <p className="fs-4 fw-bolder">There is no member....</p>
  //         </div> : <table className="table text-center">
  //           <thead className="">
  //             <th>Photo</th>
  //             <th>Name</th>
  //             <th>Rule</th>
  //             <th>Action</th>
  //           </thead>
  //           <tbody>
  //             {
  //               familyArray.map((elm, index) =>

  //                 <tr key={index}>
  //                   <td className="text-info">
  //                     <img src={elm.profile} alt="profile image" className="w-100" />
  //                   </td>
  //                   <td>{elm.name}</td>
  //                   <td>{elm.rule}</td>
  //                   <td>
  //                     <button className="btn btn-danger mx-1" onClick={() => deleteMember(index)}>Delete</button>
  //                     <button type="button" className="btn btn-dark">
  //                       Update
  //                     </button>
  //                   </td>
  //                 </tr>
  //               )
  //             }
  //           </tbody>
  //         </table>}
  //       </div>
  //     </div >

  //   </>;
  return <h1>hi</h1>;
};

export default Family;
