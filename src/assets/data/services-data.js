import serviceImage from "@/assets/images/organizational-dev.jpg";
import pmImage from "@/assets/images/service_management.jpg";
import hrImage from "@/assets/images/service_hr.jpg";
import tniImage from "@/assets/images/service_4.jpeg";
import trainingImage from "@/assets/images/service_training.jpg";
import researchImage from "@/assets/images/service_research.jpg";

import { SlOrganization } from "react-icons/sl";
import { MdMonitorHeart } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineBuildCircle } from "react-icons/md";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

import { LuChartBar } from "react-icons/lu";
import { RiContractFill } from "react-icons/ri";
import { MdOutlineChecklist } from "react-icons/md";
import { LuChartGantt } from "react-icons/lu";
import { LuMonitorCheck } from "react-icons/lu";

import { FaUserGear } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { CgPerformance } from "react-icons/cg";

import { PiNetwork } from "react-icons/pi";
import { LuDatabaseZap } from "react-icons/lu";
import { TbAutomation } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { TbBrandMetabrainz } from "react-icons/tb";
import { SiChatbot } from "react-icons/si";
import { FaVrCardboard } from "react-icons/fa";

import { MdViewModule } from "react-icons/md";
import { MdOutlineFactory } from "react-icons/md";

import { RiSurveyLine } from "react-icons/ri";
import { GrValidate } from "react-icons/gr";
import { FaCheckSquare } from "react-icons/fa";
import { HiChartPie } from "react-icons/hi";

