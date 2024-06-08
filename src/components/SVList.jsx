import React from 'react';
import SV from './SV';

function SVList(props) {
    return (
        <div className='tb'>
            <p>Danh sách sinh viên</p>
            <table>
                <thead>
                    <tr>
                        <th>Mã sinh viên</th>
                        <th>Họ và tên</th>
                        <th>Ngày sinh</th>
                        <th>Lớp</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {props.svs.map(sv => (
                        <SV key={sv.id} sv={sv} name={sv.name} ma={sv.id} birth={sv.birth} lop={sv.class} onDeleteSV={props.onDeleteSV} onEditSV={props.onEditSV}/> 
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SVList;