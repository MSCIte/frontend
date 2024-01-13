interface FAQBlockProps {
  question: string;
  answer: string;
}

export const FAQBlock = (props: FAQBlockProps) => {
  return (
    <div className="">
      <div className="border-l-4 border-purple-500 bg-gray-400 text-black">
        Q. {props.question}
      </div>
      <div className="border-l-4 border-gray-500 bg-white text-black">
        A. {props.answer}
      </div>
    </div>
  );
};
