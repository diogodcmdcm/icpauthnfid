import Principal "mo:base/Principal";

actor {
   
  public shared(msg) func getUserPrincipal() : async Text {
    return "Principal_Id obtido no Backend: " # Principal.toText(msg.caller);
  };

};
