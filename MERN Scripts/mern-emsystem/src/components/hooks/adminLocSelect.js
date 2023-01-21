import React, { Component } from 'react';

const adminLocSelect = () => {
     
    
    var select = document.getElementById("adminLocSelect");
select.onchange = function() {
  localStorage.setItem("adminLocation", this.value);
};
    

    

        return( 
             <select id="adminLocSelect" >
                <option value="West Kelowna">West Kelowna</option>
                <option value="Rutland">Rutland</option>
                <option value="Mission">Mission</option>
                <option value="Lake Country">Lake Country</option>
                <option value="Glenmore"> Glenmore </option>
                <option value="Kelowna Central"> Kelowna Central </option>
            </select>
        );            
    }

export default adminLocSelect;