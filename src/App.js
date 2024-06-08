
import './App.css';
import AddSV from './components/AddSV';
import SVList from './components/SVList';
import { useState } from 'react';

function App() {
  const [svs, setSV] = useState([
    {id: '2251172535', name:'Đào Xuân Trường', birth:'2004-08-15', class:'64KTPM2'},
    {id: '2251172567', name:'Bùi Mạnh Đức', birth:'2004-11-02', class:'64KTPM3'},
  ])

   
  const handleAddSV = (newID, newName, newBirth, newClass) =>{
    setSV([...svs, {id: newID, name : newName, birth : newBirth, class: newClass}])
  }

  const handleDeleteSV = (id) =>{
    setSV(svs.filter(sv => sv.id!== id))
  }

  const handleEditSV = (id,newID, newName, newBirth, newClass) =>{
    const updateSVS = svs.map(sv => {
      if(sv.id===id){
        return {...sv, id: newID, name: newName, birth: newBirth, class: newClass}
      }
      return sv;
    })
    setSV(updateSVS);
  }


  return (
    <div className="App">
      <AddSV addSinhVien={handleAddSV}/>
      <SVList svs={svs} onDeleteSV={handleDeleteSV} onEditSV={handleEditSV}/>
    </div>
  );
}

export default App;
