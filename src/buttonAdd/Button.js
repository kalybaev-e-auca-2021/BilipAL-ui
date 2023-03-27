import { Button, Modal } from 'antd';
import { useState } from 'react';

const showParamsModal = (params) => {
    return new Promise((resolve) => {
        const [visible, setVisible] = useState(true);
        const [selectedParams, setSelectedParams] = useState([]);

        const handleOk = () => {
            // return the selected parameters
            resolve(selectedParams);
            setVisible(false);
        };

        const handleCancel = () => {
            // return an empty array
            resolve([]);
            setVisible(false);
        };

        const handleCheckboxChange = (event) => {
            const param = event.target.value;
            if (event.target.checked) {
                setSelectedParams([...selectedParams, param]);
            } else {
                setSelectedParams(selectedParams.filter((p) => p !== param));
            }
        };

        return (
            <Modal title="Select parameters" visible={visible} onOk={handleOk} onCancel={handleCancel}>
                <p>Select the parameters you want to use:</p>
                {params.map((param) => (
                    <div key={param}>
                        <label>
                            <input type="checkbox" value={param} onChange={handleCheckboxChange} />
                            {param}
                        </label>
                    </div>
                ))}
            </Modal>
        );
    });
};

const MyButton = () => {
    const handleClick = async () => {
        const selectedParams = await showParamsModal(['param1', 'param2', 'param3']);
        console.log('Selected params:', selectedParams);
    };

    return (
        <Button type="primary" onClick={handleClick}>
            Click me
        </Button>
    );
};