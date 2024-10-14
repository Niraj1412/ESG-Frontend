import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FileUpload from '../components/FileUpload';

export default function ImportPage() {
  return (
    <div className="flex">

      <div className="flex-1 bg-blue-50">
        <Header />
        <div className="p-8">
          <h2 className="text-xl font-bold mb-10 bg-blue-50"></h2>
          <FileUpload />
        </div>
      </div>
    </div>
  );
}
