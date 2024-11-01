import React, { useState } from 'react';

const useHookInput = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        setValue(e.target.value);
    }
    return { value, onChange }
};

export default useHookInput;