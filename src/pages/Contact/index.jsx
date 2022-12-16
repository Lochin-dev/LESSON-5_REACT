import React, { useState } from "react";
import "./style.scss"
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {

   const [task, setTask] = useState([]);
   const [title, setTitle] = useState("");
   const [faml, setFaml] = useState("");
   const [num, setNum] = useState("");
   const [date, setDate] = useState("");
 
   const addTask = () => {
     const chack = {
       ism: title.trim().length === 0,
       faml: faml.trim().length === 0,
       num: num.trim().length === 0,
       date: date.trim().length === 0,
     };
 
     if (chack.ism || chack.faml || chack.num || chack.date) {
       toast.error("Iltimos malumotni kiriting:", {
         position: "top-right",
         autoClose: 1000,
       });
     } else {
       const newTask = {
         id: uuidv4(),
         ism: title,
         faml: faml,
         num: num,
         date: date,
       };
       setTask([...task, newTask]);
       setTitle("");
       setFaml("");
       setNum("");
       setDate("");
       toast.success("Malumot joylandi:", {
         position: "top-right",
         autoClose: 1000,
       });
     }
   };
 
   const deletTask = (id) => {
     const filterTask = task.filter((e) => {
       return e.id !== id;
     });
     setTask(filterTask);
     toast.info("Malumot o'chirildi:", {
       position: "top-right",
       autoClose: 1000,
     });
   };

   return (
      <>
          <ToastContainer />
      <div className="container">
        <div className="card">
          <form className="form" action="#" onSubmit={() => addTask()}>
            <label htmlFor="title">
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Ismingizni kiriting:"
              />
            </label>
            <label htmlFor="title">
              <input
                onChange={(e) => setFaml(e.target.value)}
                value={faml}
                type="text"
                placeholder="Familiyangizni kiriting:"
              />
            </label>
            <label htmlFor="title">
              <input
                onChange={(e) => setNum(e.target.value)}
                value={num}
                type="number"
                placeholder="Nomer kiriting:"
              />
            </label>
            <label htmlFor="title">
              <input
                onChange={(e) => setDate(e.target.value)}
                value={date}
                type="date"
                placeholder="Date kiriting:"
              />
            </label>

            <button className="form_btn" type="submit">
              JOYLASH
            </button>
          </form>
        </div>
        <div className="card">
          <table className="table table-sm table-dark table-striped table-hover table-bordered table-responsiv">
            <thead>
              <tr>
                <td>ID</td>
                <td>Familiya</td>
                <td>Ism</td>
                <td>Nomer</td>
                <td>Date</td>
                <td>Remove</td>
              </tr>
            </thead>
            <tbody>
              {task.length > 0
                ? task.map((el, i) => {
                    return (
                      <tr key={el.id}>
                        <td>{i + 1}</td>
                        <td>{el.faml}</td>
                        <td>{el.ism}</td>
                        <td>{el.num}</td>
                        <td>{el.date}</td>
                        <td>
                          <button
                            onClick={() => deletTask(el.id)}
                            className="btn btn-danger"
                          >
                            remove
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : "NOTE FOUNG"}
            </tbody>
          </table>
        </div>
      </div>
      </>
   )
}

export default index