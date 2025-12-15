import LanguageBar from './LanguageBar';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <LanguageBar />
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
