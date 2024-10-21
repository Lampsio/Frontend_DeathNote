"use client"

import React from 'react';
import { useState, useRef } from 'react';

const Home = () => {  
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoToggle = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-black text-white py-4 shadow-lg z-10 ">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <ul className="flex space-x-4 items-center">
            <li><a href="#characters" className="hover:text-gray-300 " style={{ fontFamily: 'Georgia, serif' }}>Characters</a></li>           
            <li>
              <img src="/image/Logo.png" alt="Logo" className="h-12 w-auto mx-4" />
            </li>
            <li><a href="#opening" className="hover:text-gray-300 " style={{ fontFamily: 'Georgia, serif' }}>Opening</a></li>
          </ul>
        </div>
      </nav>
      
      <div className="pt-16 min-h-screen flex flex-col items-center justify-center">
    <section className="relative w-full overflow-hidden p-[180px]">
      {/* Video Background */}
      <video 
        src="/video/videoplayback.mp4" 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      {/* Gray Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-neutral-950 opacity-90 pointer-events-none"></div>
        {/* Corner Images */}
        <img 
          src="/image/corner.png" 
          alt="Top Left Corner" 
          className="absolute top-0 left-0 w-[25%] h-auto m-5"
        />
        <img 
          src="/image/corner.png" 
          alt="Top Right Corner" 
          className="absolute top-0 right-0 w-[25%] h-auto m-5 transform rotate-90"
        />
        <img 
          src="/image/corner.png" 
          alt="Bottom Left Corner" 
          className="absolute bottom-0 left-0 w-[25%] h-auto m-5 transform scale-y-[-1]"
        />
        <img 
          src="/image/corner.png" 
          alt="Bottom Right Corner" 
          className="absolute bottom-0 right-0 w-[25%] h-auto m-5 transform scale-x-[-1] rotate-90"
        />
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Container for Images */}
        <div className="relative">
          {/* Name Image, positioned behind and slightly lower than Heart Image */}
          <img 
            src="/image/name.png" 
            alt="Name Image" 
            className="absolute top-[200px] left-0 w-[300px] h-[500px] object-contain z-0 py-15"
          />
          {/* Heart Image */}
          <img 
            src="/image/heart_image.png" 
            alt="Heart Image" 
            className="relative w-[300px] h-auto object-contain animate-heartbeat z-10"
          />
        </div>
      </div>
    </section>

    <section className="flex flex-col items-center justify-center w-full h-96 bg-zinc-950">
      <h1 className="text-white text-3xl mb-8" style={{ fontFamily: 'Georgia, serif' }}>Manga</h1>
      
      <div className="w-full overflow-hidden relative">
      <div className="carousel flex items-center gap-4 animate-marquee whitespace-nowrap hover:animation-pause">
        {/* Obrazki mang */}
        <div className="inline-block">
          <img 
            src="/manga/tom1.jpg" 
            alt="Manga 1" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://www.amazon.com/Death-Note-Vol-Tsugumi-Ohba/dp/1421501686', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom2.jpg" 
            alt="Manga 2" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://www.amazon.com/Death-Note-Black-Vol-2/dp/1421539659', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom3.jpg" 
            alt="Manga 3" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga3', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom4.jpg" 
            alt="Manga 4" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga4', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom5.jpg" 
            alt="Manga 5" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga5', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom6.jpg" 
            alt="Manga 6" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga6', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom7.jpg" 
            alt="Manga 7" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga7', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom8.jpg" 
            alt="Manga 8" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga8', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom9.jpg" 
            alt="Manga 9" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga9', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom10.jpg" 
            alt="Manga 10" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga10', '_blank')}
          />
        </div>
        {/* Powtórzone obrazki */}
        <div className="inline-block">
          <img 
            src="/manga/tom1.jpg" 
            alt="Manga 1" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://www.amazon.com/Death-Note-Vol-Tsugumi-Ohba/dp/1421501686', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom2.jpg" 
            alt="Manga 2" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://www.amazon.com/Death-Note-Black-Vol-2/dp/1421539659', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom3.jpg" 
            alt="Manga 3" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga3', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom4.jpg" 
            alt="Manga 4" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga4', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom5.jpg" 
            alt="Manga 5" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga5', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom6.jpg" 
            alt="Manga 6" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga6', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom7.jpg" 
            alt="Manga 7" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga7', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom8.jpg" 
            alt="Manga 8" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga8', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom9.jpg" 
            alt="Manga 9" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga9', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom10.jpg" 
            alt="Manga 10" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga10', '_blank')}
          />
        </div>
        {/* Powtórzone obrazki */}
        <div className="inline-block">
          <img 
            src="/manga/tom1.jpg" 
            alt="Manga 1" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://www.amazon.com/Death-Note-Vol-Tsugumi-Ohba/dp/1421501686', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom2.jpg" 
            alt="Manga 2" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://www.amazon.com/Death-Note-Black-Vol-2/dp/1421539659', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom3.jpg" 
            alt="Manga 3" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga3', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom4.jpg" 
            alt="Manga 4" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga4', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom5.jpg" 
            alt="Manga 5" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga5', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom6.jpg" 
            alt="Manga 6" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga6', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom7.jpg" 
            alt="Manga 7" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga7', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom8.jpg" 
            alt="Manga 8" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga8', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom9.jpg" 
            alt="Manga 9" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga9', '_blank')}
          />
        </div>
        <div className="inline-block">
          <img 
            src="/manga/tom10.jpg" 
            alt="Manga 10" 
            className="h-48 max-w-60 mx-4 inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open('https://example.com/manga10', '_blank')}
          />
        </div>
        </div>
      </div>
    </section>

    <section className="relative w-full h-auto bg-[url('/image/bg_red.png')] bg-cover bg-center flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-4/5 h-3/5 p-5">
        <div className="flex-1 flex items-center justify-center ">
         <img src="/image/apple1.png" alt="Death Note" className="w-full h-auto object-contain px-20 py-20 rotate-12" />
        </div>
        <div className="flex-1 text-white p-20 py-60 flex flex-col justify-center ">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>Death Note plote</h2>
          <p className="text-lg leading-relaxed" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>
           "Death Note" follows the story of Light Yagami, a high school student who discovers a mysterious notebook that allows him to kill anyone whose name he writes in it. As Light begins using the notebook to rid the world of criminals, he is pursued by a brilliant detective known only as L.
          </p>
        </div>
      </div>
        <img 
            src="/image/corner.png" 
            alt="Top Left Corner" 
            className="absolute top-0 left-0 w-[25%] h-auto m-5"
          />
          <img 
            src="/image/corner.png" 
            alt="Top Right Corner" 
            className="absolute top-0 right-0 w-[25%] h-auto m-5 transform rotate-90"
          />
          <img 
            src="/image/corner.png" 
            alt="Bottom Left Corner" 
            className="absolute bottom-0 left-0 w-[25%] h-auto m-5 transform scale-y-[-1]"
          />
          <img 
            src="/image/corner.png" 
            alt="Bottom Right Corner" 
            className="absolute bottom-0 right-0 w-[25%] h-auto m-5 transform scale-x-[-1] rotate-90"
          />
    </section>

    <section id="characters" className="relative w-full h-auto bg-[url('/image/bg_black_noisy.webp')] bg-cover bg-center flex flex-col items-center justify-start pt-8 py-10">
      <h1 className="text-white text-3xl mb-8">Characters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-8">
        {[
          { 
            name: 'Light Yagami', 
            description: 'Light Yagami is a highly intelligent high school student who discovers a mysterious notebook called the Death Note. The notebook grants him the power to kill anyone whose name he writes in it, provided he knows their face. Driven by a sense of justice, he adopts the persona of "Kira" and embarks on a mission to eliminate all criminals, believing he can create a utopia free of crime.', 
            image: '/image/frame_light.png' 
          },
          { 
            name: 'Ryuk', 
            description: 'Ryuk is a Shinigami, or death god, who becomes bored with his realm and decides to drop his Death Note into the human world for someone to find. He follows Light Yagami after he picks up the notebook, serving as a passive observer and sometimes offering cryptic advice. Ryuk’s fascination with humans and their behavior adds a darkly comedic element to the story.', 
            image: '/image/frame_Ryuk.png' 
          },
          { 
            name: 'L', 
            description: 'L is the enigmatic and world-renowned detective tasked with capturing Kira. Despite his unorthodox methods and peculiar habits, L is a genius with an unparalleled ability to solve mysteries. He quickly deduces that Kira is in Japan and is determined to bring him to justice, engaging in a tense and cerebral battle of wits with Light Yagami.', 
            image: '/image/frame_L.png' 
          },
          { 
            name: 'Misa Amane', 
            description: 'Misa Amane is a famous model and actress who becomes the second Kira after acquiring a Death Note of her own. She is deeply infatuated with Light Yagami and is willing to do anything to help him achieve his goals. Despite her outwardly cheerful and bubbly personality, Misa harbors a deep desire for vengeance against the criminals who killed her family.', 
            image: '/image/frame_Misa.png' 
          },
          { 
            name: 'Near', 
            description: 'Near is one of L’s successors, known for his calm demeanor and extraordinary analytical skills. After L’s death, Near takes up the task of tracking down Kira, leading the SPK (Special Provision for Kira) task force. Although he appears detached and emotionless, Near is highly determined to succeed where L could not.', 
            image: '/image/frame_Near.png' 
          },
          { 
            name: 'Mello', 
            description: 'Mello is the second of L’s successors, known for his impulsive and aggressive approach to solving the Kira case. In contrast to Near’s methodical style, Mello prefers direct action, often resorting to extreme measures to achieve his goals. His intense rivalry with Near and determination to surpass him drive much of his actions.', 
            image: '/image/frame_Mello.png' 
          },
          { 
            name: 'Soichiro Yagami', 
            description: 'Soichiro Yagami is Light’s father and the head of the police task force dedicated to capturing Kira. He is a principled and devoted officer who believes in justice and the rule of law. Despite his dedication to his work, Soichiro remains unaware of his son’s secret identity as Kira, making his pursuit of justice deeply personal and tragic.', 
            image: '/image/frame_Soichiro.png' 
          },
          { 
            name: 'Rem', 
            description: 'Rem is a Shinigami who, like Ryuk, drops her Death Note into the human world. She becomes attached to Misa Amane after Misa obtains her Death Note and views her with a sense of protection and care. Unlike Ryuk, Rem is willing to interfere in human affairs, especially if it means protecting Misa, even at the cost of her own existence.', 
            image: '/image/frame_Rem.png' 
          },
        ].map((character, index) => (
          <div 
            key={index} 
            className="relative bg-[url('/image/bg_black_noisy.webp')] border border-white p-4 py-10 text-center transform transition duration-300 ease-in-out hover:bg-gray-700 hover:shadow-2xl hover:scale-105"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-2 rounded-full transition duration-300 ease-in-out">
              <img src="/image/skull.png" alt="Skull Icon" className="w-8 h-8" />
            </div>
            <img 
              src={character.image} 
              alt={character.name} 
              className="w-full h-48 object-contain mb-4 transform transition duration-300 ease-in-out hover:scale-110" 
            />
            <h2 className="text-white text-xl font-bold transition duration-300 ease-in-out">{character.name}</h2>
            <p className="py-5 text-white text-base font-georgia transition duration-300 ease-in-out hover:translate-y-[-10px]">{character.description}</p>
          </div>
        ))}
      </div>
    </section>  

    <section id="opening" className="relative w-full h-auto bg-[url('/image/background1.webp')] bg-cover bg-center flex flex-col items-center justify-center pt-20 py-20">
      <h1 className="text-white text-3xl mb-8 text-center py-5">Opening</h1>
      <div className="relative w-full max-w-5xl">
        <video 
          ref={videoRef}
          src="/video/deathnote_op.mp4" 
          controls={isVideoPlaying} 
          poster="/image/bg_red.png"
          className="w-full h-auto border-4 border-white"
        />
        <button 
          onClick={handleVideoToggle} 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-white rounded-full p-2 transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
        >
          {!isVideoPlaying && <img src="/image/skull.png" alt="Play Icon" className="w-12 h-12" />}
        </button>
      </div>
    </section>

    <section className="w-full h-auto bg-[url('/image/bg_red.png')] flex flex-col items-center justify-center py-8">
      <div className="text-center text-white">
        <p className="text-sm mb-4">&copy; 2024 My Website. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Contact Us</a>
          </div>
      </div>
      <div className="mt-4 flex space-x-4">
        <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300 transition duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.337v21.326c0 .74.597 1.337 1.325 1.337h11.488v-9.274H9.691v-3.63h3.122V8.413c0-3.1 1.892-4.788 4.658-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.917.001c-1.504 0-1.794.715-1.794 1.763v2.314h3.588l-.467 3.63h-3.121V24h6.115c.729 0 1.325-.597 1.325-1.337V1.337C24 .597 23.403 0 22.675 0z" />
          </svg>
        </a>
        <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300 transition duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          
            <path d="M24 4.557a9.94 9.94 0 01-2.828.775 4.924 4.924 0 002.165-2.724 9.865 9.865 0 01-3.127 1.196 4.916 4.916 0 00-8.38 4.482A13.956 13.956 0 011.671 3.149 4.915 4.915 0 003.149 9.64a4.9 4.9 0 01-2.224-.616v.061a4.916 4.916 0 003.946 4.827 4.936 4.936 0 01-2.212.084 4.923 4.923 0 004.6 3.417A9.867 9.867 0 010 21.539 13.93 13.93 0 007.548 24c9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.557z" />
          </svg>
        </a>
        <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300 transition duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.345 3.608 1.32.975.975 1.257 2.242 1.32 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.257-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.257-2.242-1.32-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.257 3.608-1.32 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.015 7.052.072 5.77.13 4.606.38 3.68 1.307 2.754 2.233 2.504 3.397 2.446 4.678.015 8.333 0 8.741 0 12s.015 3.667.072 4.948c.058 1.281.308 2.445 1.234 3.371.926.927 2.09 1.176 3.371 1.234C8.333 23.985 8.741 24 12 24s3.667-.015 4.948-.072c1.281-.058 2.445-.308 3.371-1.234.927-.926 1.176-2.09 1.234-3.371.057-1.281.072-1.69.072-4.948s-.015-3.667-.072-4.948c-.058-1.281-.308-2.445-1.234-3.371-.926-.927-2.09-1.176-3.371-1.234C15.667.015 15.259 0 12 0zM12 5.838A6.163 6.163 0 005.838 12 6.163 6.163 0 0012 18.162 6.163 6.163 0 0018.162 12 6.163 6.163 0 0012 5.838zm0 10.162A3.998 3.998 0 018.002 12 3.998 3.998 0 0112 8.002 3.998 3.998 0 0115.998 12 3.998 3.998 0 0112 16zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
          </svg>
        </a>
      </div>
    </section>

  </div>
</div>
  );
}

export default Home;
