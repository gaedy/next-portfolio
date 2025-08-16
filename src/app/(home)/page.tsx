import Footer from "@/components/footer";
import Frontpage from "@/components/FrontPage";


const HomePage = () => {
    return (
        <div className="min-h-screen w-full flex justify-center font-medium px-8">
            <div className="w-2xl flex flex-col min-h-screen ">

                <div className="flex-grow ">
                    <Frontpage/>
                </div>

                <Footer/>
            </div>
        </div>

    );
};

export default HomePage;