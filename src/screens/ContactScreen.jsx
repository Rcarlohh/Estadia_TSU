import React from 'react';
import HeaderComponent from '../components/Layouts/HeaderComponent';
import ContactComponent from '../components/ContacComponents/ContacComponent';

const ContactScreen = () => {
  return (
    <div>
        <HeaderComponent
         title="Contacto"
         subtitle1="Pasión por el transporte"
         subtitle2="Excelencia en el servicio"
        />
     <ContactComponent/>
      
    </div>
  );
};

export default ContactScreen; 
