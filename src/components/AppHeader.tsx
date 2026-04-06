import { FileText, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppHeaderProps {
  showLogout?: boolean;
  onLogout?: () => void;
  username?: string;
}

const AppHeader = ({ showLogout, onLogout, username }: AppHeaderProps) => {
  return (
    <header className="bg-navbar text-navbar-foreground shadow-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <span className="text-lg font-bold tracking-tight">Document Management System</span>
        </div>
        <div className="flex items-center gap-3">
          {username && (
            <span className="text-sm opacity-90">{username}</span>
          )}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navbar-foreground/20">
            <User className="h-5 w-5" />
          </div>
          {showLogout && onLogout && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="text-navbar-foreground hover:bg-navbar-foreground/10"
            >
              <LogOut className="mr-1 h-4 w-4" />
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
