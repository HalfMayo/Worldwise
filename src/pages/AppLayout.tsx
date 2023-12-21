import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";
import Button from "../storybook_components/Button";
import { useCities } from "../contexts/CitiesContext";

export default function AppLayout() {
  const { isOpen, setIsOpen } = useCities();
  return (
    <div className="flex relative">
      <Sidebar />
      <Map />
      <User className="lg:absolute w-full lg:w-auto justify-between lg:justify-center fixed z-20 lg:top-2 lg:right-2 bg-surface-container" />
      {window.innerWidth <= 768 && !isOpen && (
        <Button
          label="Go to your Cities"
          color="primary"
          rank="main"
          onClick={setIsOpen}
          className="fixed bottom-8 left-[50%] translate-x-[-50%]"
        />
      )}
    </div>
  );
}
