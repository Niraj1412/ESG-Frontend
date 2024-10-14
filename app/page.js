import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EsgTable from './components/EsgTable';
import EsgChart from './components/EsgChart';

export default function Home() {
  return (
    <div className="flex">
      
      <div className="flex-1">
        
        <div className="p-0">
          <EsgTable />
        </div>
      </div>
    </div>
  );
}
