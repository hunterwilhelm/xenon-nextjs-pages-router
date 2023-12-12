import dynamic from 'next/dynamic'
// import HomePage from "@/ui/HomePage";

const HomePage =  dynamic(()=>import('@/ui/HomePage'), {ssr:false});

export default HomePage;
