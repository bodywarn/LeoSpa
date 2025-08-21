import React, { useEffect, useState } from "react";
import "../styles/UserManager.scss";

export default function UserManager() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: "", email: "", password: "", id: null });
    const [isEditing, setIsEditing] = useState(false);

    const apiBase = "http://localhost:5029/user/admin";

    const fetchUsers = async () => {
        try {
            const res = await fetch(apiBase);
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.error("Fejl ved hentning af brugere:", error);
        }
    };

    const handleSubmit = async () => {
        try {
            if (isEditing) {
                await fetch(`${apiBase}/${form.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        password: form.password,
                    }),
                });
            } else {
                await fetch(apiBase, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        password: form.password,
                    }),
                });
            }

            setForm({ name: "", email: "", password: "", id: null });
            setIsEditing(false);

            fetchUsers();
        } catch (error) {
            console.error("Fejl ved opdatering:", error);
        }
    };

    const handleEdit = (user) => {
        setForm({ name: user.name, email: user.email, password: "", id: user._id });
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`${apiBase}/${id}`, { method: "DELETE" });
            fetchUsers();
        } catch (error) {
            console.error("Fejl ved sletning:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="user-manager">
            <h2 className="user-manager__title">Brugere</h2>

            <div className="user-manager__form-card">
                <h3 className="user-manager__form-title">
                    {isEditing ? "Rediger bruger" : "Tilføj ny bruger"}
                </h3>
                <div className="user-manager__form-inputs">
                    <input
                        type="text"
                        placeholder="Navn"
                        className="user-manager__input"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="user-manager__input"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="user-manager__input"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                </div>
                <div className="user-manager__form-actions">
                    <button className="btn btn--primary" onClick={handleSubmit}>
                        {isEditing ? "Opdater" : "Tilføj"}
                    </button>
                    {isEditing && (
                        <button
                            className="btn btn--secondary"
                            onClick={() => {
                                setForm({ name: "", email: "", password: "", id: null });
                                setIsEditing(false);
                            }}
                        >
                            Annullér
                        </button>
                    )}
                </div>
            </div>

            <div className="user-manager__list-card">
                <h3 className="user-manager__list-title">Liste over brugere</h3>
                {users.length === 0 ? (
                    <p>Ingen brugere fundet.</p>
                ) : (
                    <ul className="user-manager__list">
                        {users.map((user) => (
                            <li key={user._id} className="user-manager__list-item">
                                <div className="user-manager__list-info">
                                    <p className="user-manager__name">{user.name}</p>
                                    <p className="user-manager__email">{user.email}</p>
                                    <p className="user-manager__id">ID: {user._id}</p>
                                </div>
                                <div className="user-manager__list-actions">
                                    <button
                                        className="btn btn--warning"
                                        onClick={() => handleEdit(user)}
                                    >
                                        Rediger
                                    </button>
                                    <button
                                        className="btn btn--danger"
                                        onClick={() => handleDelete(user._id)}
                                    >
                                        Slet
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
