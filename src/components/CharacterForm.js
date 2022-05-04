import React, { useState } from 'react';

export default function CharacterForm({ characterAdded }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const submitCharacter = () => {};

    return (
        <div className="card">
            <div className="card-header">Add a New Course</div>
            <div className="card-body">
                <form className="" onSubmit={submitCharacter}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="link">Link</label>
                        <input
                            type="text"
                            name="link"
                            value={link}
                            className="form-control"
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}