import React from 'react'
import { Footer, Navbar, Hero, News, Popular, RecentGame, RecentReviews, Testimonals, TopGame } from './components/index'
function App() {
  return  (
    <div className="font-[Poppins]">
      <div className={`bg-[url(./assets/herobg.jpg)] w-full bg-center bg-cover`}>
        <div className={`bg-opacity-65 bg-black`}>
          <Navbar />
          <Hero />
        </div>
      </div>
      <div>
        <News />
        <TopGame />
        <RecentGame />
        <Popular />
        <RecentReviews />
        <Testimonals />
        <Footer />
      </div>
    </div>
  )
}

export default App