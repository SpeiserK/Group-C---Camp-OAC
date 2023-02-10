import { useState } from "react";

//TODO: need to go through and document this 

const InvByLoc = () => {
     
    const [glenmore, setLoc] = useState("20");
    const [kelowna, setLoc2] = useState("22");
    const [lakecountry, setLoc3] = useState("24");
    const [mission, setLoc4] = useState("26");
    const [rutland, setLoc5] = useState("28");
    const [westk, setLoc6] = useState("30");
            
    return(
            <div className="inventoryCont">
                <h1>Stock by Location</h1>
                <table className="inventoryTable">
                    <tr><th>Location</th><th>Inventory</th><th>Update Inventory</th></tr>

                        <tr><td>Glenmore</td><td><p id="glen">{glenmore}</p></td>
                        <td><p><button id="glenB" onClick={() => setLoc(document.getElementById("glenTxt").value)}>
                            Submit</button></p><input type="text" id="glenTxt" name="New Quantity"></input></td></tr>

                        <tr><td>Kelowna Central</td><td><p id="kel">{kelowna}</p>
                        </td><td><p><button id="kelB" onClick={() => setLoc2(document.getElementById("kelTxt").value)}>
                            Submit</button></p><input type="text" id="kelTxt" name="New Quantity"></input></td></tr>

                        <tr><td>Lake Country</td><td><p id="lake">{lakecountry}</p></td>
                        <td><p><button id="lakeB" onClick={() => setLoc3(document.getElementById("lakeTxt").value)}>
                            Submit</button></p><input type="text" id="lakeTxt" name="New Quantity"></input></td></tr>

                        <tr><td>Mission</td><td><p id="mission">{mission}</p></td>
                        <td><p><button id="missionB" onClick={() => setLoc4(document.getElementById("missTxt").value)}>
                            Submit</button></p><input type="text" id="missTxt" name="New Quantity"></input></td></tr>

                        <tr><td>Rutland</td><td><p id="rutland">{rutland}</p></td>
                        <td><p><button id="rutlandB" onClick={() => setLoc5(document.getElementById("rutTxt").value)}>
                            Submit</button></p><input type="text" id="rutTxt" name="New Quantity"></input></td></tr>

                        <tr><td>West Kelowna</td><td><p id="west">{westk}</p></td>
                        <td><p><button id="westB" onClick={() => setLoc6(document.getElementById("westTxt").value)}>
                            Submit</button></p><input type="text" id="westTxt" name="New Quantity"></input></td></tr>
                </table>
            </div>
    );
    
}
export default InvByLoc;