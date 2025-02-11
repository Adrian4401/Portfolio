import Header from "./components/Header";

function App() {
  return (
    <div className="flex justify-center min-h-screen w-full text-center bg-background">
      <div className="w-[1200px] flex flex-column">
        <Header />
      </div>
      {/* <header className="flex w-full bg-blue">
        
      </header> */}
    </div>
  );
}

export default App;