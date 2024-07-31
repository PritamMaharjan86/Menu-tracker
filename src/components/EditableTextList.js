// src/EditableTextList.js
import React, { useState } from 'react';

const EditableTextList = () => {
    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const [currentText, setCurrentText] = useState('');

    const handleAddEntry = () => {
        setEntries([...entries, newEntry]);
        setNewEntry('');
    };

    const handleEditEntry = (index) => {
        setIsEditing(index);
        setCurrentText(entries[index]);
    };

    const handleSaveEdit = (index) => {
        const updatedEntries = entries.map((entry, idx) =>
            idx === index ? currentText : entry
        );
        setEntries(updatedEntries);
        setIsEditing(null);
        setCurrentText('');
    };

    const handleChange = (e) => {
        setCurrentText(e.target.value);
    };

    return (
        <div>
           
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>
                        {isEditing === index ? (
                            <input
                                type="text"
                                value={currentText}
                                onChange={handleChange}
                                onBlur={() => handleSaveEdit(index)}
                                autoFocus
                            />
                        ) : (
                            <span onClick={() => handleEditEntry(index)}>{entry}</span>
                        )}
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newEntry}
                    onChange={(e) => setNewEntry(e.target.value)}
                />
                <button onClick={handleAddEntry}>Add Entry</button>
            </div>
        </div>
    );
};

export default EditableTextList;
