// import "@/styles/globals.css"; 
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import HomePage from "../../components/homePage";
// import MealPlanner from "../../components/mealPlanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <HomePage/>
        {/* <MealPlanner/> */}
        <Footer />
      </body>
    </html>
  );
}
