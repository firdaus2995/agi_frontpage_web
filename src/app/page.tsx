'use client';

import { useRouter } from 'next/navigation';

import Button from "@/components/atoms/Button/Button";

const App = () => {
  const router = useRouter();

  const handleButtonClick = (href: string) => {
    router.push(href);
  };

  return (
    <div className="h-screen flex items-center justify-center gap-2">
      <Button 
        title="AVRIST"
        onClick={() => handleButtonClick("/avrast")}
      />
      <Button
        title="AVRAM"
        onClick={() => handleButtonClick("/avram")}
      />
      <Button
        title="AGI"
        // onClick={() => handleButtonClick("/agi")}
      />
    </div>
  )
}

export default App;
