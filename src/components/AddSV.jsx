import React, {useState} from 'react';


function AddSV(props) {
    const [nameValue, setNameValue] = useState('');
    const [maSVValue, setMaSVValue] = useState('');
    const [ngaySinhValue, setNgaySinhValue] = useState('');
    const [lopValue, setLopValue] = useState('');

    //useState errors
    const [errorNameValue, setErrorNameValue] = useState('(*)');
    const [errorMaSVValue, setErrorMaSVValue] = useState('(*)');
    const [errorNgaySinhValue, setErrorNgaySinhValue] = useState('(*)');
    const [errorLopValue, setErrorLopValue] = useState('(*)');

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
        setErrorNameValue('(*)');
        setErrorMaSVValue('(*)');
        setErrorNgaySinhValue('(*)');
        setErrorLopValue('(*)');
    }
    //validate
    const handleBlurName = (e) => {
        if(nameValue==='' || nameValue===null || nameValue=== undefined){
            setErrorNameValue('Nhập họ tên là quan trong!');
        }
        else{
            setErrorNameValue('✓');
        }
    }

    const handleBlurID = (e) => {
        if(maSVValue==='' || maSVValue===null || maSVValue===undefined){
            setErrorMaSVValue('Nhập mã sinh viên là quan trong!');
        }
        else{
            setErrorMaSVValue('✓');
        }
    }

    const handleBlurBirth = (e) => {
        if(ngaySinhValue===null){
            setErrorNgaySinhValue('Nhập ngày sinh là quan trong!');
        }
        else{
            setErrorNgaySinhValue('✓');
        }
    }
    const handleBlurClass = (e) => {
        if(lopValue==='' || lopValue===null || lopValue===undefined){
            setErrorLopValue('Nhập lớp là quan trong!');
        }
        else{
            setErrorLopValue('✓');
        }
    }
    return (
        <div className='add-sv'>
            
            <p>Thêm sinh viên</p>
            <form onSubmit={handleSubmit}>
                <div className='div-input'>
                    <label htmlFor='hoTen' >Họ và tên:</label><span className='check' style={{color: errorNameValue==='✓' ? 'green' : 'red'}}>{errorNameValue}</span>
                    <br/>
                    <input id='hoTen' type="text" placeholder="Nhập tên sinh viên"  value={nameValue} onChange={handleNameChange} onBlur={handleBlurName}/>
                </div>

                <div className='div-input'>
                    <label htmlFor='maSV' >Mã sinh viên:</label><span className='check' style={{ color: errorMaSVValue === '✓' ? 'green' : 'red' }}>{errorMaSVValue}</span>
                    <br/>
                    <input id='maSV' type="text" placeholder="Nhập mã sinh viên"  value={maSVValue} onChange={handleMaSVChange} onBlur={handleBlurID}/>
                </div>

                <div className='div-input'>
                    <label  htmlFor='ngaySinh' >Ngày sinh:</label><span className='check' style={{color: errorNgaySinhValue==='✓' ? 'green' : 'red'}}>{errorNgaySinhValue}</span>
                    <br/>
                    <input id='ngaySinh' type="date" value={ngaySinhValue} onChange={handleNgaySinhChange} onBlur={handleBlurBirth}/>
                </div>

                <div className='div-input'>
                    <label htmlFor='lop' >Lớp:</label><span className='check' style={{ color: errorLopValue === '✓' ? 'green' : 'red' }}>{errorLopValue}</span>
                    <br/>
                    <input id='lop' type="text" placeholder="Nhập lớp" value={lopValue} onChange={handleLopChange} onBlur={handleBlurClass}/>
                </div>

                <button className='btn-add'>Thêm</button>
                
            </form>
        
        </div>
    );
}

export default AddSV;