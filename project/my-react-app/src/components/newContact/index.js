import React from "react";
import "./index.css";

const newContact = ({ loadAgain }) => {

    const addContact = async (event) => {
        event.preventDefault();

        const name = document.getElementById("addName").value;
        const number = document.getElementById("addNumber").value;
        try {
            await window.fetch("http://plato.mrl.ai:8080/contacts/add", {
                method: "POST",
                headers: {
                    api: "powell",
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    number: number
                })
            })
            loadAgain()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div class="form">
            <h2>Create A Contact:</h2>
            <h3>Please add your name and number below<br></br><br></br>  Select the "create contact" located on the bottom right.<br></br><br></br>  Thank you.</h3>
            <form method="POST">
                <div>
                    <input required="required" id="addName" type="text" placeholder="Enter Name" />
                    <input required="required" id="addNumber" type="tel" placeholder="Enter # (000-000-0000)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                    <button className="button" type="submit" onClick={addContact}>Create Contact</button>
                </div>
            </form>
        </div>
    );
}

export default newContact;
