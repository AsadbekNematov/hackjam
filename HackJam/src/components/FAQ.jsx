import QA from "./QA";

function FAQ() {  
  return (
    <div className="h-screen">
      <h1 className="m-auto">FAQ</h1>
      <br/>
      <div class="flex-col faq-flex justify-items-center">
        <div class="flex-none mb-3">
          <QA question={"Where is it?"} answer={"HackJam will take place at the Engineering II building."} />
        </div>
        <div class="flex-none mb-3">
          <QA question={"Where do I register?"} answer={"Click the registration button at the top of the screen, fill out the form, and we'll handle the rest!"}/>
        </div>
        <div class="flex-none mb-3">
          <QA question={"Do dogs know their own name?"} answer={"We may never know"}/>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
