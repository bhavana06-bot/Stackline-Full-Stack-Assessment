import React, { useState } from "react";

interface TagsProps {
  tagData: any[];
}

const Tags: React.FC<TagsProps> = ({ tagData }) => {
  return (
    <div>
      <div className="tag-items">
        {/* Iterate over `tagData` and render each item as a tag */}
        {tagData.map((item: string, index: number) => (
          <span key={index} className="tag">
            {item} {/* Display each tag item */}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tags; 