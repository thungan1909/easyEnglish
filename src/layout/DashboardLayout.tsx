import Navbar from "../components/Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}


const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="bg-gradient-to-r to-purple-200  flex flex-col min-h-screen">
      <Navbar />
      <div className="max-h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
export default DashboardLayout;
