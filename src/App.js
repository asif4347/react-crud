import React, {useState} from 'react';
import './App.css';
// import './Components/UserTable'
import UserTable from "./Components/UserTable";
import AddUserForm from './Components/AddUserForm'
import './Components/EditUserForm'
import EditUserForm from "./Components/EditUserForm";

const App = () => {
    const usersData = [
        {id: 1, name: 'Tania', username: 'floppydiskette'},
        {id: 2, name: 'Craig', username: 'siliconeidolon'},
        {id: 3, name: 'Ben', username: 'benisphere'},
    ]
    const initialFormState = {id: null, name: '', username: ''}
    const [users, setUsers] = useState(usersData);
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const [editing, setEditing] = useState(false);
    const editRow = user => {
        setEditing(true)
        setCurrentUser({id: user.id, name: user.name, username: user.username})
    }
    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    }
    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }
    const updateUser = (id, updateUser) => {
        setEditing(false)
        setUsers(users.map(user => user.id === id ? updateUser : user))
    }
    console.log(users)
    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                {editing ? (
                    <div className="flex-large">
                        <h2>Edit user</h2>
                        <EditUserForm
                            editing={editing}
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateUser={updateUser}
                        />
                    </div>
                ) : (
                    <div className="flex-large">
                        <h2>Add user</h2>
                        <AddUserForm
                            addUser={addUser}
                        />
                    </div>
                )}

                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable
                        users={users}
                        deleteUser={deleteUser}
                        editRow={editRow}
                    />
                </div>
            </div>
        </div>
    )
}
export default App;
