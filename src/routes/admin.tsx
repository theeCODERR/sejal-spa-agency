import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin")({
  component: AdminRoute,
});

function AdminRoute() {
  const navigate = useNavigate();
  const [telegramLink, setTelegramLink] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    if (isAuthenticated !== "true") {
      navigate({ to: "/login", replace: true });
    }

    // Load existing settings
    const savedTelegram = localStorage.getItem("telegramLink");
    const savedWhatsapp = localStorage.getItem("whatsappNumber");
    
    if (savedTelegram) setTelegramLink(savedTelegram);
    else setTelegramLink("https://t.me/sejalrelaxspa"); // Default fallback
    
    if (savedWhatsapp) setWhatsappNumber(savedWhatsapp);
    else setWhatsappNumber("+1 (555) 018 · 2240"); // Default fallback
  }, [navigate]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("telegramLink", telegramLink);
    localStorage.setItem("whatsappNumber", whatsappNumber);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate({ to: "/login", replace: true });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      <header className="flex justify-between items-center mb-10 max-w-4xl mx-auto w-full">
        <h1 className="text-2xl font-display text-gold-gradient">Admin Dashboard</h1>
        <div className="flex gap-4 items-center">
          <Button variant="outline" onClick={() => navigate({ to: "/" })}>
            View Site
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center pt-10">
        <Card className="w-full max-w-2xl border-border bg-card/60 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl">Contact Information</CardTitle>
            <CardDescription>
              Update the contact links and numbers displayed on the landing page.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSave}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="telegram">Telegram Link</Label>
                <Input 
                  id="telegram" 
                  value={telegramLink}
                  onChange={(e) => setTelegramLink(e.target.value)}
                  placeholder="https://t.me/yourlink"
                  required
                  className="bg-background/50"
                />
                <p className="text-xs text-muted-foreground">This is the link used for the "Check Reviews" button.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp / Phone Number</Label>
                <Input 
                  id="whatsapp" 
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="+91 9876543210"
                  required
                  className="bg-background/50"
                />
                <p className="text-xs text-muted-foreground">This number is displayed in the booking section.</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              {isSaved ? (
                <span className="text-sm text-green-500 font-medium">Settings saved successfully!</span>
              ) : (
                <span />
              )}
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-gold transition">
                Save Changes
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  );
}
