import React, { useState } from 'react'
import NavyBar from './NavyBar'
import "../my-stu-mar.css"
import axios from 'axios'
export default function AddStudent() {
 const [rollno,setRollNo]=useState('')
 const [name,setName]=useState('')
 const [Fee,setfee]=useState('')
 const [MathsMarks,setMathsMarks]=useState('')
 const [EnglishMarks,setEnglishMarks]=useState('')
 const [SocialMarks,setSocialMarks]=useState('')
 const [Course,setCourse]=useState('')
const saveStu=(e: FormDataEvent)=>{
    e.preventDefault();
    console.log("submit button clicked!!!")
    console.log("RollNo....>"+rollno)
    console.log("name....>"+name)
    console.log("fee....>"+Fee)
    console.log("mathsmarks....>"+MathsMarks)
    console.log("englishmarks....>"+EnglishMarks)
    console.log("socialmarks....>"+SocialMarks)
    console.log("Course....>"+Course)
    const student={rollno,name,Fee,MathsMarks,EnglishMarks,SocialMarks,Course}
    axios.post("http//localhost:8080/stu/mng/add",student)
  };
  const getRollNo=(e:any)=>{
    setRollNo(e.target.value)
}
const getName=(e:any)=>{
  setName(e.target.value)
}
const getFee=(e:any)=>{
  setfee(e.target.value)
}
const getMathsMarks=(e:any)=>{
  setMathsMarks(e.target.value)
}
const getEnglishMarks=(e:any)=>{
  setEnglishMarks(e.target.value)
}
const getSocialMarks=(e:any)=>{
  setSocialMarks(e.target.value)
}
const getCourse=(e:any)=>{
  setCourse(e.target.value)
}
  
  return (
    <div>
<NavyBar />
<form 
onSubmit={saveStu}
className="Stu-add-mar">
  <div className="form-group">
    <label>Roll No</label>
    <input type="text" className="form-control"
    onChange={getRollNo}
     id="exampleInputEmail1" aria-describedby="emailHelp"
      placeholder="Enter Roll No"/>
 </div>
 <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control"
    onChange={getName}
     id="exampleInputEmail1" aria-describedby="emailHelp"
      placeholder="Enter Name"/>
 </div>
 <div className="form-group">
    <label>Fee</label>
    <input type="text" className="form-control"
    onChange={getFee}
     id="exampleInputEmail1" aria-describedby="emailHelp"
      placeholder="Enter Fee"/>
 </div>
 <div className="form-group">
    <label>MathsMarks</label>
    <input type="text" className="form-control"
    onChange={getMathsMarks}
     id="exampleInputEmail1" aria-describedby="emailHelp"
      placeholder="Enter Maths Marks"/>
 </div>
 <div className="form-group">
    <label>EnglishMarks</label>
    <input type="text" className="form-control"
    onChange={getEnglishMarks}
     id="exampleInputEmail1" aria-describedby="emailHelp"
      placeholder="Enter English Marks"/>
 </div>
 <div className="form-group">
    <label>SocialMarks</label>
    <input type="text" className="form-control"
    onChange={getSocialMarks}
     id="exampleInputEmail1" aria-describedby="emailHelp"
      placeholder="Enter Social Marks"/>
 </div>
 <div className="form-group">
    <label>Course</label>
    <input type="text" className="form-control"
    onChange={getCourse}
     id="exampleInputEmail1" aria-describedby="emailHelp"
      placeholder="Enter Course"/>
 </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
          

  )
}