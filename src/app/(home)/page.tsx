import Footer from "@/components/footer";
import Frontpage from "@/components/FrontPage";

const HomePage = () => {
  return (
    <div className="flex flex-col flex-1 max-w-2xl mx-auto px-4">
      <main id="main-content" className="flex-grow">
        <Frontpage />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
