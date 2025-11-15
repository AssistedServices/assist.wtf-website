import explainImg from "../assets/branding/RobotChain.png";
import shopbotImg from "../assets/branding/RobotShop.png";
import metaImg from "../assets/branding/RobotSocial.png";
import assistantImg from "../assets/branding/RobotBubble.png";
import React from "react";

function Automations() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold">Automations</h1>
        <p className="text-sm text-ink-muted">
          Not everything needs AI (but it can help). Most businesses get huge
          value just by wiring their existing tools together properly. When AI
          makes sense, we add it in carefully — not just for the buzzword.
        </p>
        <p className="text-sm text-ink-muted">
          Below are examples of automations I’ve actually built. Each can be
          adapted to your stack without starting from scratch.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {/* Explain the Chain */}
        <div className="accent-gradient p-[3px] rounded-xl">
          <img
            src={explainImg}
            alt="Explain the Chain"
            className="w-full h-auto rounded-xl"
          />
          <h2 className="text-lg font-semibold">Explain the Chain</h2>
          <p className="text-sm text-ink-muted">
            A friendly chatbot that helps beginners understand Blockchain and
            Crypto step by step. Built with LLMs and on-chain integrations, it
            takes people from &quot;What is crypto?&quot; to buying and using it
            confidently.
          </p>
          <ul className="text-sm text-ink-muted space-y-1">
            <li>• Uses ENS & CoinGecko for real-time data</li>
            <li>• Assumes zero prior knowledge</li>
            <li>• Ideal for education, communities & onboarding</li>
          </ul>
        </div>

        {/* Shop Bot */}
        <div className="accent-gradient p-[3px] rounded-xl">
          <img
            src={shopbotImg}
            alt="Shop Bot"
            className="w-full h-auto rounded-xl"
          />
          <h2 className="text-lg font-semibold">Shop Bot</h2>
          <p className="text-sm text-ink-muted">
            A one-stop agent for sales and support that lives inside WhatsApp,
            Instagram or Telegram. It helps customers browse products, builds a
            basket, collects delivery details and walks them through payment.
          </p>
          <ul className="text-sm text-ink-muted space-y-1">
            <li>• Runs from a single Google Sheet</li>
            <li>• Integrates with payment providers</li>
            <li>• Reduces your job to updating stock & shipping</li>
          </ul>
        </div>

        {/* Meta Integrations */}
        <div className="accent-gradient p-[3px] rounded-xl">
          <img
            src={metaImg}
            alt="Meta Integrations"
            className="w-full h-auto rounded-xl"
          />
          <h2 className="text-lg font-semibold">Meta Integrations</h2>
          <p className="text-sm text-ink-muted">
            Fully automated posting to Facebook & Instagram, using Gsuite software.
            Setup once and forget posting functionality.
          </p>
          <ul className="text-sm text-ink-muted space-y-1">
            <li>• Drag and drop image upload using Google Drive</li>
            <li>• Optional AI captions & hashtags, stored in Google Sheets</li>
            <li>• Works with your existing Meta and Gsuite accounts</li>
          </ul>
        </div>

        {/* Business Assistant */}
        <div className="accent-gradient p-[3px] rounded-xl">
          <img
            src={assistantImg}
            alt="Business Assistant"
            className="w-full h-auto rounded-xl"
          />
          <h2 className="text-lg font-semibold">Business Assistant</h2>
          <p className="text-sm text-ink-muted">
            A smart assistant that lives in your chat of choice and connects to
            your tools. Think scheduling, contact lookups, quick calculations,
            live alerting and document search, all from one chat window.
          </p>
          <ul className="text-sm text-ink-muted space-y-1">
            <li>• WhatsApp & Telegram chat integrations</li>
            <li>• Calendar & contact book integrations</li>
            <li>• Voice-to-text, email drafting, document search</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Automations;