import { createContext, useState } from "react";

// Create the context
const AppContext = createContext<any>(null); // Specify the type here for better type safety

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState<string>();
  const [signIn, setSignIn] = useState<boolean>(true);

  return (
    <AppContext.Provider value={{ email, setEmail, signIn, setSignIn }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
