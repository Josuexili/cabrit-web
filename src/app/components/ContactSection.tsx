'use client';

import Image from 'next/image';

export default function ContactSection() {
  return (
    <section
      id="contacte"
      className="min-h-screen flex items-center justify-center px-6 bg-black text-white text-center"
      aria-labelledby="contacte-title"
    >
      <div>
        <h2
          id="contacte-title"
          className="text-4xl font-extrabold mb-12 tracking-wide"
        >
          Contacta’m
        </h2>

        <div className="flex flex-col items-center space-y-8 text-white text-xl font-medium">
          {/* Telèfon amb WhatsApp */}
          <a
            href="https://wa.me/34666666666"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:text-green-400 transition"
            title="Contacta per WhatsApp al +34 666 666 666"
          >
            <Image
              src="/imatges/whatsapp-icon.png"
              alt="Icona WhatsApp"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <span className="text-2xl">+34 666 666 666</span>
          </a>

          {/* Correu electrònic */}
          <a
            href="mailto:roc@example.com"
            className="hover:text-green-400 transition text-2xl"
            title="Enviar correu electrònic a roc@example.com"
          >
            roc@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
