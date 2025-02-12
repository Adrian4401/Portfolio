import Header from "../components/Header";


export default function Home() {
    return (
        <div className="flex justify-center min-h-screen w-full text-center bg-background px-2 xl:px-0">
            <div className="w-[1200px] flex flex-column">
                <Header />
            </div>
        </div>
    )
}