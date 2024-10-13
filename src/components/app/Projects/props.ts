import { Github, ExternalLink  } from "lucide-react";

export type Project = {
	type: string;
	title: string;
	tags: string[];
  screenshot: any;
	description: string;
	links: {
		icon: any;
		url: string;
	}[];
}

export function getProjects(): Project[] {
  return [
    {
      type: "featured project",
      title: "codeHub technological institute (CTI)",
      screenshot: require("./screenshots/codehubcti.vercel.app_.png"),
      description: "Designed and developed a static website for a tech training startup which aim at teaching tech technologies to the Nigerian populace in order to close-up the digital-divide gap",
      tags: [
        "next JS", "react JS", "bootstrap CSS"
      ],
      links: [
        {
          url: "https://github.com/TASLIM-ENIOLLA/cti",
          icon: Github
        },
        {
          url: "https://codehubcti.vercel.app/",
          icon: ExternalLink
        }
      ]
    },
    {
      type: "featured project",
      title: "covid-19 diagnostics app",
      screenshot: require("./screenshots/covid-19-diagnostics.vercel.app_.png"),
      description: "A hotel listing and leasing web app where students can reat hostel and property owners can also list hostels. The app also features a payment portal where payments can be made.",
      tags: [
        "Next Js", "React Js", "PHP", "MySQL", "Bootstrap CSS"
      ],
      links: [
        {
          url: "https://github.com/TASLIM-ENIOLLA/sally-hostel-v2",
          icon: Github
        },
        {
          url: "https://sallyhostels.vercel.app/",
          icon: ExternalLink
        }
      ]
    },
    {
      type: "featured project",
      title: "Hotel Telly",
      screenshot: require("./screenshots/hotel-telly.vercel.app_.png"),
      description: "Developed a user-friendly hotel booking platform featuring real-time hotel rates and seamless reservation capabilities.",
      tags: [
        "Next Js", "React Js", "NodeMailer", "Tailwind CSS"
      ],
      links: [
        {
          url: "https://github.com/TASLIM-ENIOLLA/hotel-telly",
          icon: Github
        },
        {
          url: "https://hotel-telly.vercel.app/",
          icon: ExternalLink
        }
      ]
    },
    {
      type: "featured project",
      title: "Passion for Peace",
      screenshot: require("./screenshots/passion-for-peace.vercel.app_.png"),
      description: "Developed a comprehensive website for an NGO, enabling youths to easily register and submit proposals, streamlining the process for grant application and fostering opportunities for young innovators.",
      tags: [
        "Next Js", "React Js", "Bootstrap CSS"
      ],
      links: [
        {
          url: "https://github.com/TASLIM-ENIOLLA/passion-for-peace",
          icon: Github
        },
        {
          url: "https://passion-for-peace.vercel.app/",
          icon: ExternalLink
        }
      ]
    },
    {
      type: "featured project",
      title: "Password Strength Indicator",
      screenshot: require("./screenshots/password-strength-indicator-eight.vercel.app_.png"),
      description: "Built a website that analyzes user-entered passwords for strength, vulnerability to brute-force attacks, and other security threats, enhancing password safety and awareness. It also suggests strong passwords.",
      tags: [
        "Next Js", "React Js", "Bootstrap CSS", "Zxcvbn"
      ],
      links: [
        {
          url: "https://github.com/TASLIM-ENIOLLA/password-strength-indicator",
          icon: Github
        },
        {
          url: "https://password-strength-indicator-eight.vercel.app/",
          icon: ExternalLink
        }
      ]
    },
    {
      type: "featured project",
      title: "Web 3 Konnect",
      screenshot: require("./screenshots/web3konnect.vercel.app_.png"),
      description: "Designed a Web 3 UI template showcasing advanced frontend development and engineering skills, demonstrating proficiency in modern web technologies.",
      tags: [
        "Next Js", "React Js", "Tailwind CSS"
      ],
      links: [
        {
          url: "https://github.com/TASLIM-ENIOLLA/connect-web3-wallet",
          icon: Github
        },
        {
          url: "https://web3konnect.vercel.app/",
          icon: ExternalLink
        }
      ]
    },
    {
      type: "featured project",
      title: "chatGPT clone",
      screenshot: require("./screenshots/chatgpt-pro.vercel.app_chat.png"),
      description: "Developed and deployed a fully functional ChatGPT clone hosted at ChatGPT Pro using technologies such as Next JS and React JS, featuring the dark-mode, user-friendly interface.",
      tags: [
        "next JS", "react JS", "tailwind CSS"
      ],
      links: [
        {
          url: "https://github.com/TASLIM-ENIOLLA/openai-project",
          icon: Github
        },
        {
          url: "https://chatgpt-pro.vercel.app/",
          icon: ExternalLink
        }
      ]
    },
  ]
}