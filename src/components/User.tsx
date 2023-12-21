import { useAuth } from "../contexts/FakeAuthContext";
import Button from "../storybook_components/Button";
import { useNavigate } from "react-router-dom";

interface UserProps {
  className?: string;
}

export default function User({ className }: UserProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick(e?: React.MouseEvent<HTMLElement>) {
    if (!e) return;
    e.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <div className={`flex items-center gap-4 p-2 rounded-md ${className}`}>
      <div className="flex items-center gap-4">
        <img
          className="rounded-full max-h-14"
          src={user?.avatar}
          alt="Your Avatar"
        />
        <p className="font-semibold">Welcome, {user?.username}</p>
      </div>
      <Button label="Logout" onClick={handleClick} color="secondary" />
    </div>
  );
}
