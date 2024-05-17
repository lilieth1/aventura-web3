import React, { Fragment } from "react";

interface FormattedTextProps {
  text: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({ text }) => {
  const formatText = (text: string): JSX.Element[] => {
    const lines = text.split("\n");
    return lines.map((line, index) => <Fragment key={index}>{parseLine(line)}</Fragment>);
  };

  const parseLine = (line: string): JSX.Element => {
    const parts: JSX.Element[] = [];
    const regex = /\[title\](.*?)\[\/title\]|\[para\](.*?)\[\/para\]|\[list\](.*?)\[\/list\]|([^[]+)/g;
    let match;

    while ((match = regex.exec(line)) !== null) {
      if (match[1]) {
        // Title
        parts.push(
          <div
            key={`title-${parts.length}`}
            className="font-gilroy font-bold block my-5 text-custom-pink text-2xl text-[#FF57F6]"
          >
            {match[1]}
          </div>,
        );
      } else if (match[2]) {
        // Paragraph
        parts.push(
          <p key={`para-${parts.length}`} className="my-5">
            {match[2]}
          </p>,
        );
      } else if (match[3]) {
        // List
        parts.push(
          <ul key={`list-${parts.length}`} className="font-gilroy list-disc pl-5 my-5">
            {parseListItems(match[3])}
          </ul>,
        );
      } else if (match[4]) {
        // Regular text
        parts.push(<span key={parts.length}>{match[4]}</span>);
      }
    }

    return <div>{parts}</div>;
  };

  const parseListItems = (items: string): JSX.Element[] => {
    const itemRegex = /\[item\](.*?)\[\/item\]/g;
    const elements: JSX.Element[] = [];
    let match;

    while ((match = itemRegex.exec(items)) !== null) {
      elements.push(<li key={`item-${elements.length}`}>{match[1]}</li>);
    }

    return elements;
  };

  return <div>{formatText(text)}</div>;
};

export default FormattedText;
