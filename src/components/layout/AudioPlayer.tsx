import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../ui/Button';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(_ => {
            // Auto-play was prevented.
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Fallback empty audio if /ambient.mp3 doesn't exist yet */}
      <audio
        ref={audioRef}
        loop
        src="/Ambient--Relaxing_AdobeStock_1264833597_preview.m4a"
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className={cn(
          "w-12 h-12 rounded-full glass flex items-center justify-center transition-shadow",
          isPlaying ? "shadow-[0_0_20px_rgba(0,240,255,0.6)]" : "hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        )}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary" />
        ) : (
          <VolumeX className="w-5 h-5 text-white/50" />
        )}
      </motion.button>
    </div>
  );
};
