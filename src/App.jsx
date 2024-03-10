import MainPage from "./components/MainPage";
import MessageComponent from "./components/MessageComponent";
import NavbarComponent from "./components/navigations/NavbarComponent";
import SideBarComponent from "./components/navigations/SideBarComponent";
export default function App() {
  return (
    <div className="bg-[#e4e7ea] p-10 h-screen">
      <div className="grid grid-cols-10 bg-white rounded-lg h-full">
        {/* sidebar */}
        <nav className="col-span-1">
          <SideBarComponent />
        </nav>
        {/* main content */}
        <main className="col-span-9">
          {/* navbar Component */}
          <section>
            <NavbarComponent />
          </section>
          {/* page contenet */}
          <div className="grid grid-cols-10 ">
            <main className="col-span-7 h-full">
              <MainPage />
            </main>
            {/* client message */}
            <section className="col-span-3">
              <MessageComponent />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
