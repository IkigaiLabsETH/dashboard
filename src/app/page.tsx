// import Image from "next/image";
// import { ConnectButton } from "thirdweb/react";
// import { client } from "./client";
import Layout from './layout';
import MainDashboard from '../components/Dashboard/MainDashboard';
import CategoryPerformance from '../components/Category/CategoryPerformance';

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MainDashboard />
        <CategoryPerformance />
      </div>
    </Layout>
  );
}




