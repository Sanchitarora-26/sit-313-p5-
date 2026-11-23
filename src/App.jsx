import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/login.jsx';
import Register from './Pages/Register.jsx';
import Post from './Pages/Post.jsx';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

const articles = [
  {
    title: 'Kirti Mandir',
    description: 'A memorable place that I explored and captured through photography.',
    image: '/images/IMG_8768.jpg',
    rating: '5.0',
    author: 'Sanchit Arora'
  },
  {
    title: 'Vrindavan Dham',
    description: 'A beautiful location representing culture, architecture and peaceful surroundings.',
    image: '/images/IMG_8769.jpg',
    rating: '4.9',
    author: 'Sanchit Arora'
  },
  {
    title: 'Barsana Radha Rani Temple',
    description: 'A memorable place captured during my visit to Barsana.',
    image: '/images/IMG_8774.jpg',
    rating: '4.8',
    author: 'Sanchit Arora'
  }
];

const tutorials = [
  {
    title: 'Responsive Web Design',
    description: 'How I built a responsive portfolio using HTML, CSS and JavaScript in my previous task.',
    image: '/images/IMG_9176.jpg',
    rating: '5.0',
    author: 'Sanchit Arora'
  },
  {
    title: 'React Components',
    description: 'How I divided my DEV@Deakin website into reusable React components.',
    image: '/images/IMG_9178.JPG',
    rating: '4.9',
    author: 'Sanchit Arora'
  },
  {
    title: 'Array and map()',
    description: 'How I store article data in an array and use map() to display the cards dynamically.',
    image: '/images/IMG_9187.JPG',
    rating: '4.8',
    author: 'Sanchit Arora'
  }
];

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <main>
              <Portfolio />
              <ContentSection
                id="articles"
                title="Featured Articles"
                items={articles}
                buttonText="See all articles"
              />
              <ContentSection
                id="tutorials"
                title="Featured Tutorials"
                items={tutorials}
                buttonText="See all tutorials"
              />
            </main>
            <Footer />
          </>
        }
      />

      <Route path="/post" element={<Post />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;