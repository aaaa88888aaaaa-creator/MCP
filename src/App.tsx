import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { McpAiSection } from './components/McpAiSection';
import { Navbar } from './components/Navbar';
import { ReservationBoard } from './components/ReservationBoard';
import { TeachersSection } from './components/TeachersSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f0df] font-body text-[#18202f]">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <ReservationBoard />
        <TeachersSection />
        <CommunitySection />
        <McpAiSection />
      </main>
      <Footer />
    </div>
  );
}
