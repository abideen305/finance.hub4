import React, { useState } from 'react';
import { 
  Wallet, 
  GraduationCap, 
  Users, 
  Building2, 
  Star,
  Mail,
  Phone,
  Instagram,
  Twitter,
  ChevronDown,
  CheckCircle2,
  Award,
  BookOpen,
  Building,
  Gamepad2
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '8',
    email: '',
    phone: '',
    session: 'morning'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mkgjzkoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Thank you for joining the waitlist! We will contact you soon.');
        setFormData({
          parentName: '',
          childName: '',
          childAge: '8',
          email: '',
          phone: '',
          session: 'morning'
        });
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f9ff] to-white font-secondary">
      {/* Hero Section */}
      <header className="bg-secondary text-white relative">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center z-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}></div>
        <div className="relative z-10">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="https://i.ibb.co/fcfw3JT/hub4-logo-new.png" 
                alt="HUB 4 Logo" 
                className="h-12"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-primary transition">About</a>
              <a href="#features" className="hover:text-primary transition">Features</a>
              <a href="#waitlist" className="hover:text-primary transition">Join Waitlist</a>
              <a href="#contact" className="hover:text-primary transition">Contact</a>
            </div>
          </nav>

          <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-primary">
                Empower Your Kids with Financial Literacy!
              </h1>
              <p className="text-lg mb-8">
                Join our upcoming bootcamp designed for kids aged 8-14 to learn real-world money management in a fun and engaging way. This 5-day bootcamp will equip your children with essential skills for a financially responsible future.
              </p>
              <a 
                href="#waitlist"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
              >
                Join the Waitlist
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Kids learning about finance"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-secondary font-primary">
            Why Financial Literacy is Important for Kids
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Wallet className="text-primary" size={32} />,
                title: "Money Management",
                description: "Practical skills in saving, budgeting, and understanding value"
              },
              {
                icon: <Building2 className="text-primary" size={32} />,
                title: "Bank Excursions",
                description: "Real-world exposure to banking and financial institutions"
              },
              {
                icon: <Users className="text-primary" size={32} />,
                title: "Interactive Learning",
                description: "Engaging games and activities for better understanding"
              },
              {
                icon: <Star className="text-primary" size={32} />,
                title: "Rewards",
                description: "Certificates and exciting giveaways for participants"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg shadow-lg bg-white hover:transform hover:-translate-y-1 transition duration-300">
                <div className="inline-block p-3 rounded-full bg-blue-50 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 font-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bootcamp Overview Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-secondary font-primary">
            What to Expect from the Bootcamp
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-12 text-center">
              At HUB 4's Financial Literacy Bootcamp, your child will learn the practical skills necessary for understanding and managing money in today's world. Our 5-day program is packed with interactive games, hands-on activities, and even an exciting excursion to a local bank to see financial concepts in action! Every child will walk away with newfound knowledge, a certificate of completion, and fun giveaways.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Award className="text-primary" size={32} />,
                  title: "Expert Leadership",
                  description: "Led by experts in finance and education"
                },
                {
                  icon: <BookOpen className="text-primary" size={32} />,
                  title: "Practical Skills",
                  description: "Real-life money management training"
                },
                {
                  icon: <Building className="text-primary" size={32} />,
                  title: "Bank Excursion",
                  description: "Exciting visit to a local bank"
                },
                {
                  icon: <Gamepad2 className="text-primary" size={32} />,
                  title: "Interactive Learning",
                  description: "Fun games and engaging activities"
                }
              ].map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
                  <div className="flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-primary">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-secondary font-primary">
                  About HUB 4
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  HUB 4 is a comprehensive educational training center based in Ikeja, Lagos. We offer a wide range of programs tailored to provide young minds with the skills they need to thrive in today's fast-paced world.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Expert instructors with years of experience",
                    "Interactive, hands-on learning experiences",
                    "Proven track record of success",
                    "Comprehensive educational approach"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Kids learning together"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary rounded-lg p-4 text-white">
                  <p className="text-2xl font-bold">5+ Years</p>
                  <p className="text-sm">of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="py-20 bg-white relative">
        <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-secondary font-primary">
              Join the Financial Literacy Bootcamp Waitlist
            </h2>
            <p className="text-center mb-8 text-gray-600">
              Fill out the form below to secure your spot for your child in our upcoming bootcamp. Spaces are limited!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent/Guardian Name
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Child's Name
                </label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Child's Age
                  </label>
                  <select
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {Array.from({ length: 7 }, (_, i) => i + 8).map(age => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Session
                  </label>
                  <select
                    name="session"
                    value={formData.session}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-secondary font-primary">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What is the age group for the bootcamp?",
                a: "The bootcamp is designed for children aged 8 to 14 years old."
              },
              {
                q: "How long is the bootcamp?",
                a: "The bootcamp runs for 5 days, with both morning and afternoon sessions available."
              },
              {
                q: "What are the benefits of financial literacy for kids?",
                a: "Financial literacy helps children understand how to manage money responsibly, including saving, budgeting, and making smart financial decisions. These skills are crucial for their future success."
              },
              {
                q: "How do I know if my child is registered?",
                a: "After you submit the waitlist form, you will receive a confirmation email with further details about the bootcamp. Our team will also reach out to confirm your child's registration and session time."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-md p-6">
                <summary className="text-lg font-semibold cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <ChevronDown className="flex-shrink-0 ml-2" />
                </summary>
                <p className="mt-4 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 font-primary">
            Get in Touch
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Mail size={32} className="mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 font-primary">Email</h3>
              <a href="mailto:info@hub4.org" className="hover:text-primary transition">
                info@hub4.org
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Phone size={32} className="mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 font-primary">Phone</h3>
              <a href="tel:+2348030805821" className="hover:text-primary transition">
                +234 803 080 5821
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex space-x-4 mb-4">
                <Instagram size={32} className="text-primary" />
                <Twitter size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-primary">Social Media</h3>
              <p>@hub4official</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0530] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="https://i.ibb.co/fcfw3JT/hub4-logo-new.png" 
              alt="HUB 4 Logo" 
              className="h-8"
            />
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} HUB 4. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;