import { useState, useEffect } from "react";
import Section from "../components/Section.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import Stats from "../components/Stats.jsx";

// Images
import imgClicks60 from "../images/60k+clicks.jpg";
import imgClicks70 from "../images/70k+clicks.jpg";
import imgAhub from "../images/ahub.jpg";
import imgBeggarArticle from "../images/begger_free_vizag_article.jpg";
import imgBeggar from "../images/begger_free_vizag.jpg";
import imgDeal from "../images/business_deal_100000.jpg";
import imgGdgFest from "../images/gdg_dev_fest_2024.jpg";
import imgGdgSelfie from "../images/gdg_selfie.jpg";
import DistrictCert from "../images/district_level_certificate.jpg";
import imgGdgCert from "../images/gdg_volunteer_certificate.jpg";
import imgNewsArticle from "../images/NewsArticle_collegerank.jpg";
import imgNewsClip from "../images/NewsVideo_clip.jpg";
import imgPiston from "../images/PistonCup.png";
import imgPistonCert from "../images/PistonCup_certificate.jpg";
import imgSushacksWin from "../images/Sushacks_winner_15000.jpeg";
import imgSushacksCert from "../images/Sushacks_winner_certification.jpeg";
import imgYogLead from "../images/Yogandhra_team_lead.jpg";
import imgYogCert from "../images/Yogandhra_certificate.jpg";
// Import your profile image
import profileImage from "../images/profile.jpeg"; // Add your profile image to the images folder

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedText, setCopiedText] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const stats = [
    { value: "50K+", label: "Platform Users" },
    { value: "₹1L+", label: "Business Deal" },
    { value: "₹15K", label: "Prize Won" },
    { value: "2+", label: "News Features" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Highlighted Meetmux Banner */}
      {/* Highlighted Meetmux Banner - Improved Visibility */}
      <div className="relative z-20 bg-gradient-to-r from-purple-600/90 to-indigo-600/90  py-3 px-4 border-b border-white/30 shadow-xl">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white font-bold ">
            <span className="bg-white/30 rounded-full px-3 py-1 mr-2 ">
              Specially for Meetmux
            </span>
            I'm Yugandhar. I'm interested. I'm Excited as an Early member.
          </p>
        </div>
      </div>

      {/* Animated background elements */}

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            style={{
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${15 + i * 5}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Hero - Redesigned with futuristic elements */}
      <header className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - About with bullet points */}
            <div
              className={`order-2 md:order-1 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
                <span className="h-2 w-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                🌟 MY JOURNEY
              </p>
              <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 leading-tight">
                Innovating <span className="text-purple-400">Solutions</span>{" "}
                That Matter
              </h1>

              <div className="mt-8 space-y-4">
                <ul className="space-y-4">
                  {[
                    "Built platforms reaching 50,000+ verified users with zero marketing budget",
                    "Secured ₹1,00,000 business deals with educational institutions",
                    "Won ₹15,000 prize at Sushacks Hackathon 2024",
                    "Featured on 2 news channels for innovative work",
                    "Led Team in Yogandhra World Record events",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30 transition-all duration-300">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="ml-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item
                          .split(/(<strong>.*?<\/strong>)/g)
                          .map((part, i) => {
                            if (part.startsWith("<strong>")) {
                              return (
                                <strong key={i} className="text-cyan-200">
                                  {part.replace(/<strong>|<\/strong>/g, "")}
                                </strong>
                              );
                            }
                            return part;
                          })}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Stats
                    items={[
                      {
                        value: "50K+",
                        label: "Platform Users",
                        valueClassName: "text-cyan-300 text-2xl font-bold",
                      },
                      {
                        value: "₹1L+",
                        label: "Business Deal",
                        valueClassName: "text-cyan-300 text-2xl font-bold",
                      },
                      {
                        value: "₹15K",
                        label: "Prize Won",
                        valueClassName: "text-cyan-300 text-2xl font-bold",
                      },
                      {
                        value: "2+",
                        label: "News Features",
                        valueClassName: "text-cyan-300 text-2xl font-bold",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div
              className={`order-1 md:order-2 flex justify-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-75 blur-xl animate-pulse"></div>
                <div className="relative rounded-full p-1 bg-gradient-to-r from-cyan-500 to-purple-500">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="rounded-full w-72 h-72 object-cover border-4 border-gray-900 shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs px-4 py-2 rounded-full shadow-lg font-medium">
                  Innovator & Developer
                </div>
                <div className="absolute -top-4 -left-4 w-6 h-6 border-2 border-cyan-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Key Highlights - Enhanced styling */}
      <Section
        id="highlights"
        title="🚀 Key Highlights"
        subtitle="Breakthrough achievements in product development, business growth, and market impact"
        className="relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            variant="highlight"
            icon="🚀"
            title="College Rank Platform Success"
            imageData={[
              {
                src: imgNewsClip,
                ratio: "16:9",
                alt: "News Clip feature",
              },
            ]}
            futuristic={true}
          >
            Built College Rank – A student-focused platform that attracted{" "}
            <strong>50,000+ verified students</strong> in just 2 months with
            zero-cost marketing driven purely by{" "}
            <strong>word-of-mouth marketing</strong> & collaborations with
            educational content creators.
          </FeatureCard>

          <FeatureCard
            variant="success"
            icon="💼"
            title="Major Business Achievement"
            imageData={[
              { src: imgDeal, ratio: "16:9", alt: "₹1,00,000 business deal" },
            ]}
            futuristic={true}
          >
            Secured a<strong> ₹1,00,000 business deal </strong>with colleges for
            promotions, demonstrating strong business acumen and negotiation
            skills in the education sector.
          </FeatureCard>

          <FeatureCard
            variant="default"
            icon="📰"
            title="Media Recognition"
            imageData={[
              { src: imgNewsArticle, ratio: "9:16", alt: "Media coverage" },
            ]}
            futuristic={true}
          >
            <strong>Recognized by 2 news channels</strong> with both articles
            and video coverage, showcasing the impact and newsworthiness of my
            work in the education technology space.
          </FeatureCard>

          <FeatureCard
            variant="default"
            icon="📈"
            title="Analytics & Growth Metrics"
            imageData={[
              { src: imgClicks70, ratio: "9:16", alt: "70+ organic clicks" },
            ]}
            futuristic={true}
          >
            Integrated Google Analytics, recording
            <strong> 70+ organic clicks in the past 28 days </strong>,
            demonstrating sustained user engagement and organic growth patterns.
          </FeatureCard>

          <FeatureCard
            variant="success"
            icon="🎪"
            title="Event Management Success"
            futuristic={true}
          >
            Managed a successful stall at Yuvatharang Youth Fest, generating{" "}
            <strong>₹2,40,000 in 2 days</strong> through strategic planning and
            effective execution.
          </FeatureCard>

          <FeatureCard
            variant="default"
            icon="🤝"
            title="Zero-Cost Marketing Strategy"
            futuristic={true}
          >
            Achieved remarkable growth through innovative marketing approaches,
            building strong partnerships with educational content creators and
            leveraging <strong>word-of-mouth marketing.</strong>
          </FeatureCard>
        </div>
      </Section>

      {/* Achievements & Recognition - Enhanced styling */}
      <Section
        id="awards"
        title="🏆 Achievements & Recognition"
        subtitle="Awards, competitions, and recognitions that mark significant milestones in my journey"
        className="relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            variant="success"
            icon="🏆"
            title="Sushacks Hackathon 2024 Winner"
            imageData={[
              { src: imgSushacksWin, ratio: "16:9", alt: "Sushacks winner" },
              {
                src: imgSushacksCert,
                ratio: "16:9",
                alt: "Winner certificate",
              },
            ]}
            futuristic={true}
          >
            Winner – Sushacks Hackathon 2024 with{" "}
            <strong>₹15,000 cash prize.</strong> Demonstrated exceptional coding
            skills, innovation, and problem-solving abilities in a competitive
            environment.
          </FeatureCard>

          <FeatureCard
            variant="default"
            icon="🏎️"
            title="Piston Cup 24-hour Hackathon"
            imageData={[
              { src: imgPiston, ratio: "16:9", alt: "Piston Cup hackathon" },
              {
                src: imgPistonCert,
                ratio: "16:9",
                alt: "Piston Cup hackathon",
              },
            ]}
            futuristic={true}
          >
            Competed among <strong>80+ teams</strong> in the prestigious{" "}
            <strong>24-hour Hackathon with a ₹30,000 prize pool,</strong>{" "}
            showcasing endurance, creativity, and technical expertise.
          </FeatureCard>

          <FeatureCard
            variant="default"
            icon="👨‍💻"
            title="GDG 2024 Volunteer Recognition"
            imageData={[
              {
                src: imgGdgCert,
                ratio: "1:1",
                alt: "GDG volunteer certificate",
              },
              { src: imgGdgSelfie, ratio: "16:9", alt: "Community selfie" },
            ]}
            futuristic={true}
          >
            <strong>Recognized as a key role member</strong> for contributing to
            GDG 2024, demonstrating leadership in the developer community and
            commitment to knowledge sharing.
          </FeatureCard>

          <FeatureCard
            variant="default"
            icon="🏛️"
            title="Government Recognition & Funding"
            imageData={[
              {
                src: DistrictCert,
                ratio: "16:9",
                alt: "Government Recognition & Funding",
              },
            ]}
            futuristic={true}
          >
            School-level Recognition –
            <strong>Received ₹10,000 government funding</strong> to build a
            prototype of my innovative idea, validating the potential and social
            impact of the concept.
          </FeatureCard>
        </div>
      </Section>

      {/* Volunteering & Social Impact - Enhanced styling */}
      <Section
        id="impact"
        title="🌱 Volunteering & Social Impact"
        subtitle="Contributing to society through environmental conservation, community service, and social initiatives"
        className="relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            variant="highlight"
            icon="🧘"
            title="Yogandhra World Record Initiative"
            imageData={[
              { src: imgYogLead, ratio: "16:9", alt: "Yogandhra team lead" },
              { src: imgYogCert, ratio: "16:9", alt: "Yogandhra team lead" },
            ]}
            futuristic={true}
          >
            <strong>Team Lead for Yogandhra World Record</strong> initiative,
            coordinating large-scale yoga events and promoting wellness
            practices across communities.
          </FeatureCard>

          <FeatureCard
            variant="default"
            icon="🤝"
            title="Beggar Free Vizag Campaign"
            imageData={[
              { src: imgBeggar, ratio: "16:9", alt: "On-ground campaign" },
              { src: imgBeggarArticle, ratio: "16:9", alt: "Article coverage" },
            ]}
            futuristic={true}
          >
            <strong>
              Active participant in the Beggar Free Vizag campaign,
            </strong>{" "}
            working towards social rehabilitation and creating awareness about
            effective ways to help those in need.
          </FeatureCard>

          <FeatureCard
            variant="default"
            icon="🌿"
            title="Environmental Conservation"
            futuristic={true}
          >
            <strong>
              Actively participate on beach cleanups and environmental awareness
              campaigns
            </strong>
            , contributing to cleaner beaches and raising awareness about
            environmental conservation.
          </FeatureCard>
        </div>
      </Section>

      {/* Thank You - Enhanced styling */}
      <Section id="thanks" className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block p-1 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 mb-6">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Thank You for Exploring My Journey
              </h3>
              <p className="text-gray-300 mt-4 text-lg">
                Each achievement represents hours of dedication, learning, and
                growth. I'm excited to continue building, innovating, and
                creating positive impact.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* NEW SECTION: Footer with Contact Information */}
      <footer className="relative z-10 bg-gray-900/70 backdrop-blur-md border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 max-w-md">
                I'm always open to discussing new projects, opportunities, or
                ways to collaborate on innovative ideas. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:yogiyugandhar7@gmail.com"
                  className="flex items-center group p-3 rounded-lg hover:bg-white/10 transition-all duration-300 relative"
                  onClick={(e) => {
                    e.preventDefault();
                    copyToClipboard("yogiyugandhar7@gmail.com");
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center mr-3 transition group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-medium group-hover:text-white transition">
                    yogiyugandhar7@gmail.com
                  </span>
                  {copiedText === "yogiyugandhar7@gmail.com" && (
                    <span className="absolute right-2 text-xs text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded">
                      Copied ✓
                    </span>
                  )}
                </a>

                <a
                  href="https://github.com/Yogi-00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group p-3 rounded-lg hover:bg-white/10 transition-all duration-300 relative"
                  onClick={(e) => {
                    e.preventDefault();
                    copyToClipboard("https://github.com/Yogi-00");
                    window.open("https://github.com/Yogi-00", "_blank");
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-3 transition group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-medium group-hover:text-white transition">
                    github.com/Yogi-00
                  </span>
                  {copiedText === "https://github.com/Yogi-00" && (
                    <span className="absolute right-2 text-xs text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded">
                      Copied ✓
                    </span>
                  )}
                </a>

                <a
                  href="https://www.linkedin.com/in/yugandhar-chinipilli-601858270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group p-3 rounded-lg hover:bg-white/10 transition-all duration-300 relative"
                  onClick={(e) => {
                    e.preventDefault();
                    copyToClipboard(
                      "https://www.linkedin.com/in/yugandhar-chinipilli-601858270/"
                    );
                    window.open(
                      "https://www.linkedin.com/in/yugandhar-chinipilli-601858270/",
                      "_blank"
                    );
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mr-3 transition group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-medium group-hover:text-white transition">
                    linkedin.com/in/yugandhar
                  </span>
                  {copiedText ===
                    "https://www.linkedin.com/in/yugandhar-chinipilli-601858270/" && (
                    <span className="absolute right-2 text-xs text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded">
                      Copied ✓
                    </span>
                  )}
                </a>
              </div>
            </div>

            {/* <div>
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Get in Touch
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition px-6 py-3 rounded-md text-white font-medium shadow-lg hover:shadow-cyan-500/20"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>
              Built with ❤️ and passion for innovation | ©{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.2;
            transform: scale(1);
          }
          100% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
