import RevealOnScroll from '../UI/RevealOnScroll';

export const Contact = () => {
  return (
    <section 
      id="contact"
      className="pt-40 flex font-mono justify-center items-center px-4 sm:px-8"
    >
      <RevealOnScroll>
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form 
            action="https://formsubmit.co/poojanidanulya@gmail.com" 
            method="POST"
            className="space-y-6"
          >
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Name" 
              required
              className="w-full bg-[rgba(31,41,55,0.7)] rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-gray-800"
            />
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Email" 
              required
              className="w-full bg-[rgba(31,41,55,0.7)] rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-gray-800"
            />
            <textarea 
              id="message" 
              name="message" 
              rows={6} 
              placeholder="Type your message" 
              required
              className="w-full bg-[rgba(31,41,55,0.7)] rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-gray-800"
            />
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 px-6 py-3 rounded font-medium hover:shadow-lg transition"
            >
              Submit
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
