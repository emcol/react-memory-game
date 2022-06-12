import React, {useState} from "react";
import './Form.scss';

export const Form = ({onUserChange, onSubmit_game}) => {

    const [user, setUser] = useState('');

    const handleChange = ({ target }) => 
    {
        setUser(target.value);
        onUserChange(user);
    };
    const handleSubmit = event => {
        event.preventDefault();

        if(user)
        onSubmit_game();
    };

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="name">Inserisci il tuo nome: </label>
            <input
                value={user}
                name="name"
                type="text"
                onChange={handleChange}
            />
            <button type="submit">Gioca ora</button>
        </form>
    );
}