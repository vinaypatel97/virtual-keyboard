import React from 'react';
import RenderKeyBoard from '../../components/RenderKeyboard';

const VirtualKeyboard = () => {
    const Header = () => {
        return (
            <div className="dFlex header">
                <h1>Virtual Keyboard</h1>
            </div>
        )
    }

    return (
        <>
            <Header />
            <RenderKeyBoard />
        </>
    )
}

export default VirtualKeyboard;
