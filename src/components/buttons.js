import React from 'react'
import Button from '@mui/joy/Button'
import ButtonGroup from '@mui/joy/ButtonGroup'
import { AiFillPrinter } from "react-icons/ai";


export default function Buttons({ handleAddItem, handleEdit, handlePrint, handleExtra, extraDisabled, saveDisabled, editDisabled, isDisabled }) {
    return (

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonGroup spacing="0.6rem" aria-label="spacing button group">
                <Button sx={{
                    backgroundColor: '#4CAF50',
                    color: '#FFFFFF',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                    textTransform: 'uppercase',
                    ':hover': {
                        backgroundColor: '#388E3C',
                    },
                }}
                    disabled={saveDisabled} onClick={handleAddItem}>Save</Button>

                <Button sx={{
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                    textTransform: 'uppercase',
                    ':hover': {
                        backgroundColor: '#000000',
                    },
                }}
                    disabled={extraDisabled} onClick={handleExtra}>Platter</Button>

                <Button sx={{
                    backgroundColor: '#2196F3',
                    color: '#FFFFFF',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                    textTransform: 'uppercase',
                    ':hover': {
                        backgroundColor: '#1976D2',
                    },
                }}
                    disabled={editDisabled} onClick={handleEdit}>Edit</Button>


                <Button sx={{
                    backgroundColor: '#4CAF50',
                    color: '#FFFFFF',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                    textTransform: 'uppercase',
                    ':hover': {
                        backgroundColor: '#388E3C',
                    },
                }} onClick={handlePrint}><AiFillPrinter /></Button>



            </ButtonGroup>
        </div>
    )
}
