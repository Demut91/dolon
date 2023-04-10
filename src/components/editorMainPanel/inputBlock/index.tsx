import React from 'react';
import { Button, ColorPicker, CustomTextField, Heading } from './styles';
import { InputProps } from 'constants/mockData';
import Checkbox from '@mui/material/Checkbox';


function InputBlock(props: InputProps) {

    function isHexColor(value: string | number) {
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        return hexColorRegex.test(`${value}`);
    }

    if (typeof props.defaultValue === 'string' &&
        isHexColor(props.defaultValue)) return (
            <>
                <Heading>{props.name}</Heading>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ColorPicker color={props.defaultValue} />
                    <CustomTextField
                        sx={{ width: '53px', marginTop: '5px' }}
                        variant="standard"
                        type={typeof props.defaultValue}
                        hiddenLabel
                        size='small'
                        defaultValue={props.defaultValue} />
                </div>
            </>);
    if (typeof props.defaultValue === 'string' ||
        typeof props.defaultValue === 'number' &&
        !isHexColor(props.defaultValue)) return (
            <>
                <Heading>{props.name}</Heading>
                <CustomTextField
                    variant="standard"
                    type={typeof props.defaultValue}
                    hiddenLabel
                    size='small'
                    defaultValue={props.defaultValue} />
            </>);
    if (typeof props.defaultValue === 'boolean') return (<>
        <Heading>{props.name}</Heading>
        <div>
            <Checkbox
                sx={{ padding: 0 }}
                size='small'
                color="default" />
        </div>
    </>);

    else return (
        <>
            <Heading>{props.name}</Heading>
            <Button>Выбрать</Button>
        </>
    );
}

export default InputBlock;
