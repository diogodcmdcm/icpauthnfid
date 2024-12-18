import { useState } from 'react';
import { icpauthnfid_backend } from 'declarations/icpauthnfid_backend';
import { Actor } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";


function App() {
  
  let authClient = null;

  async function init() {
    authClient = await AuthClient.create();
  }
    
  async function handleSuccess() {
    const principalId = authClient.getIdentity().getPrincipal().toText();
   
    await Actor.agentOf(icpauthnfid_backend).replaceIdentity(
      authClient.getIdentity()
    );

    console.log(`PrincipalId obtido no Frontend: ${principalId}`);
    document.getElementById("principalTextFront").innerText = "Principal_Id obtido no Frontend: " + principalId;

    const principalBackEnd = await icpauthnfid_backend.getUserPrincipal();    
    console.log(`PrincipalId obtido no Backend: ${principalBackEnd}`);
    document.getElementById("principalTextBack").innerText = principalBackEnd;
  }
  
    async function login(){
      if (!authClient) throw new Error("AuthClient not initialized");
  
      const APP_NAME = "NFID example";
      const APP_LOGO = "https://nfid.one/icons/favicon-96x96.png";
      const CONFIG_QUERY = `?applicationName=${APP_NAME}&applicationLogo=${APP_LOGO}`;
  
      const identityProvider = `https://nfid.one/authenticate${CONFIG_QUERY}`;
  
      authClient.login({
        identityProvider,
        onSuccess: handleSuccess,
        windowOpenerFeatures: `
          left=${window.screen.width / 2 - 525 / 2},
          top=${window.screen.height / 2 - 705 / 2},
          toolbar=0,location=0,menubar=0,width=525,height=705
        `,
      });
    }
  
    init();

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <button onClick={login} >Login NFID</button><br/><br/>      
      <label id="principalTextFront"></label><br/>
      <label id="principalTextBack"></label>                    
    </main>
  );
}

export default App;