export const servicesData = {
  "organizational-development": {
    image: serviceImage,
    heading: "Organizational Development",
    details: [
      `We employ a systematic and planned approach to enhance an organization's effectiveness, performance, and overall health by implementing a series of structured interventions and change strategies. Our methodology is rooted in the principles of strategic management and organizational development, aimed at driving positive transformation and sustainable growth.`,
      `Our process begins with a thorough assessment of the organization's current state, which includes evaluating its strengths, weaknesses, opportunities, and threats, as well as conducting in-depth diagnostics to pinpoint specific areas that require improvement. This diagnostic phase allows us to identify KPIs and establish clear benchmarks for success.`,
    ],
    subServices: [
      {
        iconComponent: SlOrganization,
        title: "Organizational Strategy",
        subtitle:
          "We design a comprehensive plan that guides an entity's actions and decisions to achieve its long-term goals and objectives.",
      },
      {
        iconComponent: MdMonitorHeart,
        title: "Diagnostic and Appraisal",
        subtitle:
          "At Hexabax we assess and evaluate an organization's current state and uncovering areas for improvement.",
      },
      {
        iconComponent: MdOutlineEditNote,
        title: "Policy Advisory",
        subtitle:
          "Hexabax provides guidance to public and private institutions for decision-making and shape effective policies.",
      },
      {
        iconComponent: BsFillPeopleFill,
        title: "Leadership and Management",
        subtitle:
          "At Hexabax we enhance an organization's or individual's abilities, knowledge, and resources to better meet its goals.",
      },
      {
        iconComponent: MdOutlineBuildCircle,
        title: "Operational Design and Business Model",
        subtitle:
          "We focus on planning and optimizing an organization's processes and systems to achieve its objective.",
      },
      {
        iconComponent: PiSuitcaseSimpleLight,
        title: "Capacity Building",
        subtitle:
          "At Hexabax we enhance an organization's or individual's abilities, knowledge, and resources to better meet its goals.",
      },
    ],
  },
  "project-management": {
    image: pmImage,
    heading: "Project Mangement",
    details: [
      `We employ a disciplined practice of planning, executing, and controlling resources, tasks, and schedules with the primary objective of achieving specific project goals. This approach to project management is rooted in precision and diligence, ensuring that every aspect of the project aligns with the established objectives. Our process begins with comprehensive project planning, where we define project goals and constraints. This phase involves detailed task breakdowns, resource allocation, and schedule development. We consider factors that might impact the project's success and devise strategies to mitigate potential risks.`,
    ],
    subServices: [
      {
        iconComponent : LuChartBar,
        title: "Scoping & Business Intelligence",
        subtitle:
          "We define the essential parameters and systematically gather critical data, ensuring that our strategic decision-making process is informed and robust.",
      },
      {
        iconComponent : RiContractFill,
        title: "Contract Management",
        subtitle:
          "We optimize the entire contract lifecycle, from creation to execution and compliance, to ensure agreements are effectively managed and delivered.",
      },
      {
        iconComponent : MdOutlineChecklist,
        title: "Planning & Initiation",
        subtitle:
          "At Hexabax we define strategies that are developed, and resources are allocated to ensure a successful start for every business.",
      },
      {
        iconComponent : LuChartGantt,
        title: "Project Execution",
        subtitle:
          "At Hexabax, project plan is put into action, tasks are performed, and project objectives are achieved.",
      },
      {
        iconComponent : LuMonitorCheck,
        title: "Monitoring & Evaluation",
        subtitle:
          "We use a systematic process of tracking and assessing project activities to ensure they align with objectives and lead to informed decision-making and improvement.",
      },
    ],
  },
  "hr-management": {
    image: hrImage,
    heading: "Human Resource Management (HRM)",
    details: [
      `We specialize in the development and implementation of strategic and operational functions within organizations that are dedicated to the crucial tasks of recruiting, nurturing, developing, and proficiently managing employees. Our mission is to enable organizations to harness their human capital as a strategic asset, aligning it with the overarching goals and objectives to drive sustained success and growth.`,
    ],
    subServices: [
      {
        iconComponent : BsFillPeopleFill,
        title: "HR Planning",
        subtitle:
          "We use a strategic process of aligning an organization's human resources with its objectives by forecasting workforce needs,  and developing strategies for recruitment, retention, and development.",
      },
      {
        iconComponent : RiContractFill,
        title: "Recruitment and Selection",
        subtitle:
          "We identify potential talent in the industry, thoroughly evaluate each applicant's qualifications and hire the most suitable candidates to fill job vacancies within our esteemed organization.",
      },
      {
        iconComponent : FaUserGear,
        title: "Training and Development",
        subtitle:
          "We use a systematic process of enhancing employees' knowledge, skills, and abilities to improve their performance and contribute to organizational growth.",
      },
      {
        iconComponent : FaAward,
        title: "Reward Management",
        subtitle:
          "We use a strategic process of designing and administering compensation, benefits, and recognition programs to attract, retain, and motivate employees effectively.",
      },
      {
        iconComponent : CgPerformance,
        title: "Performance Management",
        subtitle:
          "We use a systematic process of setting expectations, assessing, and continuously improving employee performance to achieve organizational goals.",
      },
    ],
  },
  "technology-and-innovation": {
    image: tniImage,
    heading: "Technology and Innovation",
    details: [
      `We specialize in the development of strategic applications that leverage advanced tools and innovative solutions to optimize critical business processes, elevate competitiveness, and catalyze organizational growth. Our approach is centered on harnessing cutting-edge technology and creative thinking to drive impactful transformations within your organization. Our commitment to innovation and efficiency ensures that your business processes are optimized, your competitiveness is enhanced, and your overall growth trajectory is accelerated.`,
    ],
    subServices: [
      {
        iconComponent : PiNetwork,
        title: "ERP Development",
        subtitle:
          "We have ERP development experts who help organizations to automate and manage core business processes for optimal performance. We believe in delivering high-quality products within the given time span.",
      },
      {
        iconComponent : LuDatabaseZap,
        title: "Management Information System",
        subtitle:
          "We have MIS experts who effectively work by collecting, processing and storing information within an organization to support effective decision-making.",
      },
      {
        iconComponent : TbAutomation,
        title: "Business Process Automation",
        subtitle:
          "We use the latest technology to  automate routine business tasks and workflows, reducing manual effort and increasing operational efficiency.",
      },
      {
        iconComponent : FaCode,
        title: "Technology Transformation",
        subtitle:
          "We use strategic integration of innovative technologies to drive digitalization and to stay competitive in the modern business landscape.",
      },
      {
        iconComponent : TbBrandMetabrainz,
        title: "Intelligent Operating Model and Innovation",
        subtitle:
          "We enhance decision-making and drive continuous innovation within our clients' organization.",
      },
      {
        iconComponent : SiChatbot,
        title: "Artificial Intelligence",
        subtitle:
          "We simulate human intelligence in machines, enabling them to perform tasks like learning, problem-solving, and decision-making autonomously.",
      },
      {
        iconComponent : FaVrCardboard, 
        title: "Metaverse",
        subtitle:
          "We have expertise in developing virtual universes where people can interact, socialize, work, and play in digital environments using avatars and augmented reality technologies.",
      },
    ],
  },
  trainings: {
    image: trainingImage,
    heading: "Trainings and Skill Development",
    details: [
      `We employ a systematic and structured process to enhance the knowledge, competencies, and capabilities of employees with the overarching goal of improving their performance and fostering their contributions to organizational success. This process is a critical component of our strategy for building a skilled, motivated, and high-performing workforce. By systematically investing in Employee Development, we empower individuals to reach their full potential, enhancing their performance and, in turn, contributing significantly to the overall success.`,
    ],
    subServices: [
      {
        iconComponent : MdOutlineChecklist,
        title: "Training Policy Framework",
        subtitle:
          "We develop a structured document outlining an organization's guidelines and strategies for planning, delivering and evaluating training initiatives to align with its overall goals and objectives.",
      },
      {
        iconComponent : RiContractFill,
        title: "Curriculum Design",
        subtitle:
          "We use a system process of planning and structuring educational content, objectives, and activities to guide effective teaching and learning in a systematic manner.",
      },
      {
        iconComponent : MdViewModule,
        title: "Module Development",
        subtitle:
          "We use a process of creating self-contained, focused units of study and training content, designed to achieve specific learning objectives within a broader curriculum.",
      },
      {
        iconComponent : FaUserGear,
        title: "Training Delivery",
        subtitle:
          "We use supportive relationships in which an experienced mentor guides and facilitates the development and growth of a mentee in their personal or professional journey.",
      },
      {
        iconComponent : MdOutlineFactory,
        title: "Experiential Learning",
        subtitle:
          "Hexabax uses a systematic approach that emphasizes hands-on, real-world experiences as a primary method for acquiring knowledge and skills.",
      },
      {
        iconComponent : FaAward, 
        title: "Career Planning",
        subtitle:
          "We use an intentional process of setting and managing individual career goals, aspirations, and development to achieve a fulfilling and successful professional journey.",
      },
    ],
  },
  "research-and-data-analytics": {
    image: researchImage,
    heading: "Research and Data Analytics",
    details: [
      `We specialize in the systematic collection, analysis, and interpretation of data, leveraging state-of-the-art tools and methodologies to extract valuable insights for our client organizations. Our data-driven approach involves gathering of relevant data from various sources, followed by analysis to uncover patterns, trends, and correlations. Through in-depth interpretation, we transform raw data into actionable insights that empower our clients to make informed decisions and strategic choices.`,
    ],
    subServices: [
      {
        iconComponent : RiSurveyLine,
        title: "Survey & Data Collection",
        subtitle:
          "Survey and data collection involve systematically gathering information through questionnaires, interviews, or observations to obtain insights, opinions, or facts for analysis and decision-making.",
      },
      {
        iconComponent : GrValidate,
        title: "Third Party Validation",
        subtitle:
          "Hexabax uses an effective process of obtaining independent verification or confirmation of a product, service, or claim from an impartial entity, enhancing credibility and trustworthiness.",
      },
      {
        iconComponent : FaCheckSquare,
        title: "Impact Evaluation",
        subtitle:
          "We use a systematic approach to assess the long-term effects and outcomes of an intervention, program, or policy, aiming to determine its effectiveness and influence on desired goals.",
      },
      {
        iconComponent : HiChartPie,
        title: "Research & Feasibility Studies",
        subtitle:
          "We conduct comprehensive research and feasibility assessments to evaluate the practicality, relevance, and sustainability of proposed projects or interventions, identifying potential risks, opportunities, and resource requirements to ensure evidence-based planning and effective implementation.",
      },
    ],
  },
};
