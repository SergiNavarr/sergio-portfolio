"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { useForm, ValidationError } from '@formspree/react';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: "(+54) 9 3794003967"
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: "nachonavarro197@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: "Corrientes, Argentina"
  },
]

function ContactForm() { 
  const searchParams = useSearchParams();
  const serviceDefault = searchParams.get("service");

  const [service, setService] = useState(serviceDefault || ""); 
  
  const [state, handleSubmit] = useForm("mojnwvjq");

  if (state.succeeded) {
    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-center">
                <FaCheckCircle className="text-accent text-6xl" />
                <h3 className="text-4xl text-white">Message Sent!</h3>
                <p className="text-white/60">Thanks for reaching out. I'll get back to you soon.</p>
                <Button onClick={() => window.location.reload()} variant="outline">Send another</Button>
            </div>
        </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] w-full">
          {/* form */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let´s work together</h3>
              <p className="text-white/60">I'm currently available for freelance work or full-time positions.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" required />
                <Input type="text" name="lastname" placeholder="Lastname" required />
                <Input type="email" name="email" placeholder="Email address" required />
                <Input type="tel" name="phone" placeholder="Phone Number" />
                
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
              </div>
              
              <Select onValueChange={setService} name="service" value={service}> 
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="ux-ui">UI/UX Design</SelectItem>
                    <SelectItem value="logo-design">Logo Design</SelectItem>
                    <SelectItem value="SEO">SEO Optimization</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <input type="hidden" name="service" value={service} />

              <Textarea 
                className="h-[200px]" 
                name="message" 
                placeholder="Type your message here." 
                required 
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm" />
              
              <Button size="md" className="max-w-40" type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>   
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-[80vh] text-accent">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}