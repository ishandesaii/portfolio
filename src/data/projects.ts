import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Chatbot Enhanced House Price Prediction",
    description:
      "Developed a predictive model using ensemble ML algorithms powered by ChatMe AI.",
    image: "House Price.png",
    tech: ["SVM", "Randon Forest", "AdaBoost", "XGBoost"],
    github: "https://github.com/ishandesaii/Real-Estate-Price-Prediction",
    live: "",
    details: {
      problem:
        "Property buyers and investors struggle with inaccurate and non-personalized price estimations in a volatile real estate market.",
      solution:
        "Designed a smart chatbot integrated with a stacked regression model that predicts property prices based on 17+ key features.",
      features: [
        "Voice-based input",
        "Text-to-speech interactio",
        "Real-time price estimatio",
        "97.5% prediction accuracy",
      ],
      impact: "Enabled transparent, data-driven decision-making for buyers and investors, improving prediction reliability while simplifying user experience.",
    },
  },
  {
    title: "Modernizing and Validating Safety Products",
    description: "Engineered a safety monitoring system using YOLOv8, face recognition, and CV to automate detection.",
    image: "TASL.png",
    tech: ["Python", "Computer Vision", "Yolov8", "RNN", "SciPy", "TensorFlow", "Scikit-learn"],
    github: "https://github.com/ishandesaii/Modernizing-and-Validating-Safety-Products",
    live: "",
    details: {
      problem: "Manual safety checks were slow, error-prone, and lacked real-time alerts.",
      solution:
        "Automated detection of PPE violations, fire, smoke, and trespassing via CCTV feeds.",
      features: [
        "Live alerts",
        "Zone-based camera configuration",
        "Role-based dashboards",
        "Multi-class detection",
      ],
      impact: "Boosted detection accuracy to 97%, cut violations by 50%, and improved response by 35%.",
    },
  },
  {
    title: "College Placement Portal",
    description: "Built a full-stack portal using React and Firebase to digitize and manage the campus placement lifecycle.",
    image: "Placement Portal.png",
    tech: ["React", "JavaScript", "Firebase"],
    github: "https://github.com/ishandesaii/college-placement-portal",
    live: "",
    details: {
      problem: "Manual placement processes were inefficient, error-prone, and lacked centralized data handling.",
      solution:
        "Developed a 3-phase system (Pre-, On-, and Post-Placement) to streamline student registration, notifications, and analysis.",
      features: [
        "Admin dashboards",
        "Excel Report",
        "Student-company matching",
        "Chart-based analytics",
      ],
      impact: "Automated 80% of manual tasks, improved student engagement, and enabled data-driven placement insights.",
    },
  },
  {
    title: "Dashboard Analysis of COVID-19 in India",
    description: "Developed an interactive dashboard to analyze COVID-19 trends across Indian states using demographics, vaccination data, and testing insights.",
    image: "COVID.png",
    tech: ["Tableau", "ETL", "Microsoft Excel", "Pandas"],
    label: "Dashboard",
    github: "https://public.tableau.com/app/profile/ishan.desai5679/viz/COVID-19CasesInIndia/Dashboard1",
    live: "",
    details: {
      problem: "Public access to granular COVID-19 data in India was fragmented and difficult to interpret, particularly at the state level.",
      solution:
        "Built a visual dashboard that aggregates key pandemic metrics such as deaths, vaccinations, age group analysis, gender split, and testing details across states for clear and actionable insights.",
      features: [
        "Statewise COVID-19 case and death tracking",
        "Time-series analysis by state",
        "Vaccine administration and testing breakdowns",
        "Demographic breakdowns by age and gender"
      ],
      impact: "Provided policymakers, analysts, and the public with a consolidated and accessible view of India's COVID-19 status, aiding in more informed decision-making.",
    },
  },

];
