'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import React from "react";
  import { PlusCircle, MinusCircle } from "lucide-react";
import FaqForm from "./FaqForm";
  
  export function FaqSection() {
    const [openItem, setOpenItem] = React.useState<string | null>(null);
  
    const faqItems = [
      {
        question: "What do we fetch from digital marketing?",
        answer: "Digital marketing helps you reach a broader audience, target specific demographics, and analyze data to improve strategies. It includes SEO, content marketing, social media, and more.",
      },
      {
        question: "Which social media channels are the best for my business marketing?",
        answer: "The best social media channels depend on your business type. B2B businesses often find LinkedIn effective, while B2C businesses may benefit from platforms like Instagram, Facebook, and TikTok.",
      },
      {
        question: "How many logo variations can I get?",
        answer: "We typically provide 3-5 logo variations based on your initial requirements. Additional variations can be created upon request.",
      },
      {
        question: "Which CMS/framework will be used for website development?",
        answer: "We use popular CMS platforms like WordPress, as well as modern frameworks like Next.js, depending on your specific needs and project requirements.",
      },
      {
        question: "Is email marketing an effective approach?",
        answer: "Yes, email marketing is highly effective for engaging customers, nurturing leads, and driving conversions. It allows for personalized communication and measurable results.",
      },
      {
        question: "How frequently should I update my website?",
        answer: "Regular updates are crucial for maintaining SEO rankings, security, and user engagement. We recommend updating content, design, and features at least every few months.",
      },
      {
        question: "How does on-page SEO work for rank improvisation?",
        answer: "On-page SEO involves optimizing individual web pages, including content, meta tags, images, and internal links, to improve search engine rankings and attract more traffic.",
      },
      {
        question: "What are LSI Keywords?",
        answer: "LSI (Latent Semantic Indexing) keywords are terms related to your main keyword. They help search engines understand the content's context, improving relevance and ranking.",
      },
    ];
  
    return (
      <div className="flex flex-col justify-center items-center space-y-14 pb-11 bg-[url('/backgrounds/faq-bg.jpg')] bg-cover bg-no-repeat">
        <h1 className="text-3xl text-blue-950 uppercase text-center font-bold mt-8">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="mt-8 mx-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger
                className="max-w-lg text-left flex items-center justify-between"
                onClick={() => setOpenItem(openItem === `item-${index + 1}` ? null : `item-${index + 1}`)}
              >
                <span>{item.question}</span>
                {openItem === `item-${index + 1}` ? (
                  <MinusCircle className="h-5 w-5 shrink-0 transition-transform duration-200" />
                ) : (
                  <PlusCircle className="h-5 w-5 shrink-0 transition-transform duration-200" />
                )}
              </AccordionTrigger>
              <AccordionContent className="max-w-lg">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <FaqForm/>  
      </div>
    )
  }
  