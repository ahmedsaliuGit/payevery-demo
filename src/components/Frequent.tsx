import { useState } from "react";
import { Accordion } from "./Accordion";
import Section from "./Section";

export default function Frequent() {
  const [active, setActive] = useState("");

  const onClick = (accordion: string) => {
    setActive(accordion);
  };

  return (
    <Section>
      <div className="w-full md:w-[72%] lg:w-[63%]  md:mx-auto px-8 text-center mt-4 lg:mt-12">
        <p className="text-sm text-secondary font-semibold">
          If you have a question, we have an answer
        </p>
        <h4 className="font-extrabold mb-4 text-2xl text-primary">
          Frequently Asked Questions
        </h4>
        <p className="text-secondary text-sm mb-4 font-normal">
          Get answers to all questions you have and boost your knowledge on our
          services.
        </p>
        <div className="w-full my-8">
          <Accordion
            title="What is  paydestal?"
            body="We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences."
            selected={active}
            setAccordion={onClick}
          />
          <Accordion
            title="Is it possible to integrate plugin ?"
            body="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
            selected={active}
            setAccordion={onClick}
          />
          <Accordion
            title="What services do you offer?"
            body="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum."
            selected={active}
            setAccordion={onClick}
          />
          <Accordion
            title="Do you offer banking services?"
            body="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit."
            selected={active}
            setAccordion={onClick}
          />
          <Accordion
            title="What do i need to get started?"
            body="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit."
            selected={active}
            setAccordion={onClick}
          />
          <Accordion
            title="Where is Paydestal located?"
            body="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit."
            selected={active}
            setAccordion={onClick}
          />
        </div>
        <a
          href="#"
          className="bg-soft-blue p-3 font-normal text-white rounded inline-block my-4"
        >
          More Info
        </a>
      </div>
    </Section>
  );
}
