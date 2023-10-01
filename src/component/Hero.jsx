const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src="https://i.imgur.com/HReTxXJ.png"
          alt="Logo-image"
          className="w-40 object-contain"
        />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/aakashvani/ai_summarize")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI ChatGPT 3.5</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with summize, an open-source article summarize
        that tranforms lenghty article into clear and consise summaries
      </h2>
    </header>
  );
};

export default Hero;
