
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DocSidebar from '@/components/DocSidebar';
import DocContent from '@/components/DocContent';
import { Button } from '@/components/ui/button';
import { List, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Documentation = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex flex-1 pt-16">
        {/* Mobile sidebar toggle */}
        {isMobile && !sidebarOpen && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="fixed left-4 top-20 z-40"
            onClick={() => setSidebarOpen(true)}
          >
            <List className="h-5 w-5" />
          </Button>
        )}
        
        {/* Sidebar */}
        <div 
          className={`fixed inset-0 z-30 bg-background/80 backdrop-blur-sm transition-all duration-300 ${
            sidebarOpen || !isMobile ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={(e) => {
            if (isMobile && e.target === e.currentTarget) {
              setSidebarOpen(false);
            }
          }}
        >
          <div className={`fixed top-16 bottom-0 left-0 z-40 w-64 transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
            <DocSidebar />
            
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-4 top-4"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
        
        {/* Main content */}
        <div className={`flex flex-1 transition-all duration-300 ${
          sidebarOpen && !isMobile ? "ml-64" : "ml-0"
        }`}>
          <DocContent />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;
