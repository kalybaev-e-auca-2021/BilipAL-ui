import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import Button from './ButtonAdd'

const AddHabitWindow = () => {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        // Handle form submission logic here
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
            </div>
            <Button onClick={showModal}>Add</Button>
            <Modal
                visible={visible}
                title="Add Habit"
                okText="Save"
                cancelText="Cancel"
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <Input.TextArea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Modal>
        </>
    );
};

export default AddHabitWindow;