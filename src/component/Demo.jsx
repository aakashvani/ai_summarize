import { useState, useEffect } from "react";

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center">
          <img src="" alt="" />
          <input
            type="url"
            placeholder="Enter a URL"
            value=""
            onChange={() => {}}
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
