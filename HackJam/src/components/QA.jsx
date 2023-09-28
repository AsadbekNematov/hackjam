import { useState } from 'react'

function QA({question, answer}) {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? 'display' : 'hidden';
  const borderRadius = expand ? 'rounded-3xl' : 'rounded-t-full rounded-b-full'
  const ansClass = `${expandClass} p-4 text-left`
  const container = `${borderRadius} shadow rounded-3xl border border-gray-100`
  
  return (
    <div className={container}>
      <div className="p-4 text-xl relative font-medium">
        <div className="text-left w-5/6">
          {question}
        </div>
        <button
          aria-label="question-expander"
          className="text-x absolute top-0 right-0 p-4 bg-transparent border-none faq-btn"
          onClick={() => setExpand(!expand)}
        >
          {
            expand ?
              <i className="fa-solid fa-plus spin-right"></i>
            :
            <i className="fa-solid fa-plus spin-left"></i>
          }
        </button>
      </div>
      <div className={ansClass}>
        {answer}
      </div>
    </div>
  )
}

export default QA