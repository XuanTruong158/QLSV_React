import React, { useState } from 'react';


function SV(props) {
    const handleDelete = (e) =>{
        
        props.onDeleteSV(props.sv.id);
    }
    const [checkEditing, setCheckEditing] = useState(false);
    // const [isEditingID, setIsEditingID] = useState(props.sv.id);
    const [isEditingMa, setIsEditingMa] = useState(props.sv.ma);
    const [isEditingName, setIsEditingName] = useState(props.sv.name);
    const [isEditingBirth, setIsEditingBirth] = useState(props.sv.birth);
    const [isEditingClass, setIsEditingClass] = useState(props.sv.class);

    const handleChangeMa = (event) =>{
        setIsEditingMa(event.target.value);
    }

    const handleChangeName = (event) =>{
        setIsEditingName(event.target.value);
    }

    const handleChangeBirth = (event) =>{
        setIsEditingBirth(event.target.value);
    }

    const handleChangeClass = (event) =>{
        setIsEditingClass(event.target.value);
    }


    const handleEdit = () => {
        setCheckEditing(!checkEditing);
    }

    const handleSave = () => {
        
        props.onEditSV(props.sv.id, isEditingMa, isEditingName, isEditingBirth, isEditingClass);
        setCheckEditing(false);
    }



    return (
        
        
        <tr>
            {/* <th>{props.ma}</th>
            <th>{props.name}</th>
            <th>{props.birth}</th>
            <th>{props.lop}</th>
            <th>
                <button className='btn-edit'>Sửa</button>
                <button onClick={handleDelete} className='btn-delete'>Xóa</button>
            </th> */}

            {checkEditing ? (
                <th><input className='input-edit' type='text' placeholder='Edit id' value={isEditingMa} onChange={handleChangeMa}></input></th>
            ) : (
                <th>{props.ma}</th>
            )}

            {checkEditing ? (
                <th><input className='input-edit' type='text' placeholder='Edit họ và tên' value={isEditingName} onChange={handleChangeName}></input></th>
            ) : (
                <th>{props.name}</th>
            )}

            {checkEditing ? (
                <th><input className='input-edit' type='date' value={isEditingBirth} onChange={handleChangeBirth}></input></th>
            ) : (
                <th>{props.birth}</th>
            )}

            {checkEditing ? (
                <th><input className='input-edit' type='text' placeholder='Edit lớp' value={isEditingClass} onChange={handleChangeClass}></input></th>
            ) : (
                <th>{props.lop}</th>
            )}

            <th>
                {
                    checkEditing ? (
                        <button onClick={handleSave} className='btn-save'>Save</button>
                    ) : (
                        <button onClick={handleEdit} className='btn-edit'>Edit</button>
                    )
                }
                <button onClick={handleDelete} className='btn-delete'>Delete</button>
            </th>


        </tr>
        
    );
}

export default SV;