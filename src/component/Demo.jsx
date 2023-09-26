import { useState, useEffect } from "react";

const Demo = () => {
  const [article, setArtical] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
    alert("Submitted");
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img src="" alt="" />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) =>
              setArtical({
                article: { ...article, url: e.target.value },
              })
            }
            required
            className="url_input peer "
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            Enter
          </button>
        </form>
        {/* browse url history */}
      </div>
      {/* Display results */}
    </section>
  );
};

export default Demo;
