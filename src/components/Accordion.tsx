type AccordionProps = {
  title: string;
  body: string;
  selected: string;
  setAccordion: (accordion: string) => void;
};

export const Accordion = function ({
  title,
  body,
  selected,
  setAccordion,
}: AccordionProps) {
  const handleClick = (accordion: string) => {
    if (accordion === selected) {
      setAccordion("");
    } else {
      setAccordion(title);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <button
        className="group/item flex justify-between py-4 items-center border-b-[1px]"
        onClick={() => handleClick(title)}
      >
        <span className="text-secondary text-sm font-semibold group-hover/item:text-primary">
          {title}
        </span>

        <span className="text-lg text-gray-500 font-extrabold">{`${
          selected === title ? "-" : "+"
        }`}</span>
      </button>
      {selected === title && (
        <p className="my-5 text-secondary text-sm font-light text-left">
          {body}
        </p>
      )}
    </div>
  );
};
