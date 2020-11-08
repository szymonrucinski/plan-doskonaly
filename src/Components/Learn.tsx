import ReactMarkdown from 'react-markdown'
import React from 'react';

const Learn = () => 
{
    const markdown = `
    # Header 1
    ## Header 2
  
    _ italic _
  
    ** bold **
  
    <b> bold Html </b>
    `;
  
    return (
        <div className="App">
      <ReactMarkdown source={markdown} />
      </div>)
}

export default Learn