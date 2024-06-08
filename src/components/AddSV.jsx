import React, {useState} from 'react';


function AddSV(props) {
    const [nameValue, setNameValue] = useState('');
    const [maSVValue, setMaSVValue] = useState('');
    const [ngaySinhValue, setNgaySinhValue] = useState('');
    const [lopValue, setLopValue] = useState('');

    const handleNameChange = (e) => {
        setNameValue(e.target.value);
    }

    const handleMaSVChange = (e) => {
        setMaSVValue(e.target.value);
    }

    const handleNgaySinhChange = (e) => {
        setNgaySinhValue(e.target.value);
    }

    const handleLopChange = (e) => {
        setLopValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSinhVien( maSVValue, nameValue, ngaySinhValue, lopValue);
        setNameValue('');
        setMaSVValue('');
        setNgaySinhValue('');
        setLopValue('');
    }

    return (
        <div className='add-sv'>
            
            <p>Thêm sinh viên</p>
            <form onSubmit={handleSubmit}>
                <div className='div-input'>
                    <label htmlFor='hoTen' >Họ và tên:</label><span className='check'>(*)</span>
                    <br/>
                    <input id='hoTen' type="text" placeholder="Nhập tên sinh viên"  value={nameValue} onChange={handleNameChange}/>
                </div>

                <div className='div-input'>
                    <label htmlFor='maSV' >Mã sinh viên:</label><span className='check'>(*)</span>
                    <br/>
                    <input id='maSV' type="text" placeholder="Nhập mã sinh viên"  value={maSVValue} onChange={handleMaSVChange}/>
                </div>

                <div className='div-input'>
                    <label  htmlFor='ngaySinh' >Ngày sinh:</label><span className='check'>(*)</span>
                    <br/>
                    <input id='ngaySinh' type="date" value={ngaySinhValue} onChange={handleNgaySinhChange}/>
                </div>

                <div className='div-input'>
                    <label htmlFor='lop' >Lớp:</label><span className='check'>(*)</span>
                    <br/>
                    <input id='lop' type="text" placeholder="Nhập lớp" value={lopValue} onChange={handleLopChange}/>
                </div>

                <button className='btn-add'>Thêm</button>
                
            </form>
        
        </div>
    );
}

export default AddSV;