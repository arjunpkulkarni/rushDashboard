import React, { useState } from 'react';
import axios from 'axios';

const ChallengeForm = () => {
    const [formData, setFormData] = useState({
        campusId: '',
        title: '',
        description: '',
        hint: '',
        mediaUrl: '',
        scheduledAt: '',
        expiresAt: '',
        isBonus: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/challenges', formData);
            alert('Challenge created successfully!');
            setFormData({
                campusId: '',
                title: '',
                description: '',
                hint: '',
                mediaUrl: '',
                scheduledAt: '',
                expiresAt: '',
                isBonus: false,
            });
        } catch (error) {
            console.error('Error creating challenge:', error);
            alert('Failed to create challenge');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="campusId" value={formData.campusId} onChange={handleChange} placeholder="Campus ID" required />
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
            <input name="hint" value={formData.hint} onChange={handleChange} placeholder="Hint" />
            <input name="mediaUrl" value={formData.mediaUrl} onChange={handleChange} placeholder="Media URL" />
            <input name="scheduledAt" type="datetime-local" value={formData.scheduledAt} onChange={handleChange} required />
            <input name="expiresAt" type="datetime-local" value={formData.expiresAt} onChange={handleChange} required />
            <label>
                <input name="isBonus" type="checkbox" checked={formData.isBonus} onChange={handleChange} />
                Bonus Challenge
            </label>
            <button type="submit">Create Challenge</button>
        </form>
    );
};

export default ChallengeForm;
