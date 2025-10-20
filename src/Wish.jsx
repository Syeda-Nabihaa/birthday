import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import FlowersAnimation from "./Flower";
import "./Flower.css";
import Lottie from "lottie-react";
import cakeAnimation from "./assets/b1.json";

export default function WishPage() {
  const [showFlowers, setShowFlowers] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Step 1: Show bouquet after 1s
    const flowerTimer = setTimeout(() => setShowFlowers(true), 1000);

    // Step 2: Show confetti + birthday card after bouquet is visible
    const cardTimer = setTimeout(() => {
      setShowConfetti(true);
      setShowCard(true);
    }, 4000);

    return () => {
      clearTimeout(flowerTimer);
      clearTimeout(cardTimer);
    };
  }, []);

return (
  <div
    className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center 
    bg-gradient-to-br from-[#0f0f0f] via-[#1e293b] to-[#334155] 
  text-center p-6"
  >
    {/* 🎊 Confetti */}
    {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}

    {/* 🌸 Flowers - Bottom Left */}
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={
        showFlowers
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 100, scale: 0.8 }
      }
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute bottom-0 left-0 z-0 w-1/3 max-w-[300px]"
    >
      <FlowersAnimation />
    </motion.div>

    {/* 🎂 Cake Animation - Bottom Right */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={showCard ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="absolute bottom-0 right-0 z-0 w-1/3 max-w-[300px] flex justify-end"
    >
      <Lottie
        animationData={cakeAnimation}
        loop={true}
        className="w-full h-auto drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]"
      />
    </motion.div>

    {/* 💌 Birthday Card */}
    <motion.div
      className="relative z-10 flex flex-col justify-center items-center text-center  mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={showCard ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <BirthdayCard />
    </motion.div>
  </div>
);

}

function BirthdayCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 100,
      }}
      className="rounded-3xl p-8 w-full relative"
    >
      <motion.h1
        className="text-3xl font-bold bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent mb-3 font-[Pacifico]"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Happy Birthday, Sameer! 🎉
      </motion.h1>

      <motion.p
        className="text-white text-lg italic font-medium leading-relaxed  w-2/3 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        As you know, I’m not very good at expressing my feelings, but this is a
        little effort from me — I hope you’ll like it.
        <br />
        On your special day,I hope this year brings you everything you’ve ever
        wished for — success, happiness, and most importantly... me being less
        annoying to you (but thats  not the part -- I'll annoy you 😏)
        <br />
        Thank you
        for always being so supportive of me — you make me feel better whenever
        I’m down. You don’t know how much I care about you. Sometimes it’s just
        this feeling I can’t explain — the fear of losing you. I hope you feel
        the same love you’ve given me, because you truly deserve that and so
        much more. Your parents did an amazing job raising such a gentleman. You
        make me feel special, even with just by your words.Now without talking to
        you the day become so boring ..Thank you for always making my day better
        Wishing you a everlasting birthday with happiness and good health
        forever 💖 🌷💫
        <br />I was going to get you something special, but then I realized you
        already have me 😏
      </motion.p>

      <motion.div
        className="flex justify-center space-x-3 mt-4 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {["🎂", "🎁", "🥳", "🎈", "💝"].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
            className="text-2xl"
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
