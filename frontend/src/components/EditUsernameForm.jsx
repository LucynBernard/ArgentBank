import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsernameSuccess } from "../Redux/authSliceTemp";

function EditUsernameForm({ onCancel}) {
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.auth);
    const [newUsername, setNewUsername] = useState(user?.userName || "");

    const handleSave = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ userName: newUsername}),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Erreur lors de la mise à jour");
                return;
            }

            dispatch(updateUsernameSuccess({ userName: newUsername}));
            onCancel();
        } catch (err) {
            console.error("Erreur", err);
            alert("Erreur server");
        }
    };

    return (
        <div className="edit-form">
            <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            />
            <button className="edit-button" onClick={handleSave}>Save</button>
            <button className="edit-button" onClick={onCancel}>Cancel</button>
        </div>
    );
}

export default EditUsernameForm;