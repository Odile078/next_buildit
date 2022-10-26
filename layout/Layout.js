import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
    return (
        <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-1">{props.children}</main>
        <Footer/>
        </div>
    );
}

export default Layout;