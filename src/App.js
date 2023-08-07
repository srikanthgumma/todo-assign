import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'


function Todo_Assignment() {


    let [val, setVal] = useState('');
    let [tododata, setData] = useState([]);
    let [neww, setneww] = useState(false);



    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/1/todos").then((val) => {
            setData(val.data);
        })
    }, []);

    useEffect(() => {
        if (val != '') {

            axios.post("https://jsonplaceholder.typicode.com/users/1/todos", {
                userId: 1,
                id: 20,
                title: val,
                completed: true
            }).then((varo) => {
                // setData(varo.data)
                setData([...tododata, varo.data])

            })
        }


    }, [val])

    const submitAction = (e) => {
        e.preventDefault();
        //    console.log(e);
        if (e.target[0].value !== '') {
            setVal(e.target[0].value)

            // setData([...tododata, adddata]);
        } else {
            alert("Should not be empty")
        }
        e.target[0].value = '';
    }
    console.log(tododata);

    const editing = (titleval, id) => {
        let newvalue = prompt(`Edit the value ${titleval}`)
        if (newvalue !== '') {
            let namee = {
                userId: 1,
                id: id + 1,
                title: newvalue,
                completed: true
            }
            tododata.splice(id, 1, namee);
            // axios.put(`https://jsonplaceholder.typicode.com/users/1/todos?id=${id}`,namee).then((be)=>{
            //     console.log(be);
            //     setData([...tododata, be.data])
            // })
            setData([...tododata])

        }
    }

    const deleting = (id) => {
        // axios.delete(`https://jsonplaceholder.typicode.com/users/1/todos?id=${Number(id)}`).then((vall) => {
        // console.log(vall.data)
        // setData(vall.data);
        // })
        tododata.splice(id, 1);
        setData([...tododata])

    }

    console.log(tododata);



    let mapData = tododata.map((value, ind) => {
        return (
            <div id="todo" key={ind} style={{ backgroundColor: value.completed ? 'skyblue' : 'pink' }}>

                <div >

                    <span className="thickid">Id is {value.id} {"  "}</span><span className="thickstatus" style={{ fontSize: "10px" }}> Status - {value.completed ? "Completed" : <><span>Not Completed</span><input type="checkbox" placeholder="click" style={{ fontSize: "70px", width: "40px", height: "20px" }} onClick={(e,vali) => {
                        console.log(e.target.checked);
                        if (e.target.checked === true) {
                            value.completed = true;
                            let textDecoration='line-through';
                            value.title = <span style={{textDecoration:"line-through"}}>{value.title}</span>
                            setData([...tododata]);

                        }
                    }} /></>}</span>
                    <br />
                    <span id="sizefont"><span className="title">Title -</span> <span>{value.title}</span></span>
                    <div id="todobuttons">
                        <button onClick={() => editing(value.title, ind)}>EDIT</button>
                        <button onClick={() => deleting(ind)}>DELETE</button>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div >
            <h1 style={{ fontSize: "20px" }}>To-Do React App</h1>
            {/* <h3 style={{fontSize:"15px"}}>It does not take same values and empty values</h3> */}
            <form action="" onSubmit={submitAction} style={{ marginTop: '40px', width: "100%" }}>
                <input type="text" placeholder="Type something" id="inp" style={{ width: '70%', height: '40px' }} />
                <input type="submit" value='ADD' id="inp" style={{ width: '28%', height: '44px' }} />
            </form>
            <div id="mapdata">{mapData}</div>
        </div>


    );
}

export default Todo_Assignment;
