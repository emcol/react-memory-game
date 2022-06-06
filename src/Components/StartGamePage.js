import React, {useState} from "react";

export const StartGamePage = ({onSubmit_user, onSubmit_game}) => {

    const [user, setUser] = useState(null);

    const handleChange = ({ target }) => setUser(target.value);
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit_user(user);
        onSubmit_game();
    };

    return (
        <form onSubmit={handleSubmit} >
            <label for="name">Inserisci il tuo nome: </label>
            <input
                value={user}
                name="name"
                type="text"
                placeholder="Nome"
                id="name"
                onChange={handleChange}
            />
            <button type="submit">Gioca ora</button>
        </form>
    );
}