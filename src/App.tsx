import { useEffect, useState } from 'react';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { InformationSection } from './components/InformationSection';
import { IntroSection } from './components/IntroSection';
import { McpAiSection } from './components/McpAiSection';
import { Navbar } from './components/Navbar';
import { ReservationBoard } from './components/ReservationBoard';
import { TeachersSection } from './components/TeachersSection';

const pageIds = ['home', 'reservation', 'teachers', 'information', 'community', 'mcp-ai', 'contact'] as const;
type PageId = (typeof pageIds)[number];

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace('#', '');
  return pageIds.includes(hash as PageId) ? (hash as PageId) : 'home';
}

export default function App() {
  const [page, setPage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    const syncPage = () => {
      setPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f0df] font-body text-[#18202f]">
      <Navbar activePage={page} />
      <main key={page} className={page === 'contact' ? 'min-h-screen bg-[#f7f0df] pt-20' : undefined}>
        {page === 'home' && (
          <>
            <HeroSection />
            <IntroSection />
          </>
        )}
        {page === 'reservation' && <ReservationBoard />}
        {page === 'teachers' && <TeachersSection />}
        {page === 'information' && <InformationSection />}
        {page === 'community' && <CommunitySection />}
        {page === 'mcp-ai' && <McpAiSection />}
        {page === 'contact' && <Footer />}
      </main>
      {page !== 'contact' && <Footer />}
    </div>
  );
}
