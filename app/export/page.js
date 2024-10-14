import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ExportButtons from '../components/ExportButtons';

export default function ExportPage() {
  // Example data to export
  const data = {
    environmentalScore: 80,
    socialScore: 75,
    governanceScore: 85,
    totalESGScore: 80,
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          <h2 className="text-xl font-bold mb-4">Export Data</h2>
          <ExportButtons data={data} />
        </div>
      </div>
    </div>
  );
}
