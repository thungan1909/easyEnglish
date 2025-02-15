import Navbar from "../components/Navbar";

interface DashboardLayoutProps {
    children: React.ReactNode;
  }

  
const DashboardLayout = ({children}: DashboardLayoutProps) => {
  return (
    <body className="flex h-screen">
      {/* <Sidebard /> */}
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 h-full overflow-y-auto">
          {children}
        </main>
      </div>
    </body>
  );
};
export default DashboardLayout;
