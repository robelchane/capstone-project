import Sidebar from "../../components/sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex mt-20">
            <Sidebar />
            <div className="flex-1 p-6">
                {children}
            </div>
        </div>
    )
}
