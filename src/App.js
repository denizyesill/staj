import { useState } from "react";

import "./App.css";
import bitesLogo from './logo.png';
const App = () => {
  const [inputs, setInputs] = useState({
    username:'',
    tc:'',
    birthday:'',
    cinsiyet:'',
    medenidurum:'',
    mail:'',
    telno:'',
    universite:'',
    bolum:'',
    pozisyon:'',
    languages:'',
    tecrube:'',
    referans:'',
    basarı:'',
    hobi:'',
  });
  


  const handleChange = (key,value) => {
    // console.log(event.target.value);
    // const name = event.target.name;
    // const value = event.target.value;
    // setInputs((values) => ({ ...values, [name]: value }));
    setInputs({...inputs,[key]:value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
   };

  return (
    <div className="page_container">


      <img src={bitesLogo}  width="150px"/>


      <div className="form_section">
        <form onSubmit={handleSubmit} className="form_container">
         


          <label className="ust-baslıklar">
            Kişisel Bilgiler
          </label>
          
          
        
         <div className="form-wrapper">
          <label className="form-label">Ad-Soyad:</label>
            <input className="form-input"
              type="text"
              value={inputs.username}
              onChange={(e)=>{handleChange('username',e.target.value)}}
            />
         </div>
         

       <div className="form-wrapper">
          <label className="form-label">T.C. Numarası:</label>
            <input className="form-input-number"
              type="number"
              value={inputs.tc}
              onChange={(e)=>{handleChange('tc',e.target.value)}}
            />
        </div>


       <div className="form-wrapper">
          <label className="form-label">Doğum Tarihi:</label>
            <input className="form-input-date"
              type="date"
              value={inputs.birthday}
              onChange={(e)=>{handleChange('birthday',e.target.value)}}
            />
         </div>

          
         <div className="form-wrapper">
           <label className="form-label">Cinsiyet:</label>
             <select className="form-input-cinsiyet"
              value={inputs.cinsiyet}
              onChange={(e)=>{handleChange('cinsiyet',e.target.value)}}>
                <option className="option-input" value=" ">Cinsiyet Seçiniz</option>
                <option className="option-input" value="erkek">Erkek</option>
                <option className="option-input" value="kadın">Kadın</option>
                
              </select>
          </div>



          <div className="checkbox-wrapper">
            <label className="form-label-medenidurum">Medeni Durum:</label>

          <input className="my-checkbox" type="checkbox"         onChange={(e)=>{handleChange('medenidurum',e.target.value)}}  value="evli" />
            <label className="my-label">Evli</label>
         
          <input className="my-checkbox" type="checkbox"         onChange={(e)=>{handleChange('medenidurum',e.target.value)}}  value="bekar" />
            <label className="my-label">Bekar</label>

          </div>

       


        <label className="ust-baslıklar">
          İletişim Bilgileri
        </label>


      <div className="form-wrapper">
         <label className="form-label">E-posta:</label>
            <input className="form-input-email"
              type="email"
              value={inputs.mail}
              onChange={(e)=>{handleChange('mail',e.target.value)}}
            />
       </div>
           

      <div className="form-wrapper">
         <label className="form-label">Telefon Numarası:</label>
            <input className="form-input-number"
              type="number"
              value={inputs.telno}
              onChange={(e)=>{handleChange('telno',e.target.value)}}
            />
        </div>


        <label className="ust-baslıklar">
          Eğitim Bilgileri
        </label>

     <div className="form-wrapper">
        <label className="form-label">Üniversite:</label>
           <input className="form-input"
            type="text"
            value={inputs.universite}
            onChange={(e)=>{handleChange('universite',e.target.value)}}
            />
      </div>


      <div className="form-wrapper">
       <label className="form-label">Bölüm:</label>
         <input className="form-input"
            type="text"
            value={inputs.bolum}
            onChange={(e)=>{handleChange('bolum',e.target.value)}}
            />
        </div>



        <label className="ust-baslıklar">
          Başvuru Yapılan Pozisyon
        </label>
            

        <div className="form-wrapper">
           <label> </label>
             <select className="form-input-pozisyon"
              value={inputs.pozisyon}
              onChange={(e)=>{handleChange('pozisyon',e.target.value)}}>
                <option className="option-input" value=" ">Başvuru Yapmak İstediğiniz Pozisyonu Seçiniz</option>
                <option className="option-input" value="ik">İK</option>
                <option className="option-input" value="erpuzmanı">ERP Uzmanı</option>
                
              </select>
           </div>



        <label className="ust-baslıklar">
          Bilgisayar Bilgisi/Yabancı Dil
        </label>

       
      <div className="checkbox-wrapper">

      <input className="my-checkbox" type="checkbox"         onChange={(e)=>{handleChange('code',e.target.value)}}  value="python" />
         <label className="my-label">Python</label>
         

       <input className="my-checkbox" type="checkbox"        onChange={(e)=>{handleChange('code1',e.target.value)}}   value="c" />
         <label className="my-label">C</label>


       <input className="my-checkbox" type="checkbox"         onChange={(e)=>{handleChange('code2',e.target.value)}}   value="c++" />
         <label className="my-label">C++</label>


       <input className="my-checkbox" type="checkbox"        onChange={(e)=>{handleChange('code3',e.target.value)}}   value="php" />
         <label className="my-label">PHP</label>


       <input className="my-checkbox" type="checkbox"        onChange={(e)=>{handleChange('code4',e.target.value)}}   value="C#" />
         <label className="my-label">C#</label>


       <input className="my-checkbox" type="checkbox"        onChange={(e)=>{handleChange('code5',e.target.value)}}   value="react" />
         <label className="my-label">React</label>


       <input className="my-checkbox" type="checkbox"        onChange={(e)=>{handleChange('code6',e.target.value)}}   value="java" />
         <label className="my-label">Java</label>


       <input className="my-checkbox" type="checkbox"        onChange={(e)=>{handleChange('code7',e.target.value)}}   value="matlab" />
         <label className="my-label">Matlab</label>


       <input className="my-checkbox" type="checkbox"        onChange={(e)=>{handleChange('code8',e.target.value)}}   value="swift" />
         <label className="my-label">Swift</label>


       <input className="my-checkbox" type="checkbox"        onChange={(e)=>{handleChange('code9',e.target.value)}}   value="javascript" />
         <label className="my-label">Javascript</label>


       <input className="my-checkbox" type="checkbox"        onChange={(e)=>{handleChange('code10',e.target.value)}}   value="javascript" />
         <label className="my-label">Javascript</label>

       </div>
       
      

      <div className="form-wrapper">
        <label className="form-label">Yabancı Dil:</label>
          <input className="form-input"
            type="text"
            value={inputs.languages}
            onChange={(e)=>{handleChange('languages',e.target.value)}}
            />  
       </div>
        


        <label className="ust-baslıklar">
          Yetenekler
        </label>


      <div className="form-wrapper">
        <label></label>
          <input className="form-input"
            type="text"
            value={inputs.tecrube}
            onChange={(e)=>{handleChange('tecrube',e.target.value)}}
            />      
      </div>


        <label className="ust-baslıklar">
          Referanslar
        </label>


      <div className="form-wrapper">
        <label></label>
          <input className="form-input"
            type="text"
            value={inputs.referans}
            onChange={(e)=>{handleChange('referans',e.target.value)}}
            />        
      </div>


         <label className="ust-baslıklar">
           Diğer Bilgiler
         </label>


      <div className="form-wrapper">
        <label className="form-label">Başarılar/Ödüller:</label>
          <input className="form-input"
            type="text"
            value={inputs.basarı}
            onChange={(e)=>{handleChange('basarı',e.target.value)}}
            /> 
      </div>


      <div className="form-wrapper">
        <label className="form-label">Hobiler:</label>
          <input className="form-input"
            type="text"
            value={inputs.hobi}
            onChange={(e)=>{handleChange('hobi',e.target.value)}}
            />        
       </div>
          



       <div className="">
          <label className="form-label-cv">CV ve Ön Yazı Yükleyiniz:</label>
            <input className="form-input-cv"
              type="file"  
              onChange={(e)=>{console.log(e.target.files)}} 
              />
        </div>

        


          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default App;

