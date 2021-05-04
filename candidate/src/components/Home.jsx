import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
           <div> 
           <div >
               <table className=" table ">
                   <tbody>
                       <tr>
                           <td><img 
      src="data:image/png;base64,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"
      alt="new" width="700px" height="500px"
      />
    </td>  
    <td>
    <p><b>Electronic voting</b> (also known as e-voting) is voting that uses electronic means to either aid or take care of casting and counting votes.</p>
    <p>Depending on the particular implementation, e-voting may use standalone electronic voting machines (also called EVM) or computers connected to the Internet. 
        It may encompass a range of Internet services, from basic transmission of tabulated results to full-function online voting through common connectable household devices.
        The degree of automation may be limited to marking a paper ballot, or may be a comprehensive system of vote input, vote recording, data encryption and transmission to servers, and consolidation and tabulation of election results.</p>
    <p>Electronic voting technology can include punched cards, optical scan voting systems and specialized voting kiosks (including self-contained direct-recording electronic voting systems, or DRE). 
        It can also involve transmission of ballots and votes via telephones, private computer networks, or the Internet.</p>
    </td>
                       </tr>
                   </tbody>
               </table>
           </div>
           </div>
        );
    }
}

export default Home;