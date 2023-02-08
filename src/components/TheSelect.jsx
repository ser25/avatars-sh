import React from 'react';
import Select from 'react-select'



const TheSelect = ({value ,setValue, options}) => {
    const getValue = () => {
        if (value){
            return value ? options.find(v => v.value === value) : ''
        }

    }
    const onChange = (newValue) => {
        return setValue(newValue.value)
    }
    return (
        <Select isSearchable={false} value={getValue()} onChange={onChange}
                options={options}
        />
    );
};

export default TheSelect;