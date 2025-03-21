import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "../index.css";

const Askme = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const API_KEY = `AIzaSyAeU8QRUE6k4MSnFzvyqlkPr4a0-TneNWo`;

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  async function generateAnswer() {
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion(""); // Clear input immediately after sending

    // Add user question to chat history
    setChatHistory((prev) => [
      ...prev,
      { type: "question", content: currentQuestion },
    ]);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
      });

      const aiResponse = response.data.candidates[0].content.parts[0].text;
      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: aiResponse },
      ]);
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev,
        {
          type: "answer",
          content: "Sorry - Something went wrong. Please try again!",
        },
      ]);
    }
    setGeneratingAnswer(false);
  }

  // This function sets the question based on predefined buttons and triggers answer generation
  const preQuestion = (text) => {
    setQuestion(text);

    generateAnswer();
  };
  const [robot, setRobot] = useState(false);
  return (
    <>
      {robot === false ? (
        <svg
          className="fixed top-[85vh] right-[5%] rounded-[50%] bg-slate-200 animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 1024 1024"
          onClick={() => setRobot(true)}
        >
          <path
            className="fill-[#5045e5]"
            d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"
          ></path>
        </svg>
      ) : ( 
        <div className="fixed w-[300px] sm:w-[400px] md:w-[500px] min-h-[500px] max-h-[80vh] h-[40vh] top-[20vh] right-[5%] bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg text-sm md:text-lg ">
          <div className="chat-header z-30 fixed w-[300px] sm:w-[400px] md:w-[500px]">
                <div className="header-info ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 1024 1024"
                  >
                    <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
                  </svg>
                  <h2>AI Assistent</h2>
                </div>
                <button
                  className="material-symbols-outlined"
                  onClick={() => setRobot(false)}
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
          <div className="h-full max-w-4xl mx-auto flex flex-col p-3 relative mt-14 ">
            {/* Scrollable Chat Container */}

            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto mb-4 rounded-lg bg-white shadow-lg  hide-scrollbar "
            >
              
              {chatHistory.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 relative ">
                  <div className="bg-blue-50 rounded-xl p-8 max-w-2xl absolute top-24 ">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">
                      Welcome to WHC AI! 👋
                    </h2>
                    <p className="text-gray-600 mb-4">
                      I'm here to help you with anything you'd like to know. You
                      can ask me... <br />
                      Double Click
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      <button
                        className="bg-white p-4 rounded-lg shadow-sm"
                        onClick={() => preQuestion("Women's Health")}
                      >
                        <span className="text-blue-500">💡</span> Women's Health
                      </button>
                      <button
                        className="bg-white p-4 rounded-lg shadow-sm"
                        onClick={() => preQuestion("Women's Safety")}
                      >
                        <span className="text-blue-500">🔧</span> Women's Safety
                      </button>
                      <button
                        className="bg-white p-4 rounded-lg shadow-sm"
                        onClick={() =>
                          preQuestion("Awareness about Women Violence")
                        }
                      >
                        <span className="text-blue-500">📝</span> Awareness
                        about Women Violence
                      </button>
                      <button
                        className="bg-white p-4 rounded-lg shadow-sm"
                        onClick={() => preQuestion("Gender Equality")}
                      >
                        <span className="text-blue-500">🤔</span> Gender
                        Equality
                      </button>
                    </div>
                    <p className="text-gray-500 mt-6 text-sm">
                      Just type your question below and press Enter or click
                      Send!
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {chatHistory.map((chat, index) => (
                    <>
                      {chat.type !== "question" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            className="fill-[#5045e5]"
                            d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"
                          ></path>
                        </svg>
                      ) : (
                        ""
                      )}
                      <div
                        key={index}
                        className={`mb-4 p-3 ${
                          chat.type === "question" ? "text-right" : "text-left"
                        }`}
                      >
                        <div
                          className={`inline-block max-w-[80%] p-3 rounded-lg overflow-auto hide-scrollbar ${
                            chat.type === "question"
                              ? "bg-indigo-800 text-white rounded-br-none"
                              : "bg-gray-100 text-gray-800 rounded-bl-none"
                          } ${chat.isFirst ? "first:mt-20" : ""}`}
                        >
                          <ReactMarkdown className="overflow-auto hide-scrollbar">
                            {chat.content}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              )}
              {generatingAnswer && (
                <div className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 1024 1024"
                  >
                    <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
                  </svg>
                  <div className="inline-block bg-gray-100 p-3 rounded-lg animate-pulse">
                  <div class="message-text loaderbox">
            <div class="loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
                  </div>
                </div>
              )}
            </div>

            {/* Fixed Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                generateAnswer();
              }}
              className="bg-white rounded-lg shadow-lg p-2"
            >
              <div className="flex gap-2">
                <textarea
                  required
                  className="flex-1 border border-gray-300 rounded p-1 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none h-[36px]"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask me..."
                  rows="2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      generateAnswer();
                    }
                  }}
                ></textarea>
                <button
                  type="submit"
                  className={`px-6 py-1 bg-indigo-700 text-white rounded-md hover:bg-blue-600 transition-colors ${
                    generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={generatingAnswer}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Askme;
