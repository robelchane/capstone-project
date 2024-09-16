import { AuthContextProvider } from "./firebase/auth-context";
 
const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
 
export default Layout;