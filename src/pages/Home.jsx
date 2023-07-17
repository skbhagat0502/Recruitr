import "../App.css";
import LeftPart from "../components/LeftPart";
import Footer from "../components/Footer";
function Home(props) {
  return (
    <main className="h-screen">
      <h1 className="text-2xl font-bold text-start md:p-4 py-4 mx-5">
        Profile
      </h1>
      <div className="w-[95%] md:h-[75%] flex-col md:flex-row flex mx-auto justify-start p-2 mb-10 border border-slate-400 rounded-xl">
        <LeftPart />
        {props.children}
      </div>
      <Footer />
    </main>
  );
}
export default Home;
