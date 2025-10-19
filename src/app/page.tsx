'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Hammer,
  Rocket,
  Target,
  Cog,
  Twitter,
  MessageCircle,
  Send,
  Sparkles,
} from 'lucide-react';
import { FloatingShapes } from '@/components/FloatingShapes';
import { FloatingParticles } from '@/components/FloatingParticles';
import { PulsingOrb } from '@/components/PulsingOrb';
import { CountdownTimer } from '@/components/CountdownTimer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  const scrollToEmail = () => {
    const emailInput = document.querySelector('input[type="email"]');
    emailInput?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #000000 0%, #0a0a1a 50%, #1a0a2e 100%)',
      }}
    >
      <FloatingShapes />
      <FloatingParticles />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-8"
          >
            <h1
              className="text-6xl md:text-8xl mb-4 tracking-wider font-bold"
              style={{
                background: 'linear-gradient(135deg, #7B2CBF, #4ADE80)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ZOA.fun
            </h1>
          </motion.div>

          <PulsingOrb />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center max-w-4xl"
          >
            <h2
              className="text-4xl md:text-6xl mb-6 tracking-tight font-bold"
              style={{ color: '#ffffff' }}
            >
              WHERE MEMES MEET MEANING.
            </h2>

            <p
              className="text-xl md:text-2xl mb-12"
              style={{ color: '#9ca3af' }}
            >
              The first Build-to-Earn Launchpad. Spark your token, forge its
              future, and play to build real value.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-14 px-6"
              />
              <Button
                type="submit"
                className="h-14 px-8 text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #7B2CBF, #3B82F6)',
                  color: 'white',
                }}
              >
                🚀 NOTIFY ME
              </Button>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-green-400 text-sm mb-4"
              >
                ✓ Thanks for joining the waitlist! Check your email for
                confirmation.
              </motion.div>
            )}

            <p className="text-sm mb-4" style={{ color: '#6b7280' }}>
              Launching in...
            </p>
            <CountdownTimer />
          </motion.div>
        </section>

        {/* Core Concept Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl backdrop-blur-sm"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(123, 44, 191, 0.1), rgba(74, 222, 128, 0.1))',
                  border: '1px solid rgba(123, 44, 191, 0.3)',
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{
                    background:
                      'linear-gradient(135deg, #7B2CBF, #4ADE80)',
                    boxShadow:
                      '0 0 40px rgba(123, 44, 191, 0.5)',
                  }}
                >
                  <Zap className="w-10 h-10 text-white" />
                </div>

                <h3
                  className="text-3xl mb-4 text-center font-bold"
                  style={{ color: '#4ADE80' }}
                >
                  ⚡ INSTANT LAUNCH
                </h3>

                <p
                  className="text-lg text-center"
                  style={{ color: '#d1d5db' }}
                >
                  Unleash your idea in seconds. No code, no barriers. Capture
                  the hype and ride the wave of pure, unadulterated meme
                  energy. This is where every legend gets its spark.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl backdrop-blur-sm"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(123, 44, 191, 0.1))',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{
                    background:
                      'linear-gradient(135deg, #3B82F6, #7B2CBF)',
                    boxShadow:
                      '0 0 40px rgba(59, 130, 246, 0.5)',
                  }}
                >
                  <Hammer className="w-10 h-10 text-white" />
                </div>

                <h3
                  className="text-3xl mb-4 text-center font-bold"
                  style={{ color: '#3B82F6' }}
                >
                  🔨 COMMUNITY FORGE
                </h3>

                <p
                  className="text-lg text-center"
                  style={{ color: '#d1d5db' }}
                >
                  Evolve your spark into something lasting. Rally your
                  community, build a treasury, and complete quests to turn
                  viral potential into tangible products and value.
                </p>
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-32 h-1"
                  style={{
                    background:
                      'linear-gradient(90deg, #7B2CBF, #4ADE80, #3B82F6)',
                    boxShadow:
                      '0 0 20px rgba(123, 44, 191, 0.5)',
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl text-center mb-16 font-bold"
              style={{ color: '#ffffff' }}
            >
              FROM SPARK TO EMPIRE
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(123, 44, 191, 0.05), rgba(59, 130, 246, 0.05))',
                  border: '1px solid rgba(123, 44, 191, 0.2)',
                }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{
                    background:
                      'linear-gradient(135deg, #7B2CBF, #3B82F6)',
                    boxShadow:
                      '0 0 30px rgba(123, 44, 191, 0.4)',
                  }}
                >
                  <Rocket className="w-12 h-12 text-white" />
                </div>

                <h3
                  className="text-2xl mb-4 font-bold"
                  style={{ color: '#7B2CBF' }}
                >
                  🚀 LAUNCH
                </h3>

                <p className="text-lg" style={{ color: '#d1d5db' }}>
                  Deploy your token in a flash. Gather your tribe and start
                  trading.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(74, 222, 128, 0.05))',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{
                    background:
                      'linear-gradient(135deg, #3B82F6, #4ADE80)',
                    boxShadow:
                      '0 0 30px rgba(59, 130, 246, 0.4)',
                  }}
                >
                  <Target className="w-12 h-12 text-white" />
                </div>

                <h3
                  className="text-2xl mb-4 font-bold"
                  style={{ color: '#3B82F6' }}
                >
                  🎯 INCUBATE
                </h3>

                <p className="text-lg" style={{ color: '#d1d5db' }}>
                  Enter the Arena. Propose ideas, vote on direction, and fund
                  a community treasury.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(74, 222, 128, 0.05), rgba(123, 44, 191, 0.05))',
                  border: '1px solid rgba(74, 222, 128, 0.2)',
                }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{
                    background:
                      'linear-gradient(135deg, #4ADE80, #7B2CBF)',
                    boxShadow:
                      '0 0 30px rgba(74, 222, 128, 0.4)',
                  }}
                >
                  <Cog className="w-12 h-12 text-white" />
                </div>

                <h3
                  className="text-2xl mb-4 font-bold"
                  style={{ color: '#4ADE80' }}
                >
                  ⚙️ BUILD
                </h3>

                <p className="text-lg" style={{ color: '#d1d5db' }}>
                  Complete Quests. Turn ideas into reality—NFTs, games,
                  merch—and let your token accrue real value.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-5xl md:text-6xl font-bold mb-6"
                style={{ color: '#ffffff' }}
              >
                Why ZOA.fun?
              </h2>
              <p className="text-xl" style={{ color: '#9ca3af' }}>
                The meme coin revolution deserves infrastructure that does not
                leave projects behind.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: 'Zero Barriers to Entry',
                  description:
                    'Launch your token without technical expertise. No coding required. Just pure creativity and community.',
                  color: '#7B2CBF',
                },
                {
                  icon: Target,
                  title: 'Full Lifecycle Support',
                  description:
                    'From launch to scale. We support your project through every stage—incubation, development, and sustainable growth.',
                  color: '#3B82F6',
                },
                {
                  icon: Hammer,
                  title: 'Community-Driven Development',
                  description:
                    'Your community votes, builds, and shares in the success. Decentralized governance ensures alignment.',
                  color: '#4ADE80',
                },
                {
                  icon: Rocket,
                  title: 'Real Value Creation',
                  description:
                    'Move beyond pump-and-dump. Build real products, generate revenue, and attract serious funding.',
                  color: '#9333ea',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl backdrop-blur-sm"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(123, 44, 191, 0.08), rgba(59, 130, 246, 0.08))',
                      border: '1px solid rgba(123, 44, 191, 0.2)',
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}, ${item.color}40)`,
                        boxShadow: `0 0 20px ${item.color}40`,
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-2xl mb-3 font-bold"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: '#d1d5db' }}>
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-5xl md:text-6xl mb-6 font-bold"
                style={{ color: '#ffffff' }}
              >
                The Arena Awaits.
              </h2>

              <p
                className="text-xl md:text-2xl mb-12"
                style={{ color: '#9ca3af' }}
              >
                Be the first to know when the gates open. The future of crypto
                creation is not just about launching&mdash;it&apos;s about building,
                together.
              </p>

              <Button
                onClick={scrollToEmail}
                className="h-16 px-10 text-xl mb-16 font-bold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #7B2CBF, #3B82F6)',
                  color: 'white',
                }}
              >
                🚀 SECURE MY SPOT
              </Button>

              <div className="flex justify-center gap-6 mb-8">
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(123, 44, 191, 0.2), rgba(59, 130, 246, 0.2))',
                    border: '1px solid rgba(123, 44, 191, 0.3)',
                  }}
                >
                  <Twitter
                    className="w-6 h-6"
                    style={{ color: '#4ADE80' }}
                  />
                </motion.a>

                <motion.a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(123, 44, 191, 0.2), rgba(59, 130, 246, 0.2))',
                    border: '1px solid rgba(123, 44, 191, 0.3)',
                  }}
                >
                  <MessageCircle
                    className="w-6 h-6"
                    style={{ color: '#3B82F6' }}
                  />
                </motion.a>

                <motion.a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(123, 44, 191, 0.2), rgba(59, 130, 246, 0.2))',
                    border: '1px solid rgba(123, 44, 191, 0.3)',
                  }}
                >
                  <Send
                    className="w-6 h-6"
                    style={{ color: '#7B2CBF' }}
                  />
                </motion.a>
              </div>

              <p className="mt-4 text-sm" style={{ color: '#6b7280' }}>
                Join the ZOA Army on Discord
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-12 text-center border-t border-white/10"
          style={{ color: '#6b7280' }}
        >
          <p className="text-sm mb-2">
            Copyright 2025 ZOA.fun • Where Memes Meet Meaning
          </p>
          <p className="text-xs" style={{ color: '#4b5563' }}>
            Zero-to-One Accelerator - Rescuing Meme Coins, Building Real Value
          </p>
        </footer>
      </div>
    </div>
  );
}
