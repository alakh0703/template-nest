import React, { useEffect } from 'react';

function DisableRightClick() {
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return null;
}

export default DisableRightClick;
