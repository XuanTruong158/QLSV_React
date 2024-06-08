
import './App.css';
import AddSV from './components/AddSV';
import SVList from './components/SVList';
import { useState } from 'react';

function App() {
  const [svs, setSV] = useState([
    
  ])

   
  const handleAddSV = (newID, newName, newBirth, newClass) =>{
    setSV([...svs, {id: Date.now(),ma: newID, name : newName, birth : newBirth, class: newClass}])
  }

  const handleDeleteSV = (id) =>{
    setSV(svs.filter(sv => sv.id!== id))
  }

  const handleEditSV = (id,newMa, newName, newBirth, newClass) =>{
    const updateSVS = svs.map(sv => {
      if(sv.id===id){
        return {...sv, ma: newMa, name: newName, birth: newBirth, class: newClass}
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
