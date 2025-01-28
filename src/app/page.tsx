import Header from "@/layouts/header";
import ServicesSection from "@/sections/services-section";

export default function Home() {
    return (
        <div className="flex min-h-[100dvh] min-h-screen w-full flex-col">
            <Header />
            <main className="relative z-0 flex w-full flex-grow flex-col overflow-hidden">
                <ServicesSection />
            </main>
        </div>
    );
}
