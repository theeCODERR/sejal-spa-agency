import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin")({
  component: AdminRoute,
});

import { supabase } from "@/lib/supabase";

function AdminRoute() {
  const navigate = useNavigate();
  const [telegramLink, setTelegramLink] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthAndLoadData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate({ to: "/login", replace: true });
        return;
      }

      // Load existing settings
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .limit(1)
        .maybeSingle();
        
      if (data) {
        setTelegramLink(data.telegram_link || "https://t.me/SEJAL_REDDY_02");
        setWhatsappNumber(data.whatsapp_number || "+1 (555) 018 · 2240");
      } else {
        setTelegramLink("https://t.me/SEJAL_REDDY_02");
        setWhatsappNumber("+1 (555) 018 · 2240");
      }
      setIsLoading(false);
    };
    
    checkAuthAndLoadData();
  }, [navigate]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(false);
    
    const { error } = await supabase
      .from('site_settings')
      .update({ telegram_link: telegramLink, whatsapp_number: whatsappNumber })
      .eq('id', 1);
      
    if (!error) {
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    } else {
      // Create if it doesn't exist
      await supabase.from('site_settings').insert([
        { id: 1, telegram_link: telegramLink, whatsapp_number: whatsappNumber }
      ]);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
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
