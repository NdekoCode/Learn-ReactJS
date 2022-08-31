import { useCallback } from "react";
import { useState } from "react"
import { Fade } from "./Fade";

export function FormUser () {
    const [usersData,setUsersData] = useState([]);
    const validField = ["firstname","lastname","email","password"];
    const  [formUser,setFormUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    });
    const addUser = (newUser)=>{

        
        setUsersData(user=>([...user,newUser]));
    }
    const handleChange = (evt)=>{
        const name = evt.target.name;
        const value = evt.target.value;
        if(validField.includes(name)) {
            setFormUser(userData=>({...userData, [name]:value}));
        }
    }
    const submit =useCallback((evt)=>{
        evt.preventDefault();
        addUser(formUser);

            setFormUser({
                firstname:"",
                lastname:"",
                email:"",
                password:""
            })
    },[formUser])
    return <div className="card">
    <form onSubmit={submit} className="card-body">
    <Fade visible={true}>
        {JSON.stringify(usersData)}
    </Fade>
    <div className="form-group">
            <label htmlFor="firstname">Prenom</label>
            <input value={formUser.firstname} onChange={handleChange} type="text" id="firstname" name="firstname"  placeholder="Entrer votre prenom" className="form-control" />
        </div>

        <div className="form-group">
            <label htmlFor="lastname">Nom</label>
            <input  value={formUser.lastname}  onChange={handleChange} type="text" id="lastname" name="lastname"  placeholder="Entrer votre nom" className="form-control" />
        </div>

        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input value={formUser.email}  onChange={handleChange} type="email" id="email" name="email"  placeholder="Entrer votre email" className="form-control" />
        </div> 
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input value={formUser.password}  autoComplete="true" onChange={handleChange} type="password" id="password" name="password"  placeholder="Entrer votre mot de passe" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Valider</button>
    </form>
    </div> 
}