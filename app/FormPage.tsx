"use client";
import { Mail, MessageSquare, User } from "lucide-react";
import { FormEvent, useState } from "react";
import Image from "next/image";
import CloudFrontForm from "@/app/assets/CloudFrontForm.svg";
import CloudBackForm from "@/app/assets/CloudBackForm.svg";
import Plane from "@/app/assets/Plane.svg";

const FormPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [animatePlane, setAnimatePlane] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (name && email && message) {
      try {
        const response = await fetch("/api/submit-notion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.toString(),
            email: email.toString(),
            message: message.toString(),
          }),
        });

        if (response.ok) {
          setMessage("Message envoyé avec succès !");
          setAnimatePlane(true);
          setTimeout(() => {
            form.reset();
          }, 3000);
        } else {
          setMessage("Erreur lors de l'envoi du message.");
          setAnimatePlane(true);
        }
      } catch (error) {
        setMessage(`Une erreur est survenue,${error}`);
        setAnimatePlane(true);
      }
    }

    setLoading(false);
  };

  if (scrollY >= 3899) {
    return;
  }

  return (
    <section className="absolute flex align-middle justify-center items-center top-0 left-0 w-screen h-full  z-0 bg-blue">
      <form
        onSubmit={submit}
        className="relative z-50 flex flex-col items-center justify-center h-[390px] w-[390px] rounded-full gap-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 139, 207, 0.25) 0%, rgba(220, 173, 228, 0.5) 40.4%, rgba(109, 208, 250, 0) 100%)",
        }}
      >
        <h2 className="text-cream">Send me a message</h2>
        <div className="relative w-4/5 px-5 py-2 bg-white text-black border-black border-2 rounded-lg shadow-lg shadow-black/50">
          <i className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <User />
          </i>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full px-5 bg-transparent border-none placeholder:text-black placeholder:text-sm focus:outline-none"
            required
          />
        </div>
        <div className="relative w-4/5 px-5 py-2 bg-white text-black border-black border-2 rounded-lg shadow-lg shadow-black/50">
          <i className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <Mail />
          </i>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-5 bg-transparent border-none placeholder:text-black placeholder:text-sm focus:outline-none"
            required
          />
        </div>
        <div className="relative w-4/5 px-5 py-2 bg-white text-black border-black border-2 rounded-lg shadow-lg shadow-black/50">
          <i className="absolute left-2">
            <MessageSquare />
          </i>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full h-24 px-5 bg-transparent border-none resize-none placeholder:text-black text-sm focus:outline-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="uppercase bg-cloudViolet w-4/5 border-black border-2 rounded-lg py-2"
        >
          {loading ? "Envoi en cours..." : "Submit"}
        </button>
      </form>
      <Image
        src={CloudFrontForm}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="absolute !top-10 h-full w-full object-cover overflow-visible z-40 "
      />
      <div className="absolute h-screen w-screen">
        <div className="relative z-30 w-full h-[30%] overflow-hidden">
          <div
            className={`absolute top-28 opacity-0 object-cover z-0 w-[30rem] transition-transform ${
              animatePlane ? "animate-flyAcross" : ""
            }`}
            onAnimationEnd={() => setAnimatePlane(false)}
          >
            <div className="relative w-full h-full">
              <p className="absolute top-1/4 left-3">{message}</p>
              <Image
                src={Plane}
                alt="Plane image"
                height={150}
                width={150}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={CloudBackForm}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="absolute !-top-12 h-full w-full object-cover overflow-visible z-20 "
      />
    </section>
  );
};

export default FormPage;
