import RevealOnScroll from '../UI/RevealOnScroll';

export const Contact = () => {
    return (
        <section 
          id="contact"
          className='h-[600px] pt-40 flex font-mono items-center justify-center'
        >
            <RevealOnScroll>
            <div className=" px-20 w-160">
                <h2 className='max-w-3xl text-5xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600
                    bg-clip-text text-transparent text-center'>
                    Get In Touch
                </h2>
                <form 
                action="https://formsubmit.co/poojanidanulya@gmail.com" method="POST"

                className="space-y-6">
                    <div className="relative">
                        <input type="text" id="name" name="name" placeholder="Name:" required  
                        className="w-full bg-white/10 border-r-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                        focus:border-blue-500 focus:bg-gray-800"
                        />    
                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="email" placeholder="Email:" required  
                        className="w-full bg-white/10 border-r-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                        focus:border-blue-500 focus:bg-gray-800"
                        />    
                    </div>
                    <div className="relative">
                        <textarea type="message" id="message" name="message" rows={6}  placeholder="Type your message:" required  
                        className="w-full bg-white/10 border-r-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                        focus:border-blue-500 focus:bg-gray-800"
                        />    
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 px-6 py-3 flex justify-center cursor-pointer
                      rounded font-medium trasnition relative overflow:hidden hover:-trasnlate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"> 
                        Submit
                    </button>
                </form>
            </div>
            </RevealOnScroll>

        </section>
    );
}