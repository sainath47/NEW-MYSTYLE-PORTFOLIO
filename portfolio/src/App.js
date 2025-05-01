import './App.css';
import sainath from './photos/sainath.jpg';
function App() {
  return (
    <div className="App">
<nav>
  <div className='left'>
  <a className='name' href="/">Sainath Reddy</a>
  </div>
  {/* class="text-white sm:hidden md:hidden" */}
<div className='right' >
<a  href="/">Home</a>
{/* <a className='name' href="/">About</a> */}
<a  href="/">Skills</a>
<a  href="/">Experience</a>
<a href="/">Contact</a>
{/* Home, 
About, 
Skills,
Experience,
 Projects, (coming soon, i have done many will portray them here beautifuly , at list them out here)
Contact. */}
</div>
<div className="hamburger">
<i class="fas fa-bars"></i>
</div>
<div className="side-menu">
  hello god is speaking to the gods
</div>

</nav>
<div className="sections">
<section id='hero'>
  <div className='left'>
    <span>Hey, Iam Sainath!</span>
    <span className="largest-boldest">Full-Stack Developer and Lifelong Learner.</span>
    
    <p>
    I learn, build, and empower others with my knowledge. Crafting robust backend systems and intuitive frontend experiences is my passion.
    </p>
  </div>
  <div className='right'>
<img src={sainath} alt="hello"/>
  </div>
</section>

<section id="skills">
<div class="bg-gray-200 text-black">
  <section class="mx-auto p-10">
    <h1 class="font-black text-4xl mb-12 text-center">Skills</h1>

    {/* <!-- Skills & Expertise Panel --> */}
    <div class="border border-gray-300 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">


      <div class="space-y-8 text-gray-800 text-sm">
        <div>
          <h3 class="font-semibold text-xl mb-4 flex items-center gap-3 text-blue-700">
            <i class="fas fa-cogs"></i> Core Competencies
          </h3>
          <ul class="space-y-3">
            <li class="flex items-center gap-3">
              <i class="fab fa-node-js text-green-600 text-xl w-6"></i>
              <span>Node.js</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fab fa-js-square text-yellow-400 text-xl w-6"></i>
              <span>TypeScript / JavaScript</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-cloud text-blue-500 text-xl w-6"></i>
              <span>AWS S3 / EC2</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-database text-purple-600 text-xl w-6"></i>
              <span>MongoDB / SQL (Postgres & MySQL)</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-lock text-red-600 text-xl w-6"></i>
              <span>JWT (Authentication & Authorization)</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fab fa-python text-blue-700 text-xl w-6"></i>
              <span>Python (Flask)</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-xl mb-4 flex items-center gap-3 text-green-700">
            <i class="fas fa-project-diagram"></i> Projects & Technologies
          </h3>
          <ul class="space-y-3">
            <li>
              <span class="font-semibold">Ecommerce Backend Project:</span> Dynamic cart system, CRUD ops, Redis caching, JWT auth, Socket.IO real-time communication.
            </li>
            <li>
              <span class="font-semibold">Frontend:</span> React, Next.js, CSS frameworks, Multer & AWS S3 for image uploads.
            </li>
            <li>
              <span class="font-semibold">Content Curation Feature:</span> API optimization, Twitter & LinkedIn API integration, Swagger docs.
            </li>
            <li>
              <span class="font-semibold">Push Notifications:</span> Expo push notifications for enhanced engagement.
            </li>
            <li>
              <span class="font-semibold">Team Leadership:</span> Led 5-member team to deliver a large-scale project within 1 week.
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-wrap justify-center gap-4">
        <span class="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-md flex items-center gap-2">
          <i class="fab fa-node-js"></i> Node.js
        </span>
        <span class="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-md flex items-center gap-2">
          <i class="fab fa-js-square"></i> JavaScript
        </span>
        <span class="bg-blue-700 text-white px-4 py-2 rounded-full font-semibold shadow-md flex items-center gap-2">
          <i class="fab fa-python"></i> Python (Flask)
        </span>
        <span class="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold shadow-md flex items-center gap-2">
          <i class="fas fa-database"></i> MongoDB
        </span>
        <span class="bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold shadow-md flex items-center gap-2">
          <i class="fas fa-database"></i> PostgreSQL / MySQL
        </span>
        <span class="bg-red-600 text-white px-4 py-2 rounded-full font-semibold shadow-md flex items-center gap-2">
          <i class="fas fa-lock"></i> JWT Auth
        </span>
        <span class="bg-green-600 text-white px-4 py-2 rounded-full font-semibold shadow-md flex items-center gap-2">
          <i class="fas fa-cloud"></i> AWS S3 / EC2
        </span>
        <span class="bg-pink-600 text-white px-4 py-2 rounded-full font-semibold shadow-md flex items-center gap-2">
          <i class="fas fa-credit-card"></i> Stripe & PayPal
        </span>
        <span class="bg-teal-600 text-white px-4 py-2 rounded-full font-semibold shadow-md flex items-center gap-2">
          <i class="fas fa-comments"></i> Chatbot & Azure Blob Storage
        </span>
        <span class="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold shadow-md flex items-center gap-2">
          <i class="fas fa-project-diagram"></i> API Design & Security
        </span>
      </div>
    </div>
  </section>
</div>

</section>
<section id="experience">
  <section class="mx-auto p-10">
  <h1 class="font-black text-4xl mb-12 text-center">Professional Experience</h1>
      {/* <!-- Experience Timeline Panel --> */}
      <div class="relative bg-white border border-gray-300 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">

      <div class="space-y-12 relative">
        {/* <!-- Vertical line --> */}
        <div class="absolute top-12 left-8 bottom-0 w-1 bg-yellow-300 rounded hidden md:block"></div>

        {/* <!-- Experience Item --> */}
        <div class="md:flex md:items-start md:space-x-8 relative z-10">
          <div class="md:w-1/12 flex justify-center">
            <div class="w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-md mt-2 md:mt-0"></div>
          </div>
          <div class="md:w-11/12">
            <h3 class="text-xl font-semibold text-gray-900">Backend Developer</h3>
            <p class="text-sm text-gray-500 mb-3">I2E Consulting | Sep 2023 - Present</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Developed responsive email templates with HTML/CSS and automated dispatch via Cron Jobs.</li>
              <li>Optimized backend APIs with pagination, indexing, and caching for enhanced performance.</li>
              <li>Managed deployments on Virtual Machines ensuring zero downtime.</li>
              <li>Integrated payment gateways (Stripe & PayPal) for seamless payment processing.</li>
              <li>Led database migration from MySQL to PostgreSQL with schema optimization.</li>
              <li>Played key role in chatbot development with Azure Blob Storage integration.</li>
            </ul>
          </div>
        </div>

        {/* <!-- Experience Item --> */}
        <div class="md:flex md:items-start md:space-x-8 relative z-10">
          <div class="md:w-1/12 flex justify-center">
            <div class="w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-md mt-2 md:mt-0"></div>
          </div>
          <div class="md:w-11/12">
            <h3 class="text-xl font-semibold text-gray-900">Backend Developer</h3>
            <p class="text-sm text-gray-500 mb-3">Greenify | May 2023 - Sep 2023</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Thrived as a full-stack developer, bridging frontend and backend development.</li>
              <li>Delivered innovative dynamic solutions aligned with business goals.</li>
            </ul>
          </div>
        </div>

        {/* <!-- Experience Item --> */}
        <div class="md:flex md:items-start md:space-x-8 relative z-10">
          <div class="md:w-1/12 flex justify-center">
            <div class="w-6 h-6 bg-yellow-300 rounded-full border-4 border-white shadow-md mt-2 md:mt-0"></div>
          </div>
          <div class="md:w-11/12">
            <h3 class="text-xl font-semibold text-gray-900">Backend Developer</h3>
            <p class="text-sm text-gray-500 mb-3">Razorlabz | Sep 2020 - May 2023</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Led backend development integrating Twitter and LinkedIn APIs & Swagger docs.</li>
              <li>Engineered content curation features optimizing API calls and user engagement.</li>
              <li>Collaborated with frontend teams to deliver cohesive UI despite backend focus.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</section>
</section>
<section id="contact-us">
<div class="bg-gray-200 text-black">
  <div class="min-h-screen flex flex-col md:flex-row">
    {/* <!-- Left side: Contact Form + Info --> */}
    <div class="w-full md:w-1/2 bg-gray-200 p-10 flex flex-col justify-center max-w-md mx-auto space-y-12">
      <h1 class="font-black text-3xl">Contact Me</h1>
      <form class="space-y-6" action="#" method="POST" novalidate>
        <div>
          <label for="name" class="block mb-1 font-semibold text-sm">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            class="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="email" class="block mb-1 font-semibold text-sm">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            class="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="message" class="block mb-1 font-semibold text-sm">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            placeholder="Write your message here"
            class="w-full border border-gray-300 rounded-md p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition"
        >
          Send Message
        </button>
      </form>

      <div class="pt-8 border-t border-gray-200">
        <h2 class="font-semibold text-lg mb-4">Find me on</h2>
        <div class="flex flex-col space-y-4 text-gray-700 text-sm">
          <a href="https://github.com/sainath47" target="_blank" rel="noopener" class="flex items-center gap-3 hover:text-black transition">
            <i class="fab fa-github text-2xl"></i>
            <span>GitHub: github.com/sainath47</span>
          </a>
          <a href="https://www.linkedin.com/in/sainath-reddy-4444a7234/" target="_blank" rel="noopener" class="flex items-center gap-3 hover:text-blue-700 transition">
            <i class="fab fa-linkedin text-2xl text-blue-700"></i>
            <span>LinkedIn: linkedin.com/in/sainath-reddy-4444a7234</span>
          </a>
          <a href="mailto:p.v.sainathreddy@hotmail.com" class="flex items-center gap-3 hover:text-red-600 transition">
            <i class="fas fa-envelope text-2xl text-red-600"></i>
            <span>Email: p.v.sainathreddy@hotmail.com</span>
          </a>
          <a href="tel:+918826474768" class="flex items-center gap-3 hover:text-green-600 transition">
            <i class="fas fa-phone-alt text-2xl text-green-600"></i>
            <span>Phone: +91 8826474768</span>
          </a>
        </div>
      </div>
    </div>

    {/* <!-- Right side: Image + Navigation --> */}
    <div class="hidden sm:block w-full md:w-1/2 relative">
      <img
        src="https://storage.googleapis.com/a1aa/image/6003f1aa-c206-43d8-a4e7-d1b0d6f772d6.jpg"
        alt="Person holding smartphone and laptop on desk symbolizing contact and communication"
        class="w-full h-full object-cover"
        width="800"
        height="600"
      />

      <button
        aria-label="Settings"
        class="absolute bottom-6 left-6 bg-black bg-opacity-80 text-white p-2 rounded-md text-xs"
      >
        <i class="fas fa-cog"></i>
      </button>
    </div>
  </div>
</div>

</section>
</div>
    </div>
  );
}

export default App;


