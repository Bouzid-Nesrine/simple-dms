import { useLocation, useNavigate, Navigate } from "react-router-dom";
import AppHeader from "@/components/AppHeader";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Upload, FolderOpen } from "lucide-react";

const DashboardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = (location.state as { username?: string })?.username;

  if (!username) {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    navigate("/", { replace: true, state: null });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AppHeader showLogout onLogout={handleLogout} username={username} />

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 py-10">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome back, {username}
        </h1>
        <p className="mt-1 text-muted-foreground">
          Manage your documents from the dashboard.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <Card className="transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-center gap-3 pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <FileText className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="font-medium text-foreground">My Documents</span>
              <span className="text-sm text-muted-foreground">0 files</span>
            </CardContent>
          </Card>
          <Card className="transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-center gap-3 pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Upload className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="font-medium text-foreground">Upload</span>
              <span className="text-sm text-muted-foreground">Add new files</span>
            </CardContent>
          </Card>
          <Card className="transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-center gap-3 pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <FolderOpen className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="font-medium text-foreground">Shared</span>
              <span className="text-sm text-muted-foreground">Shared with you</span>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
