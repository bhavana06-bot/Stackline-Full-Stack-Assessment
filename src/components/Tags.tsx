


import React, { useState } from "react";

interface TagsProps {
    tagData: any [];
  }

const Tags: React.FC< TagsProps>= ({tagData}) => {
  
console.log('tagData',tagData);
    return (
    <div>
        <hr />
      <div className="tag-items">
        {tagData.map((item: string, index: number) => (
          <span key={index} className="tag">
            {item}
          </span>
        ))}
      </div>
      <hr />
      </div>
    );
  };

  export default Tags;