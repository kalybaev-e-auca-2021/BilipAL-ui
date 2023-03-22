import React from 'react';


class Image extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 200,
                    background: '#fff',
                    padding: 16,
                }}
            >
                <img
                    src={this.props.image}
                    alt="Logo"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                    }}
                />
            </div>)
    }
}

export default Image;