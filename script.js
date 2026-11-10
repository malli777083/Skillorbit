const engineeringJobs = {
  "CSE / IT": {
    "Software Developer": ["Programming", "Data Structures", "Algorithms", "Git"],
    "Web Developer": ["HTML", "CSS", "JavaScript", "Git"],
    "Cybersecurity Analyst": ["Networking", "Linux", "Security", "Python"],
    "Cloud Engineer": ["Linux", "Networking", "AWS", "Python"],
    "QA Engineer": ["Testing", "Python", "SQL", "Automation"]
  },
  "Data Science": {
    "Data Analyst": ["Python", "SQL", "Statistics", "Excel", "Power BI"],
    "Data Scientist": ["Python", "SQL", "Statistics", "Machine Learning", "Pandas"],
    "AI/ML Engineer": ["Python", "Statistics", "Machine Learning", "Pandas", "SQL"],
    "Data Engineer": ["Python", "SQL", "ETL", "Cloud", "Data Warehousing"]
  },
  "ECE": {
    "Embedded Systems Engineer": ["C", "C++", "Microcontrollers", "Embedded C"],
    "VLSI Design Engineer": ["Digital Electronics", "Verilog", "VHDL", "ASIC"],
    "IoT Engineer": ["C", "Python", "Sensors", "Networking"],
    "Telecom Engineer": ["Communication Systems", "Networking", "5G"]
  },
  "EEE": {
    "Electrical Design Engineer": ["Electrical Circuits", "AutoCAD", "Power Systems"],
    "Power Systems Engineer": ["Power Systems", "Electrical Machines", "MATLAB"],
    "Control Systems Engineer": ["Control Systems", "MATLAB", "PLC"],
    "Renewable Energy Engineer": ["Solar Energy", "Power Electronics", "Electrical Design"]
  },
  "Mechanical": {
    "Mechanical Design Engineer": ["AutoCAD", "SolidWorks", "CAD", "Mechanics"],
    "Manufacturing Engineer": ["Manufacturing", "Quality Control", "CNC"],
    "Robotics Engineer": ["Robotics", "C++", "Sensors", "Control Systems"],
    "Automotive Engineer": ["Automotive Systems", "CAD", "Manufacturing"]
  },
  "Civil": {
    "Structural Engineer": ["Structural Analysis", "AutoCAD", "Revit", "Civil Design"],
    "Site Engineer": ["Construction", "Surveying", "Project Management"],
    "Transportation Engineer": ["Transportation Planning", "Road Design", "AutoCAD"],
    "Quantity Surveyor": ["Estimation", "BOQ", "Costing", "Excel"]
  }
};

const companyProfiles = {
  "TCS": {hq:"Mumbai, India", about:"IT services, consulting and business solutions", roles:["Data Analyst", "Data Scientist", "AI/ML Engineer", "Software Developer", "Cloud Engineer", "Cybersecurity Analyst"], focus:"Technology delivery, analytics, cloud and enterprise software", pros:"Many business sectors and project types; opportunities across technology and consulting.", checks:"Project, client, location, shift, training bond or service agreement (if any), and work arrangement can differ by offer.", skills:"For data roles: Python, SQL, statistics, Pandas, machine learning or Power BI; communication and problem solving.", steps:"Check current graduate and experienced openings; apply through the official portal; prepare aptitude, coding or role assessment, technical rounds and HR discussion as stated in the posting.", url:"https://www.tcs.com/careers"},
  "Infosys": {hq:"Bengaluru, India", about:"Digital services, consulting and technology", roles:["Data Analyst", "Data Scientist", "AI/ML Engineer", "Data Engineer", "Software Developer", "Cloud Engineer"], focus:"Digital transformation, data and AI, cloud and enterprise platforms", pros:"Training and projects can span several industries and technology areas.", checks:"Role, client assignment, location, shift and eligibility differ by job posting.", skills:"For data roles: Python, SQL, statistics, machine learning, data handling and clear communication.", steps:"Use the official careers portal to confirm open positions and eligibility; prepare for the assessment and interview stages listed for that role.", url:"https://career.infosys.com/"},
  "Wipro": {hq:"Bengaluru, India", about:"Technology services and consulting", roles:["Data Analyst", "Data Scientist", "AI/ML Engineer", "Data Engineer", "Software Developer", "Cloud Engineer"], focus:"Cloud, engineering, data, cybersecurity and business transformation", pros:"Work may cover different industries and technology specialities.", checks:"Confirm the exact project, work location, shift, required experience and employment terms in the offer.", skills:"For data roles: Python, SQL, statistics, data visualization and role-specific machine learning or cloud skills.", steps:"Apply only through official careers; check role-specific requirements and prepare for any assessment, technical interview and HR discussion.", url:"https://careers.wipro.com/"},
  "HCLTech": {hq:"Noida, India", about:"IT services, engineering and digital transformation", roles:["Data Analyst", "Data Scientist", "AI/ML Engineer", "Data Engineer", "Software Developer", "Cloud Engineer"], focus:"Engineering, cloud, AI, data and enterprise technology", pros:"Opportunities include both technology services and engineering work.", checks:"Responsibilities, client/project, location and shift can vary; verify the actual posting and offer terms.", skills:"For data roles: Python, SQL, statistics, data preparation, visualization and relevant cloud skills.", steps:"Search the official careers site for the exact role; review eligibility and prepare for the interview stages specified in the job listing.", url:"https://www.hcltech.com/careers"},
  "Tech Mahindra": {hq:"Pune, India", about:"Digital transformation, IT and communications technology services", roles:["Data Analyst", "Data Scientist", "AI/ML Engineer", "Software Developer", "Cloud Engineer", "Cybersecurity Analyst"], focus:"Telecom, network technology, cloud, data and digital services", pros:"Work may involve telecom as well as broader digital and enterprise projects.", checks:"Check client assignment, location, shift, travel and role-specific conditions before accepting.", skills:"For data roles: Python, SQL, statistics, visualization and understanding of the business domain.", steps:"Find the opening on the official careers portal, confirm it is active and follow the listed application and interview steps.", url:"https://www.techmahindra.com/careers/"},
  "Cognizant": {hq:"Teaneck, New Jersey, United States; major India operations", about:"IT services and business consulting", roles:["Data Analyst", "Data Scientist", "AI/ML Engineer", "Data Engineer", "Software Developer", "Cloud Engineer"], focus:"Data and AI, cloud, digital engineering and business operations", pros:"Roles can span many industries, technology platforms and client problems.", checks:"The assigned client, location, shift, travel and exact work can vary by role.", skills:"For data roles: Python, SQL, statistics, data visualization, machine learning and communication.", steps:"Use the official careers portal; review country and role eligibility and prepare for the job-specific assessment and interviews.", url:"https://careers.cognizant.com/"},
  "Accenture": {hq:"Dublin, Ireland; major India operations", about:"Strategy, consulting, technology and operations services", roles:["Data Analyst", "Data Scientist", "AI/ML Engineer", "Data Engineer", "Software Developer", "Cloud Engineer", "Cybersecurity Analyst"], focus:"Consulting, generative AI, data, cloud, software and operations", pros:"Broad consulting and technology practices can offer varied problem domains.", checks:"Client work, travel, location, shift and project allocation may differ; check the specific role.", skills:"For data roles: Python, SQL, statistics, ML, cloud or visualization skills depending on the posting.", steps:"Apply through official careers; tailor your resume to the requirements and prepare for assessments, technical/case interviews and HR rounds where applicable.", url:"https://www.accenture.com/in-en/careers"},
  "Capgemini": {hq:"Paris, France; major India operations", about:"Technology, engineering and consulting services", roles:["Data Analyst", "Data Scientist", "AI/ML Engineer", "Data Engineer", "Software Developer", "Cloud Engineer"], focus:"Data and AI, cloud, software engineering, cybersecurity and consulting", pros:"Projects may combine technology implementation with business consulting.", checks:"Project, customer, work location, shift and required technology can vary.", skills:"For data roles: Python, SQL, statistics, data engineering or ML according to the job description.", steps:"Check the official jobs portal for India openings and current eligibility; follow the listed assessment and interview process.", url:"https://www.capgemini.com/in-en/careers/"},
  "IBM": {hq:"Armonk, New York, United States; major India operations", about:"Technology, software, consulting and research", roles:["Data Scientist", "AI/ML Engineer", "Data Engineer", "Software Developer", "Cloud Engineer", "Cybersecurity Analyst"], focus:"AI, hybrid cloud, enterprise software, consulting and research", pros:"Work can include enterprise technology, research and consulting areas.", checks:"Some roles require specific products, certifications, experience or customer-facing work; location varies.", skills:"For data roles: Python, SQL, statistics, ML, data engineering and relevant cloud tools if required.", steps:"Search IBM Careers by India location and exact role; study required skills and prepare for technical and behavioral interviews.", url:"https://www.ibm.com/careers/in-en/"},
  "Google": {hq:"Mountain View, California, United States; offices in India", about:"Internet services, software, cloud and AI products", roles:["Data Scientist", "Data Analyst", "Software Developer", "AI/ML Engineer", "Data Engineer", "Cloud Engineer"], focus:"Search, cloud, AI, software, analytics and product engineering", pros:"Product and engineering roles may involve large-scale systems and research problems.", checks:"Openings are highly role-specific and competitive; verify location, experience level and required qualifications.", skills:"For data roles: strong statistics, SQL, Python, experimentation and data communication; engineering roles also require coding and algorithms.", steps:"Apply to a specific official posting; prepare role-relevant coding, analytics or product interviews and use the requirements in that listing.", url:"https://www.google.com/about/careers/applications/"},
  "Microsoft": {hq:"Redmond, Washington, United States; offices in India", about:"Software, cloud, AI and productivity products", roles:["Data Scientist", "Data Analyst", "Software Developer", "AI/ML Engineer", "Data Engineer", "Cloud Engineer", "Cybersecurity Analyst"], focus:"Azure cloud, AI, software, productivity and enterprise solutions", pros:"Roles can connect to widely used products, cloud systems and applied AI.", checks:"Team, location, experience level and interview format depend on each posting.", skills:"For data roles: Python, SQL, statistics, experimentation and ML; for engineering, coding and system design as appropriate.", steps:"Use the official careers site to select an India role; prepare based on the listed competencies and interview guidance.", url:"https://careers.microsoft.com/v2/global/en/locations/india.html"},
  "Amazon": {hq:"Seattle, Washington, United States; offices in India", about:"E-commerce, cloud computing, devices and digital services", roles:["Data Analyst", "Data Scientist", "Data Engineer", "Software Developer", "AI/ML Engineer", "Cloud Engineer"], focus:"AWS cloud, retail, logistics, advertising, devices and AI", pros:"Roles may address large-scale customer, logistics and cloud problems.", checks:"Work style, shift, location and role expectations differ among corporate, operations and technology jobs.", skills:"For data roles: SQL, Python, statistics and business metrics; engineering roles require coding and role-specific design skills.", steps:"Apply to a specific official job; read the role requirements and prepare for technical and behavioral interviews relevant to that team.", url:"https://www.amazon.jobs/en/locations/india"},
  "Zoho": {hq:"Chennai, India", about:"Business software and cloud applications", roles:["Data Analyst", "Data Scientist", "Software Developer", "AI/ML Engineer", "Data Engineer", "QA Engineer"], focus:"SaaS products, business applications, analytics and software engineering", pros:"Product company with opportunities to work on software used by businesses.", checks:"Hiring route, location and required skills vary by role; confirm details from the current official opening.", skills:"For data roles: SQL, Python, statistics and clear problem solving; software roles need programming and fundamentals.", steps:"Check Zoho's official careers page for open roles and hiring events; prepare according to the specific job description.", url:"https://www.zoho.com/careers.html"},
  "Freshworks": {hq:"San Mateo, California, United States; founded in Chennai", about:"Cloud software for customer and employee experience", roles:["Data Analyst", "Data Scientist", "Data Engineer", "Software Developer", "AI/ML Engineer", "Product Analyst"], focus:"SaaS products, customer experience, AI and analytics", pros:"Product work can connect data and software directly to customer-facing services.", checks:"Openings and team locations change; confirm employment location, level and required experience in the listing.", skills:"For data roles: SQL, Python, statistics, experimentation and product metrics.", steps:"Use the official careers site to find an active role; prepare examples showing analytical reasoning and measurable project outcomes.", url:"https://www.freshworks.com/company/careers/"},
  "Deloitte": {hq:"London, United Kingdom; major India operations", about:"Professional services in consulting, audit, tax and advisory", roles:["Data Analyst", "Data Scientist", "AI/ML Engineer", "Data Engineer", "Cybersecurity Analyst", "Technology Consultant"], focus:"Consulting, risk, data and AI, cloud and technology transformation", pros:"Projects can span industries and combine business analysis with technology.", checks:"Travel, client work, busy periods, location and qualification requirements depend on service line and role.", skills:"For data roles: SQL, Python, statistics and visualization; consulting roles also need structured communication.", steps:"Choose the relevant Deloitte India entity and role on the official careers site; review qualifications and prepare for case, technical or behavioral rounds as listed.", url:"https://www.deloitte.com/in/en/careers.html"},
  "Oracle": {hq:"Austin, Texas, United States; offices in India", about:"Database, cloud infrastructure and enterprise software", roles:["Data Analyst", "Data Scientist", "AI/ML Engineer", "Data Engineer", "Software Developer", "Cloud Engineer"], focus:"Databases, Oracle Cloud Infrastructure, applications and AI", pros:"Roles may focus on enterprise databases, cloud platforms and business systems.", checks:"Some jobs expect knowledge of particular Oracle products or customer-facing work; requirements vary by posting.", skills:"For data roles: SQL, Python, databases, statistics and cloud/data platform knowledge as required.", steps:"Search Oracle Careers by India location and job family; prepare for the specific technology and experience requirements in the posting.", url:"https://www.oracle.com/careers/"},
  "Salesforce": {hq:"San Francisco, California, United States; offices in India", about:"Cloud CRM and enterprise software", roles:["Data Analyst", "Data Scientist", "AI/ML Engineer", "Software Developer", "Data Engineer", "Cloud Engineer"], focus:"CRM, cloud software, analytics, AI and customer platforms", pros:"Product and platform work can combine software, customer data and business workflows.", checks:"Role may require CRM/platform knowledge, customer-facing work or experience; verify office/location and level.", skills:"For data roles: SQL, Python, statistics and product analytics; learn Salesforce tools only where job requires them.", steps:"Apply on Salesforce's official careers site to a matching location and role; prepare for technical and competency-based interviews from the job criteria.", url:"https://careers.salesforce.com/en/locations/india/"},
  "Adobe": {hq:"San Jose, California, United States; offices in India", about:"Creative, document and digital experience software", roles:["Data Scientist", "Data Analyst", "Software Developer", "AI/ML Engineer", "Data Engineer", "Product Analyst"], focus:"Creative tools, digital documents, marketing technology and AI", pros:"Product roles can use analytics and engineering to improve widely used software.", checks:"Roles can be specialised and competitive; check product team, experience level, location and skills.", skills:"For data roles: Python, SQL, statistics, experimentation and ML; product analytics roles need clear storytelling.", steps:"Search Adobe Careers for India openings; prepare role-specific coding or analytics exercises and explain your project decisions clearly.", url:"https://careers.adobe.com/us/en/locations/india"},
  "NVIDIA": {hq:"Santa Clara, California, United States; offices in India", about:"Accelerated computing, graphics processors and AI platforms", roles:["AI/ML Engineer", "Data Scientist", "Software Developer", "Data Engineer", "Hardware Engineer", "Systems Engineer"], focus:"AI computing, GPUs, software, robotics and accelerated systems", pros:"Work may involve advanced AI, computing, graphics or hardware systems.", checks:"Many roles need deep specialisation; check degree, experience, programming and location requirements carefully.", skills:"For AI/data roles: Python, linear algebra, statistics, ML and strong coding; systems roles may require C/C++ and hardware knowledge.", steps:"Use the official NVIDIA careers portal; prepare for the exact technical area and demonstrate relevant projects or research.", url:"https://www.nvidia.com/en-us/about-nvidia/careers/"},
  "Flipkart": {hq:"Bengaluru, India", about:"E-commerce and digital marketplace services", roles:["Data Analyst", "Data Scientist", "Data Engineer", "Software Developer", "AI/ML Engineer", "Product Analyst"], focus:"Marketplace, logistics, payments, advertising, data and technology", pros:"Data and software work can address customer, seller and supply-chain problems at scale.", checks:"Teams and work expectations differ; confirm role location, work mode, shift and experience requirements.", skills:"For data roles: SQL, Python, statistics, experimentation and business metrics; engineering roles need strong coding.", steps:"Check the official careers page for active jobs; prepare a portfolio project that explains the problem, method, result and trade-offs.", url:"https://www.flipkartcareers.com/"}
};
const companies = Object.keys(companyProfiles);
let companyOffers = JSON.parse(localStorage.getItem('companyOffers') || '[]');

const projectCatalog = [
  {
    id: "student-performance",
    name: "Student Performance Analysis",
    description: "Explore student marks and study patterns using data and charts.",
    skills: "Python, Pandas, Statistics, Data Visualization"
  },
  {
    id: "customer-churn",
    name: "Customer Churn Prediction",
    description: "Use customer data to estimate who may stop using a service.",
    skills: "Python, Pandas, Machine Learning, Statistics"
  },
  {
    id: "sales-dashboard",
    name: "Sales Data Dashboard",
    description: "Analyze sales and show important trends in a dashboard.",
    skills: "SQL, Excel, Power BI, Data Visualization"
  },
  {
    id: "career-matcher",
    name: "Career Skill Matcher",
    description: "Compare a person's skills with the skills required for a job.",
    skills: "Python, Data, Recommendation Logic"
  },
  {
    id: "house-price",
    name: "House Price Prediction",
    description: "Use house details to estimate a property's price.",
    skills: "Python, Pandas, Regression, Statistics"
  },
  {
    id: "movie-recommender",
    name: "Movie Recommendation System",
    description: "Recommend movies based on a user's interests.",
    skills: "Python, Recommendation Systems, Data"
  },
  {
    id: "sentiment-analysis",
    name: "Review Sentiment Analysis",
    description: "Classify reviews as positive or negative using text data.",
    skills: "Python, NLP, Machine Learning"
  },
  {
    id: "air-quality",
    name: "Air Quality Analysis",
    description: "Study air quality measurements and identify patterns.",
    skills: "Python, Pandas, Statistics, Charts"
  },
  {
    id: "traffic-analysis",
    name: "Traffic Data Analysis",
    description: "Explore traffic patterns and busy travel times.",
    skills: "Python, SQL, Data Visualization"
  },
  {
    id: "energy-usage",
    name: "Energy Usage Prediction",
    description: "Analyze energy usage and estimate future demand.",
    skills: "Python, Statistics, Machine Learning"
  }
];

const allRoles = Object.values(engineeringJobs)
  .flatMap(branch => Object.keys(branch));

const commonFoundationSkills = ["C", "C++", "Java"];

let mySkills = JSON.parse(
  localStorage.getItem("careerSkills") ||
  '["Python", "SQL", "Statistics", "Pandas"]'
);

let studentName = localStorage.getItem("careerName") || "Student";
let careerGoal = localStorage.getItem("careerGoal") || "Data Scientist";
let studyYear = localStorage.getItem("careerStudyYear") || "1";
let internshipRecords = JSON.parse(localStorage.getItem("careerInternships") || "[]");

let myProjects = JSON.parse(
  localStorage.getItem("careerProjects") || "{}"
);

let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

let selectedQuizLanguage = "";
let selectedQuizLevel = "";
let activeQuizQuestions = [];
let quizReview = [];
let selectedPracticeLanguage = "";
let selectedPracticeLevel = "";
let selectedPracticeIndex = -1;
let selectedPracticeQuestionIndex = 0;

const languageQuizQuestions = {
  "C": [
    {level:"Beginner",question:"Which header is commonly used for printf() in C?",choices:["stdio.h","string.h","math.h"],answer:"stdio.h"},
    {level:"Beginner",question:"What is the first index of a C array?",choices:["0","1","-1"],answer:"0"},
    {level:"Beginner",question:"Which format specifier prints an int with printf?",choices:["%d","%s","%f"],answer:"%d"},
    {level:"Beginner",question:"Which keyword declares an integer variable?",choices:["int","integer","number"],answer:"int"},
    {level:"Beginner",question:"Which loop checks its condition before each iteration?",choices:["while","do-while only","switch"],answer:"while"},
    {level:"Intermediate",question:"What does &value mean in C?",choices:["Address of value","Size of value","Value multiplied by itself"],answer:"Address of value"},
    {level:"Intermediate",question:"Which header declares malloc()?",choices:["stdlib.h","stdio.h","ctype.h"],answer:"stdlib.h"},
    {level:"Intermediate",question:"What does a C string end with?",choices:["'\\0'","'\\n'","EOF"],answer:"'\\0'"},
    {level:"Intermediate",question:"What does a function's return type void mean?",choices:["It returns no value","It returns zero","It accepts no arguments"],answer:"It returns no value"},
    {level:"Intermediate",question:"Which operator accesses a struct member through a pointer?",choices:["->",".","::"],answer:"->"},
    {level:"Advanced",question:"What does a static local variable retain between function calls?",choices:["Its value","Its stack address only","Nothing"],answer:"Its value"},
    {level:"Advanced",question:"What is a dangling pointer?",choices:["A pointer to an object whose lifetime ended","A null pointer","A pointer to a function"],answer:"A pointer to an object whose lifetime ended"},
    {level:"Advanced",question:"What does realloc() attempt to do?",choices:["Resize a previously allocated block","Free every allocated block","Allocate only stack memory"],answer:"Resize a previously allocated block"},
    {level:"Advanced",question:"Which is the safest way to handle a possibly failed malloc()?",choices:["Check whether the result is NULL","Use it immediately","Assume allocation always succeeds"],answer:"Check whether the result is NULL"},
    {level:"Advanced",question:"What is undefined behavior in C?",choices:["Behavior the C standard does not define","A compile-time warning only","A required runtime error"],answer:"Behavior the C standard does not define"}
  ],
  "C++": [
    {level:"Beginner",question:"Which stream commonly prints output in C++?",choices:["std::cout","std::input","std::printline"],answer:"std::cout"},
    {level:"Beginner",question:"An instance of a class is called what?",choices:["Object","Header","Loop"],answer:"Object"},
    {level:"Beginner",question:"Which symbol ends a C++ statement?",choices:[";",":","#"],answer:";"},
    {level:"Beginner",question:"Which keyword declares a class?",choices:["class","structtype","object"],answer:"class"},
    {level:"Beginner",question:"Which operator tests equality?",choices:["==","=","!="],answer:"=="},
    {level:"Intermediate",question:"What is a constructor mainly used for?",choices:["Initialize an object","Delete a class","Repeat a loop"],answer:"Initialize an object"},
    {level:"Intermediate",question:"Which standard container is a resizable sequence?",choices:["std::vector","std::fixed","std::single"],answer:"std::vector"},
    {level:"Intermediate",question:"Which keyword supports runtime polymorphism?",choices:["virtual","static","sizeof"],answer:"virtual"},
    {level:"Intermediate",question:"What does a reference provide?",choices:["An alias for an existing object","A new class","A loop counter"],answer:"An alias for an existing object"},
    {level:"Intermediate",question:"Which header provides std::string?",choices:["<string>","<iostream>","<vector>"],answer:"<string>"},
    {level:"Advanced",question:"What does std::move typically enable?",choices:["Move semantics","Deep copy every object","Delete an object immediately"],answer:"Move semantics"},
    {level:"Advanced",question:"What is RAII used to tie resource lifetime to?",choices:["Object lifetime","Global variables only","Compiler warnings"],answer:"Object lifetime"},
    {level:"Advanced",question:"What does unique_ptr provide?",choices:["Exclusive ownership of a resource","Shared ownership by default","A raw array only"],answer:"Exclusive ownership of a resource"},
    {level:"Advanced",question:"What is a pure virtual function declared with?",choices:["= 0","= null","virtual()"],answer:"= 0"},
    {level:"Advanced",question:"What can a data race cause in a C++ program?",choices:["Undefined behavior","Automatic locking","A guaranteed deadlock"],answer:"Undefined behavior"}
  ],
  "Java": [
    {level:"Beginner",question:"Which method is the usual Java application entry point?",choices:["public static void main","begin()","startJava()"],answer:"public static void main"},
    {level:"Beginner",question:"What does the JVM execute?",choices:["Java bytecode","CSS styles","SQL tables"],answer:"Java bytecode"},
    {level:"Beginner",question:"Which keyword declares a class?",choices:["class","define","object"],answer:"class"},
    {level:"Beginner",question:"Which type stores true or false?",choices:["boolean","int","char"],answer:"boolean"},
    {level:"Beginner",question:"Which keyword creates a new object?",choices:["new","make","create"],answer:"new"},
    {level:"Intermediate",question:"Are Java String objects immutable?",choices:["Yes","No","Only inside loops"],answer:"Yes"},
    {level:"Intermediate",question:"Which collection is a resizable list?",choices:["ArrayList","FixedArray","StringOnly"],answer:"ArrayList"},
    {level:"Intermediate",question:"Which keyword makes a class inherit another class?",choices:["extends","inheritsFrom","using"],answer:"extends"},
    {level:"Intermediate",question:"Which block handles an exception?",choices:["catch","finalize","repeat"],answer:"catch"},
    {level:"Intermediate",question:"What does a static method belong to?",choices:["The class","Only one object","The constructor"],answer:"The class"},
    {level:"Advanced",question:"What does a Java Stream pipeline usually do?",choices:["Process data through operations","Create a new thread automatically","Replace every collection"],answer:"Process data through operations"},
    {level:"Advanced",question:"What does the synchronized keyword help control?",choices:["Concurrent access to a critical section","Class inheritance","Garbage collection timing"],answer:"Concurrent access to a critical section"},
    {level:"Advanced",question:"What is the purpose of a functional interface?",choices:["It has one abstract method for lambda use","It cannot have methods","It stores only primitive values"],answer:"It has one abstract method for lambda use"},
    {level:"Advanced",question:"What does Optional<T> represent?",choices:["A value that may be absent","A thread-safe list","A checked exception"],answer:"A value that may be absent"},
    {level:"Advanced",question:"What does a volatile field primarily guarantee?",choices:["Visibility of updates across threads","Atomicity of every compound operation","No object allocation"],answer:"Visibility of updates across threads"}
  ]
};

const codingChallenges = {
  "C": {
    "Beginner": [
      {title:"Add two numbers", task:"Read two integers and print their sum.", sample:"Input: 4 7\nOutput: 11", starter:"#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}", hint:"Use scanf to read two int values, then print their sum with printf.", solution:"#include <stdio.h>\nint main() {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"%d\\n\", a + b);\n    return 0;\n}"},
      {title:"Even or odd", task:"Read an integer and print Even or Odd.", sample:"Input: 9\nOutput: Odd", starter:"#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}", hint:"If number % 2 equals 0, it is even.", solution:"#include <stdio.h>\nint main() {\n    int n; scanf(\"%d\", &n);\n    puts(n % 2 == 0 ? \"Even\" : \"Odd\");\n    return 0;\n}"}
    ],
    "Intermediate": [
      {title:"Array maximum", task:"Read 5 integers into an array and print the largest.", sample:"Input: 3 8 2 9 4\nOutput: 9", starter:"#include <stdio.h>\nint main() {\n    // Read 5 numbers and find the maximum\n    return 0;\n}", hint:"Start max with the first element, then compare each remaining value.", solution:"#include <stdio.h>\nint main() { int a[5], max; for(int i=0;i<5;i++) scanf(\"%d\", &a[i]); max=a[0]; for(int i=1;i<5;i++) if(a[i]>max) max=a[i]; printf(\"%d\\n\", max); return 0; }"},
      {title:"Count vowels", task:"Read a word and count its vowels (a, e, i, o, u).", sample:"Input: career\nOutput: 3", starter:"#include <stdio.h>\nint main() {\n    // Read a word and count vowels\n    return 0;\n}", hint:"Loop through each character and compare its lowercase form to the five vowels.", solution:"#include <stdio.h>\n#include <ctype.h>\nint main() { char s[200]; int count=0; scanf(\"%199s\", s); for(int i=0;s[i];i++){ char c=tolower((unsigned char)s[i]); if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u') count++; } printf(\"%d\\n\",count); return 0; }"}
    ],
    "Advanced": [
      {title:"Recursive binary search", task:"Write a recursive binary search for a sorted array. Print the index of the target, or -1.", sample:"Array: 1 3 5 7 9; target: 7\nOutput: 3", starter:"#include <stdio.h>\nint binarySearch(int a[], int left, int right, int target) {\n    // Add recursive search logic\n}\nint main() {\n    // Test your function\n    return 0;\n}", hint:"Check the middle element. Recurse into only the half that can contain target.", solution:"int binarySearch(int a[], int l, int r, int x) { if(l>r) return -1; int m=l+(r-l)/2; if(a[m]==x) return m; if(a[m]>x) return binarySearch(a,l,m-1,x); return binarySearch(a,m+1,r,x); }"},
      {title:"Word frequency", task:"Given a line of lowercase words, count how many times a target word appears.", sample:"Line: data science data\nTarget: data\nOutput: 2", starter:"#include <stdio.h>\nint main() {\n    // Read the words and target, then count matches\n    return 0;\n}", hint:"Tokenize the line into words and compare each token with the target using strcmp.", solution:"Use fgets to read the line, strtok with spaces/newline to get tokens, and strcmp(token,target)==0 to count matches."}
    ]
  },
  "C++": {
    "Beginner": [
      {title:"Add two numbers", task:"Read two integers and print their sum.", sample:"Input: 4 7\nOutput: 11", starter:"#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}", hint:"Read both values with cin and print their sum with cout.", solution:"#include <iostream>\nusing namespace std;\nint main(){ int a,b; cin>>a>>b; cout<<a+b<<endl; }"},
      {title:"Even or odd", task:"Read an integer and print Even or Odd.", sample:"Input: 9\nOutput: Odd", starter:"#include <iostream>\nusing namespace std;\nint main() {\n    // Write your code here\n    return 0;\n}", hint:"Use the remainder operator % with 2.", solution:"#include <iostream>\nusing namespace std;\nint main(){ int n; cin>>n; cout<<(n%2==0 ? \"Even\" : \"Odd\"); }"}
    ],
    "Intermediate": [
      {title:"Remove duplicates", task:"Read integers into a vector and print unique values in sorted order.", sample:"Input: 4 2 4 1 2\nOutput: 1 2 4", starter:"#include <iostream>\n#include <vector>\nint main() {\n    // Use a vector and remove duplicates\n}", hint:"Sort the vector, then use std::unique and erase.", solution:"Sort a vector with std::sort(v.begin(),v.end()), then v.erase(std::unique(v.begin(),v.end()),v.end())."},
      {title:"Word counter", task:"Count each distinct word in a sentence using a map.", sample:"Input: red blue red\nOutput: red 2, blue 1", starter:"#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    // Count words with std::map\n}", hint:"Read words in a loop and increment counts[word].", solution:"std::map<std::string,int> counts; std::string word; while(std::cin>>word) ++counts[word]; for(const auto& p:counts) std::cout<<p.first<<\" \"<<p.second<<\"\\n\";"}
    ],
    "Advanced": [
      {title:"LRU cache", task:"Design an LRU cache with O(1) get and put operations.", sample:"Capacity 2; put(1,10), put(2,20), get(1), put(3,30\nget(2) returns -1", starter:"#include <list>\n#include <unordered_map>\nclass LRUCache {\n    // Add data members and get/put methods\n};", hint:"Combine a list for recency order with a map from key to list iterator.", solution:"Maintain list<pair<int,int>> with most recent at front plus unordered_map<int, iterator>. On get/put, splice touched node to front; evict the list back when over capacity."},
      {title:"Topological ordering", task:"Given a directed acyclic graph, output a valid topological order.", sample:"Edges: 0->1, 0->2, 1->3, 2->3\nOne answer: 0 1 2 3", starter:"#include <vector>\nstd::vector<int> topologicalSort(int n, const std::vector<std::pair<int,int>>& edges) {\n    // Implement Kahn's algorithm or DFS\n}", hint:"Kahn's algorithm uses indegrees and a queue of zero-indegree vertices.", solution:"Build adjacency and indegree arrays; push all zero-indegree vertices into a queue, repeatedly pop, append to answer and decrement neighbors' indegrees. If answer size != n, a cycle exists."}
    ]
  },
  "Java": {
    "Beginner": [
      {title:"Add two numbers", task:"Read two integers and print their sum.", sample:"Input: 4 7\nOutput: 11", starter:"import java.util.*;\nclass Main {\n  public static void main(String[] args) {\n    // Write your code here\n  }\n}", hint:"Use Scanner to read two int values and print their sum.", solution:"import java.util.*; class Main { public static void main(String[] args) { Scanner sc=new Scanner(System.in); int a=sc.nextInt(), b=sc.nextInt(); System.out.println(a+b); } }"},
      {title:"Even or odd", task:"Read an integer and print Even or Odd.", sample:"Input: 9\nOutput: Odd", starter:"import java.util.*;\nclass Main {\n  public static void main(String[] args) {\n    // Write your code here\n  }\n}", hint:"Check whether n % 2 is zero.", solution:"import java.util.*; class Main { public static void main(String[] args) { int n=new Scanner(System.in).nextInt(); System.out.println(n%2==0 ? \"Even\" : \"Odd\"); } }"}
    ],
    "Intermediate": [
      {title:"First non-repeating character", task:"Print the first character in a string that appears only once.", sample:"Input: swiss\nOutput: w", starter:"import java.util.*;\nclass Main {\n  public static void main(String[] args) {\n    // Count characters, then find the first with count 1\n  }\n}", hint:"Use LinkedHashMap<Character,Integer> to preserve insertion order.", solution:"Count characters in a LinkedHashMap, then iterate the string and print the first char whose count is 1."},
      {title:"Group words by length", task:"Group a list of words by their length using Java collections.", sample:"Input: cat apple dog\nOutput: 3=[cat, dog], 5=[apple]", starter:"import java.util.*;\nclass Main {\n  public static void main(String[] args) {\n    // Build a Map from length to list of words\n  }\n}", hint:"Use Map<Integer,List<String>> and computeIfAbsent.", solution:"Map<Integer,List<String>> groups=new TreeMap<>(); for(String word: words) groups.computeIfAbsent(word.length(), k->new ArrayList<>()).add(word);"}
    ],
    "Advanced": [
      {title:"Thread-safe counter", task:"Implement a counter that safely increments when used by multiple threads.", sample:"Run many threads with 1000 increments each; final value must be total increments.", starter:"import java.util.concurrent.atomic.AtomicInteger;\nclass Counter {\n  // Implement increment() and getValue()\n}", hint:"Use AtomicInteger.incrementAndGet, or synchronize both updates and reads.", solution:"class Counter { private final AtomicInteger value=new AtomicInteger(); void increment(){ value.incrementAndGet(); } int getValue(){ return value.get(); } }"},
      {title:"LRU cache", task:"Implement an LRU cache with O(1) get and put using Java collections.", sample:"Capacity 2; put(1,10), put(2,20), get(1), put(3,30); get(2) returns -1", starter:"import java.util.*;\nclass LRUCache {\n  // Extend LinkedHashMap or combine a map and linked list\n}", hint:"LinkedHashMap can maintain access order; remove the eldest entry when over capacity.", solution:"Extend LinkedHashMap with accessOrder=true and override removeEldestEntry to return size()>capacity; get/put then use the map operations."}
    ]
  }
};

// Extra practice set: two additional exercises for every language and level.
codingChallenges.C.Beginner.push(
  {title:"Factorial",task:"Read a non-negative integer and print its factorial.",sample:"Input: 5\nOutput: 120",starter:"#include <stdio.h>\nint main(){\n  // Calculate factorial\n}",hint:"Multiply values from 1 through n.",solution:"int n; unsigned long long f=1; scanf(\"%d\",&n); for(int i=1;i<=n;i++) f*=i; printf(\"%llu\\n\",f);"},
  {title:"Reverse a number",task:"Print the digits of a positive integer in reverse order.",sample:"Input: 482\nOutput: 284",starter:"#include <stdio.h>\nint main(){\n  // Reverse the digits\n}",hint:"Take the last digit with % 10, then remove it with / 10.",solution:"int n,r=0; scanf(\"%d\",&n); while(n>0){r=r*10+n%10;n/=10;} printf(\"%d\\n\",r);"}
);
codingChallenges.C.Intermediate.push(
  {title:"Palindrome word",task:"Check whether a word reads the same forward and backward.",sample:"Input: level\nOutput: Palindrome",starter:"// Read a word and compare letters from both ends",hint:"Compare s[i] with s[length-1-i] until the middle.",solution:"Use strlen to get n; compare s[i] and s[n-1-i] for every i<n/2."},
  {title:"Prime check",task:"Check whether an integer is prime.",sample:"Input: 17\nOutput: Prime",starter:"// Test possible divisors",hint:"Check divisors from 2 through the square root of n.",solution:"int p=n>=2; for(int i=2;i*i<=n;i++) if(n%i==0) p=0;"}
);
codingChallenges.C.Advanced.push(
  {title:"Merge sorted arrays",task:"Merge two sorted integer arrays into one sorted array.",sample:"A: 1 4 8; B: 2 3 9\nOutput: 1 2 3 4 8 9",starter:"// Use one index for each input array",hint:"Repeatedly copy the smaller current value, then copy the remaining tail.",solution:"Use i,j,k indexes; copy the smaller current value until one array ends, then append the other array's remaining values."},
  {title:"Matrix multiplication",task:"Multiply two compatible 2x2 integer matrices.",sample:"A: 1 2 / 3 4; B: 5 6 / 7 8\nOutput: 19 22 / 43 50",starter:"int a[2][2], b[2][2], c[2][2]; // read and multiply",hint:"For c[i][j], sum a[i][k] * b[k][j] over k.",solution:"Use three nested loops; initialize c[i][j] to zero, then accumulate a[i][k]*b[k][j]."}
);
codingChallenges["C++"].Beginner.push(
  {title:"Factorial",task:"Read n and print n factorial.",sample:"Input: 5\nOutput: 120",starter:"#include <iostream>\nint main(){ // calculate factorial }",hint:"Multiply all integers from 1 through n.",solution:"int n; std::cin>>n; long long f=1; for(int i=1;i<=n;i++) f*=i; std::cout<<f;"},
  {title:"Multiplication table",task:"Print a number's multiplication table from 1 to 10.",sample:"Input: 3\nOutput begins: 3 x 1 = 3",starter:"#include <iostream>\nint main(){ // print the table }",hint:"Use a for loop from 1 to 10.",solution:"int n; std::cin>>n; for(int i=1;i<=10;i++) std::cout<<n<<\" x \"<<i<<\" = \"<<n*i<<\"\\n\";"}
);
codingChallenges["C++"].Intermediate.push(
  {title:"Balanced brackets",task:"Check whether (), [], and {} are correctly nested.",sample:"Input: {[()]}\nOutput: Balanced",starter:"#include <stack>\n// Use a stack to match brackets",hint:"Push opening brackets; every closing bracket must match the top.",solution:"Scan the string, push openers, and for each closer verify and pop its matching opener. The stack must end empty."},
  {title:"Shortest path in a grid",task:"Find the shortest path from S to E through open cells using BFS.",sample:"Grid has open cells and # walls\nOutput: minimum number of moves",starter:"// Queue grid cells with their distance",hint:"Visit each open cell once and explore four directions.",solution:"Use a queue of (row,col,distance), mark visited when enqueued, and return the distance upon reaching E."}
);
codingChallenges["C++"].Advanced.push(
  {title:"Dijkstra shortest paths",task:"Find shortest distances from one source in a weighted graph with non-negative edges.",sample:"Edges: 0-1 (4), 0-2 (1), 2-1 (2)\nDistance 0 to 1: 3",starter:"// Use adjacency lists and a min-priority queue",hint:"Relax edges and push each improved distance into the min-heap.",solution:"Initialize source distance to zero; pop smallest pair, skip stale entries, relax neighbors, and push improved distances."},
  {title:"Coin change",task:"Find the fewest coins needed to make an amount, or -1 if impossible.",sample:"Coins: 1 3 4; amount: 6\nOutput: 2",starter:"// Build a dynamic programming table",hint:"Let dp[x] be the fewest coins needed for amount x; dp[0]=0.",solution:"For x from 1 to amount, try each coin c<=x and update dp[x]=min(dp[x],dp[x-c]+1)."}
);
codingChallenges.Java.Beginner.push(
  {title:"Multiplication table",task:"Read a number and print its table from 1 to 10.",sample:"Input: 3\nOutput begins: 3 x 1 = 3",starter:"// Read n and print its table",hint:"Use a for loop from 1 through 10.",solution:"for(int i=1;i<=10;i++) System.out.println(n+\" x \"+i+\" = \"+(n*i));"},
  {title:"Largest of three",task:"Read three integers and print the largest.",sample:"Input: 5 12 8\nOutput: 12",starter:"// Read three numbers and find the maximum",hint:"Use Math.max twice or compare values with if statements.",solution:"System.out.println(Math.max(a,Math.max(b,c)));"}
);
codingChallenges.Java.Intermediate.push(
  {title:"Sort students by score",task:"Sort student records from highest score to lowest.",sample:"Asha 80, Bala 95\nOutput: Bala 95, Asha 80",starter:"// Create a list of students and sort with a Comparator",hint:"Compare score values in descending order.",solution:"students.sort(Comparator.comparingInt(Student::getScore).reversed());"},
  {title:"Remove duplicate values",task:"Print unique integers once while preserving their input order.",sample:"Input: 4 2 4 1 2\nOutput: 4 2 1",starter:"// Use a LinkedHashSet",hint:"LinkedHashSet preserves insertion order and ignores duplicate values.",solution:"Set<Integer> unique=new LinkedHashSet<>(values); System.out.println(unique);"}
);
codingChallenges.Java.Advanced.push(
  {title:"Producer-consumer queue",task:"Create a bounded thread-safe queue for producer and consumer threads.",sample:"Each produced item should be consumed once without race conditions.",starter:"// Use a BlockingQueue",hint:"ArrayBlockingQueue provides blocking put and take operations.",solution:"BlockingQueue<Integer> q=new ArrayBlockingQueue<>(10); producer calls q.put(value); consumer calls q.take();"},
  {title:"Word frequency with streams",task:"Count word frequencies in a list using Java Streams.",sample:"Input: red blue red\nOutput: red=2, blue=1",starter:"// Use groupingBy and counting collectors",hint:"Collectors.groupingBy can use Collectors.counting as its downstream collector.",solution:"Map<String,Long> counts=words.stream().collect(Collectors.groupingBy(w->w,Collectors.counting()));"}
);

function setPageIllustration(pageName) {
  const holder = document.getElementById("page-illustration");
  if (!holder) return;
  const art = {
    "Dashboard": ["Career progress chart", `<path d="M29 77V58h13v19M53 77V43h13v34M77 77V30h13v47"/><path d="m29 47 20-14 17 7 23-19"/><circle cx="89" cy="21" r="4" fill="#d99a55" stroke="none"/>`],
    "My Profile": ["Student profile", `<circle cx="60" cy="43" r="15"/><path d="M30 91c3-18 14-27 30-27s27 9 30 27z"/>`],
    "My Skills": ["Skills badge", `<path d="m60 23 10 21 23 3-17 16 4 23-20-11-20 11 4-23-17-16 23-3z"/>`],
    "Companies": ["Company buildings", `<path d="M28 88V39h27v49M55 88V24h29v64M84 88V49h12v39"/><path d="M36 49h8M36 61h8M36 73h8M64 36h10M64 49h10M64 62h10M64 75h10"/>`],
    "Job Roles": ["Career briefcase", `<rect x="25" y="42" width="70" height="47" rx="7"/><path d="M45 42V30h30v12M25 59h70M55 58v10h10V58"/>`],
    "Skill Match": ["Skills target", `<circle cx="58" cy="58" r="32"/><circle cx="58" cy="58" r="19"/><circle cx="58" cy="58" r="6" fill="#d99a55"/><path d="m75 42 17-17M80 25h12v12"/>`],
    "Skill Gap": ["Skills progress bars", `<path d="M29 86V68h13v18M51 86V51h13v35M73 86V34h13v52"/><path d="M27 94h64"/>`],
    "Learning Center": ["Open learning book", `<path d="M59 37c-13-10-27-10-39-4v49c14-6 27-5 39 5 12-10 25-11 39-5V33c-12-6-26-6-39 4zM59 38v49"/><path d="M30 48h17M30 60h17M72 48h17M72 60h17"/>`],
    "Online Courses": ["Online course screen", `<rect x="25" y="27" width="70" height="51" rx="6"/><path d="m53 41 20 12-20 12z" fill="#d99a55" stroke="none"/><path d="M48 90h24M60 78v12"/>`],
    "Internships": ["Internship briefcase", `<rect x="25" y="42" width="70" height="47" rx="7"/><path d="M45 42V30h30v12M25 59h70M55 58v10h10V58"/><path d="m60 48 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#d99a55" stroke="none"/>`],
    "My Certificates": ["Certificate award", `<path d="M35 27h50v45H35zM44 39h32M44 50h25"/><circle cx="60" cy="72" r="13" fill="#fff"/><path d="m60 62 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#d99a55" stroke="none"/><path d="m52 83-3 13 11-6 11 6-3-13"/>`],
    "Projects": ["Coding project brackets", `<path d="m44 38-19 20 19 20M76 38l19 20-19 20M67 29 53 89"/>`],
    "Career Roadmap": ["Career roadmap", `<path d="M30 83c0-18 24-13 24-29S36 41 36 26M54 54c0 15 29 11 29 28"/><circle cx="36" cy="25" r="7" fill="#d99a55"/><circle cx="54" cy="54" r="7"/><circle cx="83" cy="83" r="7" fill="#d99a55"/>`],
    "Practice & Quiz": ["Quiz question card", `<rect x="29" y="24" width="62" height="72" rx="8"/><path d="M43 43h34M43 56h18M43 75l7 7 13-15"/><circle cx="78" cy="76" r="10" fill="#d99a55"/><path d="M76 73a3 3 0 1 1 5 2c-2 1-3 2-3 4M78 84h.1" stroke="#fff"/>`],
    "Coding Practice": ["Code editor", `<rect x="24" y="28" width="72" height="62" rx="7"/><path d="M24 43h72M39 58l-8 7 8 7M51 75l8-19M69 59h15M69 69h11"/><circle cx="33" cy="35" r="2" fill="#d99a55" stroke="none"/>`],
    "Resume Builder": ["Resume document", `<path d="M37 22h35l16 16v57H37zM72 22v17h16M48 53h29M48 65h29M48 77h20"/><circle cx="57" cy="40" r="7" fill="#d99a55"/>`],
    "Resume Analyzer": ["Resume analysis", `<path d="M34 22h39l14 14v47H34zM73 22v15h14M45 51h27M45 62h20"/><circle cx="75" cy="76" r="12" fill="#fff"/><path d="m84 85 10 10"/>`]
  };
  const [label, shape] = art[pageName] || ["Career learning", `<circle cx="60" cy="60" r="29"/><path d="M45 61l10 10 21-23"/>`];
  holder.innerHTML = `<div class="page-art" role="img" aria-label="${escapeHTML(label)}"><svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="60" cy="60" r="57" fill="#e8f2ea"/><circle cx="97" cy="24" r="8" fill="#f4e5c9"/><g fill="none" stroke="#416f53" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${shape}</g></svg></div>`;
}

function showPage(pageName) {
  const title = document.getElementById("page-title");
  const content = document.getElementById("page-content");

  title.textContent = pageName;
  setPageIllustration(pageName);

  if (pageName === "Dashboard") {
    content.innerHTML = `
      <div class="card dashboard-welcome">
        <div class="dashboard-hero">
          <div class="dashboard-hero-copy">
            <h3>Welcome, ${escapeHTML(studentName)}!</h3>
            <p>Your career goal: ${escapeHTML(careerGoal)} (${escapeHTML(getCareerDomain(careerGoal))})</p>
            <p>Study year: ${escapeHTML(yearLabel(studyYear))}</p>
            <button onclick="showPage('Skill Gap')">See skills to improve</button>
            <p>Choose projects you like, complete three, then take the quiz.</p>
          </div>
          <div class="dashboard-illustration" role="img" aria-label="Data science dashboard with charts and career progress">
            <svg viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="340" height="230" rx="24" fill="#e8f2ea"/>
              <circle cx="285" cy="48" r="22" fill="#d5e9da"/>
              <circle cx="48" cy="183" r="16" fill="#f4e5c9"/>
              <rect x="71" y="35" width="199" height="144" rx="13" fill="#fff" stroke="#b9d3bf" stroke-width="3"/>
              <path d="M71 61h199" stroke="#e0ebe2" stroke-width="3"/>
              <circle cx="88" cy="49" r="4" fill="#74a985"/><circle cx="102" cy="49" r="4" fill="#e5b56c"/>
              <rect x="91" y="132" width="21" height="31" rx="4" fill="#9bc8a7"/>
              <rect x="123" y="115" width="21" height="48" rx="4" fill="#78af88"/>
              <rect x="155" y="123" width="21" height="40" rx="4" fill="#d7ad68"/>
              <rect x="187" y="96" width="21" height="67" rx="4" fill="#5d9275"/>
              <rect x="219" y="83" width="21" height="80" rx="4" fill="#78af88"/>
              <path d="M98 104l42-18 32 9 34-28 35 8" fill="none" stroke="#416f53" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="140" cy="86" r="5" fill="#fff" stroke="#416f53" stroke-width="3"/>
              <circle cx="206" cy="67" r="5" fill="#fff" stroke="#416f53" stroke-width="3"/>
              <path d="M53 186h235l-17 18H70z" fill="#5d9275"/>
              <rect x="142" y="184" width="56" height="5" rx="2.5" fill="#d7e7d9"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="card"><h3>${mySkills.length}</h3><p>Current Skills</p><p>${mySkills.map(escapeHTML).join(", ") || "Add skills from My Skills"}</p><button onclick="showPage('My Skills')">Update skills</button></div>
      <div class="card"><h3>${getMatchScore(careerGoal)}%</h3><p>Career Goal Skill Match</p></div>
      <div class="card"><h3>${completedProjectCount()} / 3</h3><p>Projects Completed for Quiz</p></div>
      <button onclick="showPage('Career Roadmap')">View Career Roadmap</button>
    `;

  } else if (pageName === "My Profile") {
    content.innerHTML = `
      <div class="card">
        <h3>My Profile</h3>
        <label>Your name</label>
        <input id="nameInput" value="${escapeHTML(studentName)}">
        <label>Career goal / domain</label>
        <select id="goalInput">
          ${allRoles.map(role => `<option>${escapeHTML(role)}</option>`).join("")}
        </select>
        <label>Which year are you studying?</label>
        <select id="studyYearInput">
          <option value="1">1st year</option>
          <option value="2">2nd year</option>
          <option value="3">3rd year</option>
          <option value="4">4th year / Final year</option>
        </select>        <button onclick="saveProfile()">Save Profile</button>
      </div>
    `;
    document.getElementById("goalInput").value = careerGoal;
    document.getElementById("studyYearInput").value = studyYear;

  } else if (pageName === "My Skills") {
    const domain = getCareerDomain(careerGoal);
    const domainSkills = getDomainSkills(domain).filter(skill => !commonFoundationSkills.includes(skill));
    const otherSkills = mySkills.filter(skill => !commonFoundationSkills.includes(skill) && !domainSkills.includes(skill));
    content.innerHTML = `
      <div class="card skill-editor">
        <h3>My Skills</h3>
        <p>Career domain: <b>${escapeHTML(domain)}</b> · Goal: <b>${escapeHTML(careerGoal)}</b></p>
        <p>Select only the skills you already know. Suggestions update when your career goal changes.</p>
        <h3>Important programming foundations for every domain</h3>
        <p>C, C++ and Java are listed as common foundations. The exact language needed depends on the job role.</p>
        <div class="skill-options">
          ${commonFoundationSkills.map(skill => `
            <label class="skill-option common-skill">
              <input type="checkbox" name="skillOption" value="${escapeHTML(skill)}" ${hasSkill(skill) ? "checked" : ""}>
              ${escapeHTML(skill)}
            </label>
          `).join("")}
        </div>
        <h3>Skills for ${escapeHTML(domain)}</h3>
        <div class="skill-options">
          ${domainSkills.map(skill => `
            <label class="skill-option">
              <input type="checkbox" name="skillOption" value="${escapeHTML(skill)}" ${hasSkill(skill) ? "checked" : ""}>
              ${escapeHTML(skill)}
            </label>
          `).join("")}
        </div>
        <label for="otherSkillsInput">Other skills you know (comma-separated)</label>
        <input id="otherSkillsInput" placeholder="Excel, Power BI" value="${escapeHTML(otherSkills.join(", "))}">
        <button onclick="saveSkills()">Save My Skills</button>
        <h3>Your current skills</h3>
        <p>${mySkills.map(escapeHTML).join(", ") || "No skills selected yet."}</p>
      </div>
    `;
  } else if (pageName === "Companies") {
    content.innerHTML = `
      <div class="card">
        <h3>Company career guide</h3>
        <p>Choose a company to see its business, example job roles, skills to prepare, hiring guidance and official careers link. Roles shown are examples, not confirmation of current vacancies.</p>
        <label>Choose company</label>
        <select id="companySelect" onchange="renderCompanyDetails()">
          ${companies.map(company => `<option>${escapeHTML(company)}</option>`).join("")}
        </select>
        <div id="companyDetails"></div>
      </div>
    `;
    renderCompanyDetails();  } else if (pageName === "Job Roles") {
    content.innerHTML = `
      <p>Open an engineering branch to see job roles and required skills.</p>
      ${Object.entries(engineeringJobs).map(([branch, jobs]) => `
        <div class="card">
          <h3>${escapeHTML(branch)}</h3>
          ${Object.entries(jobs).map(([role, skills]) => `
            <details>
              <summary>${escapeHTML(role)}</summary>
              <p>Required skills: ${skills.map(escapeHTML).join(", ")}</p>
              <button onclick="setCareerGoal('${escapeHTML(role)}')">
                Set as my career goal
              </button>
            </details>
          `).join("")}
        </div>
      `).join("")}
    `;

  } else if (pageName === "Skill Match") {
    content.innerHTML = `
      <div class="card">
        <h3>Check your Skill Match</h3>
        <label>Company</label>
        <select id="companyInput">
          ${companies.map(company => `<option>${escapeHTML(company)}</option>`).join("")}
        </select>
        <label>Job role</label>
        <select id="roleInput">
          ${allRoles.map(role => `<option>${escapeHTML(role)}</option>`).join("")}
        </select>
        <label>Your skills, separated by commas</label>
        <input id="matchInput" value="${escapeHTML(mySkills.join(", "))}">
        <button onclick="calculateMatch()">Calculate Match</button>
        <div id="matchResult"></div>
        <p><small>This is a learning guide, not a hiring prediction.</small></p>
      </div>
    `;
    document.getElementById("roleInput").value = careerGoal;

  } else if (pageName === "Skill Gap") {
    const needed = getRoleSkills(careerGoal);
    const missing = needed.filter(skill => !hasSkill(skill));
    const missingFoundation = commonFoundationSkills.filter(skill => !hasSkill(skill));
    const yearSkills = getYearSkillPlan(careerGoal, studyYear);

    content.innerHTML = `
      <div class="card">
        <h3>Skills to improve for ${escapeHTML(careerGoal)}</h3>
        <p><b>Domain:</b> ${escapeHTML(getCareerDomain(careerGoal))} · <b>Study year:</b> ${escapeHTML(yearLabel(studyYear))}</p>
        <p><b>Role-specific skills to improve:</b> ${missing.map(escapeHTML).join(", ") || "You have added all listed role skills."}</p>
        <p><b>Common programming foundations to consider:</b> ${missingFoundation.map(escapeHTML).join(", ") || "You have selected C, C++ and Java."}</p>
        <h3>Your focus for this year</h3>
        <ul>${yearSkills.map(skill => `<li>${escapeHTML(skill)}</li>`).join("")}</ul>
        <button onclick="showPage('Online Courses')">Find courses for my domain</button>
        <button onclick="showPage('Internships')">Explore internships</button>
      </div>
    `;

  } else if (pageName === "Learning Center" || pageName === "Online Courses") {
    renderCoursesPage();

  } else if (pageName === "Internships") {
    renderInternshipsPage();

  } else if (pageName === "My Certificates") {
    renderCertificatesPage();
  } else if (pageName === "Projects") {
    content.innerHTML = `
      <h3>Choose projects you like</h3>
      <p>Choose a project, build it, then submit your project link and a short explanation. Three submitted projects unlock the quiz.</p>
      <div class="card">
        <b>Completed: ${completedProjectCount()} / 3</b>
        <p>${quizIsUnlocked() ? "Quiz unlocked!" : "Complete three projects to unlock Practice & Quiz."}</p>
      </div>
      <div class="grid">
        ${projectCatalog.map(project => {
          const state = myProjects[project.id] || {};
          return `
            <div class="card">
              <h3>${escapeHTML(project.name)}</h3>
              <p>${escapeHTML(project.description)}</p>
              <p><small>Skills: ${escapeHTML(project.skills)}</small></p>
              <button onclick="chooseProject('${project.id}')">
                ${state.chosen ? "Chosen ✓" : "Choose this project"}
              </button>
              ${state.chosen ? (state.completed ? `
                <p><b>Submitted ✓</b></p>
                <p>${escapeHTML(state.summary || "")}</p>
                <p><a href="${escapeHTML(state.projectUrl || "#")}" target="_blank" rel="noopener">Open submitted project</a></p>
                <button onclick="editProjectSubmission('${project.id}')">Update submission</button>
              ` : `
                <form onsubmit="submitProject(event, '${project.id}')" class="project-submission-form">
                  <label>Project link (GitHub or deployed website)<br>
                    <input id="project-url-${project.id}" type="url" placeholder="https://github.com/yourname/project" required value="${escapeHTML(state.projectUrl || "")}">
                  </label>
                  <label>What did you build? (at least 20 characters)<br>
                    <textarea id="project-summary-${project.id}" minlength="20" required placeholder="Briefly describe your project and what you implemented">${escapeHTML(state.summary || "")}</textarea>
                  </label>
                  <button type="submit">Submit completed project</button>
                </form>
              `) : ""}
            </div>
          `;
        }).join("")}
      </div>
    `;

  } else if (pageName === "Career Roadmap") {
    const done = completedProjectCount();

    content.innerHTML = `
      <h3>Your Career Roadmap: ${escapeHTML(careerGoal)}</h3>
      <p>Follow these steps in order. You choose which projects you want to do.</p>

      <div class="card">
        <h3>Step 1 — Set your career goal</h3>
        <p>Current goal: ${escapeHTML(careerGoal)}</p>
        <button onclick="showPage('My Profile')">Choose or update goal</button>
      </div>

      <div class="card">
        <h3>Step 2 — Add your skills</h3>
        <p>Your skills: ${mySkills.map(escapeHTML).join(", ") || "Not added yet"}</p>
        <button onclick="showPage('My Skills')">Update skills</button>
      </div>

      <div class="card">
        <h3>Step 3 — Choose projects you like</h3>
        <p>${chosenProjectCount()} project(s) chosen.</p>
        <button onclick="showPage('Projects')">Explore projects</button>
      </div>

      <div class="card">
        <h3>Step 4 — Complete three projects</h3>
        <p>Progress: ${done} / 3 completed</p>
        <button onclick="showPage('Projects')">Continue projects</button>
      </div>

      <div class="card">
        <h3>Step 5 — Take the quiz</h3>
        <p>${quizIsUnlocked() ? "Ready! The quiz is unlocked." : "The quiz unlocks after three projects are marked complete."}</p>
        ${quizIsUnlocked() ? `<button onclick="startQuiz()">Start quiz</button>` : ""}
      </div>
    `;

  } else if (pageName === "Practice & Quiz") {
    if (!quizIsUnlocked()) {
      content.innerHTML = `
        <div class="card">
          <h3>Quiz is locked</h3>
          <p>Complete three projects first. You have completed ${completedProjectCount()} / 3.</p>
          <button onclick="showPage('Projects')">Go to Projects</button>
        </div>
      `;
    } else {
      showQuiz();
    }

  } else if (pageName === "Coding Practice") {
    if (!quizIsUnlocked()) {
      content.innerHTML = `
        <div class="card"><h3>Coding Practice is locked</h3>
        <p>Submit three completed projects first. Progress: ${completedProjectCount()} / 3</p>
        <button onclick="showPage('Projects')">Go to Projects</button></div>`;
    } else {
      showCodingPractice();
    }

  } else if (pageName === "Resume Builder") {
    renderResumeBuilder();

  } else if (pageName === "Resume Analyzer") {
    content.innerHTML = `
      <div class="card">
        <h3>Resume Analyzer</h3>
        <p>Paste resume text to find skills mentioned in it.</p>
        <textarea id="resumeInput" rows="6" placeholder="Paste resume text here"></textarea>
        <button onclick="analyzeResume()">Find Skills</button>
        <div id="resumeResult"></div>
        <p><small>Demo only: the text is checked in this browser and is not uploaded.</small></p>
      </div>
    `;

  } else if (pageName === "Interview Prep") {
    content.innerHTML = `
      <div class="card">
        <h3>Interview Practice</h3>
        <p>Tell me about a project you completed. What problem did it solve, and what skills did you use?</p>
        <textarea rows="5" placeholder="Write your practice answer here"></textarea>
      </div>
    `;

  } else if (pageName === "AI Career Mentor") {
    content.innerHTML = `
      <div class="card">
        <h3>Career Mentor</h3>
        <p>For your ${escapeHTML(careerGoal)} goal, work on these skills:</p>
        <p>${getRoleSkills(careerGoal).filter(skill => !hasSkill(skill)).map(escapeHTML).join(", ") || "Keep practicing and build more projects."}</p>
        <button onclick="showPage('Skill Gap')">View Skill Gap</button>
      </div>
      <p><small>This demo uses built-in guidance; it is not connected to an external AI service.</small></p>
    `;

  } else {
    content.innerHTML = `<div class="card"><h3>${escapeHTML(pageName)}</h3></div>`;
  }

  addCareerMenuButtons();
  addQuizMenuButton();
  decorateSidebarButtons();
}

function decorateSidebarButtons() {
  const icons = {
    "Dashboard": "📊",
    "My Profile": "👤",
    "My Skills": "🧩",
    "Companies": "🏢",
    "Job Roles": "💼",
    "Skill Match": "🎯",
    "Skill Gap": "📈",
    "Learning Center": "📚",
    "Projects": "🛠️",
    "Career Roadmap": "🗺️",
    "Internships": "🎓",
    "Online Courses": "💻",
    "My Certificates": "🏅",
    "Resume Builder": "📄",
    "Practice & Quiz": "❓",
    "Coding Practice": "⌨️",
    "Log out": "↪️"
  };

  document.querySelectorAll(".sidebar button").forEach((button) => {
    if (button.querySelector(".sidebar-icon")) return;
    const label = button.textContent.trim();
    const icon = icons[label] || "✨";
    button.innerHTML = `<span class="sidebar-icon" aria-hidden="true">${icon}</span><span>${escapeHTML(label)}</span>`;
  });
}

let skillOrbitLoginMode = "login";

const skillOrbitSupabase = window.supabase.createClient(
  "https://ttdhibdxhekdoukqxyiv.supabase.co",
  "sb_publishable_JhUxupDL_LfOvPVhDUo8AA_SdSvqydR"
);

function toggleSkillOrbitLoginMode() {
  skillOrbitLoginMode = skillOrbitLoginMode === "login" ? "register" : "login";
  const registering = skillOrbitLoginMode === "register";
  const nameField = document.getElementById("login-name-field");
  const nameInput = document.getElementById("login-name");
  nameField.hidden = !registering;
  nameInput.disabled = !registering;
  nameInput.required = registering;
  document.getElementById("login-heading").textContent = registering ? "Create your account" : "Sign in to continue";
  document.getElementById("login-submit").textContent = registering ? "Create account" : "Sign in to SkillOrbit";
  document.getElementById("login-toggle").textContent = registering ? "I already have an account" : "Create account";
  document.getElementById("login-note").textContent = registering ? "Use this same email and password next time you sign in." : "New here? Create an account first.";
  document.getElementById("login-password").autocomplete = registering ? "new-password" : "current-password";
  showSkillOrbitLoginMessage("");
}

function toggleSkillOrbitPasswordVisibility() {
  const password = document.getElementById("login-password");
  const checkbox = document.getElementById("show-login-password");
  password.type = checkbox.checked ? "text" : "password";
}

function showSkillOrbitLoginMessage(message, isError = true) {
  const box = document.getElementById("login-error");
  box.textContent = message;
  box.classList.toggle("is-success", !isError && Boolean(message));
}

function parseSavedSkills(value) {
  if (Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return String(value || "").split(",").map(skill => skill.trim()).filter(Boolean);
  }
}

function syncStudentProfileToLocalStorage() {
  localStorage.setItem("careerName", studentName);
  localStorage.setItem("careerGoal", careerGoal);
  localStorage.setItem("careerStudyYear", studyYear);
  localStorage.setItem("careerSkills", JSON.stringify(mySkills));
}

async function saveStudentProfileToSupabase() {
  const { data, error: sessionError } = await skillOrbitSupabase.auth.getSession();
  if (sessionError) throw sessionError;
  const user = data.session?.user;
  if (!user) throw new Error("Please sign in again before saving your profile.");

  const { error } = await skillOrbitSupabase.from("student_profiles").upsert({
    user_id: user.id,
    full_name: studentName,
    career_goal: careerGoal,
    study_year: String(studyYear),
    skills: JSON.stringify(mySkills)
  });
  if (error) throw error;
}

async function loadStudentProfileFromSupabase(user) {
  const { data: profile, error } = await skillOrbitSupabase
    .from("student_profiles")
    .select("full_name, career_goal, study_year, skills")
    .eq("user_id", user.id)
    .maybeSingle();
  if (error) throw error;

  if (profile) {
    studentName = profile.full_name || user.user_metadata?.full_name || user.email?.split("@")[0] || "Student";
    careerGoal = profile.career_goal || "Data Scientist";
    studyYear = profile.study_year || "1";
    mySkills = parseSavedSkills(profile.skills);
  } else {
    studentName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split("@")[0] || "Student";
    careerGoal = "Data Scientist";
    studyYear = "1";
    mySkills = [];
    await saveStudentProfileToSupabase();
  }

  syncStudentProfileToLocalStorage();
}

function showProfileSaveError(error) {
  console.error("SkillOrbit profile save failed:", error);
  alert(`Your changes could not be saved to your account. ${error?.message || "Please try again."}`);
}

async function handleSkillOrbitLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  if (!email || !password || (skillOrbitLoginMode === "register" && !name)) return;
  showSkillOrbitLoginMessage("");

  if (skillOrbitLoginMode === "register") {
    const { data, error } = await skillOrbitSupabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
        emailRedirectTo: `${window.location.origin}${window.location.pathname}`
      }
    });
    if (error) {
      showSkillOrbitLoginMessage(error.message);
      return;
    }
    document.getElementById("login-email").value = email;
    document.getElementById("login-password").value = "";
    if (data.session && data.user) {
      try {
        await loadStudentProfileFromSupabase(data.user);
      } catch (profileError) {
        showProfileSaveError(profileError);
        studentName = name;
      }
      localStorage.setItem("skillOrbitUserName", name);
      localStorage.setItem("skillOrbitUserEmail", email);
      enterSkillOrbit();
      showPage("Dashboard");
    } else {
      toggleSkillOrbitLoginMode();
      showSkillOrbitLoginMessage("Account created. Check your email and confirm your account, then sign in.", false);
    }
    return;
  }

  const { data, error } = await skillOrbitSupabase.auth.signInWithPassword({ email, password });
  if (error) {
    const message = error.message.toLowerCase().includes("invalid login credentials")
      ? "Email or password is incorrect. Please check and try again."
      : error.message.toLowerCase().includes("email not confirmed")
        ? "Please confirm your email from the message Supabase sent, then sign in."
        : error.message;
    showSkillOrbitLoginMessage(message);
    return;
  }

  const user = data.user;
  const userName = user.user_metadata?.full_name || user.user_metadata?.name || email.split("@")[0];
  try {
    await loadStudentProfileFromSupabase(user);
  } catch (profileError) {
    showProfileSaveError(profileError);
    studentName = userName;
  }
  localStorage.setItem("skillOrbitUserName", studentName);
  localStorage.setItem("skillOrbitUserEmail", user.email || email);
  enterSkillOrbit();
  showPage("Dashboard");
}

function enterSkillOrbit() {
  document.getElementById("login-screen").hidden = true;
  document.getElementById("skillorbit-app").hidden = false;
}

async function logoutSkillOrbit() {
  await skillOrbitSupabase.auth.signOut();
  localStorage.removeItem("skillOrbitUserName");
  localStorage.removeItem("skillOrbitUserEmail");
  localStorage.removeItem("skillOrbitLoggedIn");
  document.getElementById("skillorbit-app").hidden = true;
  document.getElementById("login-screen").hidden = false;
  document.getElementById("login-password").value = "";
  document.getElementById("show-login-password").checked = false;
  toggleSkillOrbitPasswordVisibility();
}

const courseCatalog = {
  "Data Science": [
    {title:"Python for Data Science", provider:"NPTEL", detail:"Python basics and data-science practice", url:"https://nptel.ac.in/courses/106106212"},
    {title:"Data Science for Engineers", provider:"NPTEL / SWAYAM", detail:"Data-science foundations for engineering students", url:"https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs65"},
    {title:"Machine Learning Crash Course", provider:"Google for Developers", detail:"Machine-learning concepts and hands-on exercises", url:"https://developers.google.com/machine-learning/crash-course"},
    {title:"Data Scientist learning path", provider:"Microsoft Learn", detail:"Guided training for data-science skills", url:"https://learn.microsoft.com/en-us/training/career-paths/data-scientist"},
    {title:"Data and analytics courses", provider:"IBM SkillsBuild", detail:"Browse data, analytics and AI learning modules", url:"https://skillsbuild.org/learning-catalog"}
  ],
  "CSE / IT": [
    {title:"Developer learning paths", provider:"Microsoft Learn", detail:"Role-based software-development training", url:"https://learn.microsoft.com/en-us/training/career-paths/developer"},
    {title:"Cisco Networking Academy", provider:"Cisco", detail:"Networking, cybersecurity and programming courses", url:"https://www.netacad.com/"},
    {title:"GitHub Skills", provider:"GitHub", detail:"Short practical lessons for GitHub and development workflows", url:"https://skills.github.com/"},
    {title:"IBM SkillsBuild technology courses", provider:"IBM SkillsBuild", detail:"Browse software, cloud, data and cybersecurity topics", url:"https://skillsbuild.org/learning-catalog"}
  ],
  "ECE": [
    {title:"Electronics and communication courses", provider:"NPTEL", detail:"Search current electronics, communication and embedded-systems courses", url:"https://nptel.ac.in/courses"},
    {title:"Arduino learning resources", provider:"Arduino", detail:"Learn microcontrollers, sensors and embedded prototyping", url:"https://docs.arduino.cc/learn/"},
    {title:"MATLAB Onramp", provider:"MathWorks", detail:"Start learning MATLAB for engineering calculations", url:"https://matlabacademy.mathworks.com/"}
  ],
  "EEE": [
    {title:"Electrical engineering courses", provider:"NPTEL", detail:"Search current power, electrical-machines and control courses", url:"https://nptel.ac.in/courses"},
    {title:"MATLAB Onramp", provider:"MathWorks", detail:"Learn MATLAB basics used in engineering and control", url:"https://matlabacademy.mathworks.com/"},
    {title:"PLC and automation learning", provider:"Siemens SCE", detail:"Learning resources for industrial automation; check availability", url:"https://www.siemens.com/global/en/company/sustainability/education/sce.html"}
  ],
  "Mechanical": [
    {title:"Mechanical engineering courses", provider:"NPTEL", detail:"Search current design, manufacturing, thermal and robotics courses", url:"https://nptel.ac.in/courses"},
    {title:"SOLIDWORKS training resources", provider:"SOLIDWORKS", detail:"Explore CAD and product-design learning resources", url:"https://my.solidworks.com/training"},
    {title:"Autodesk learning", provider:"Autodesk", detail:"Browse CAD, design and engineering learning resources", url:"https://www.autodesk.com/learn"}
  ],
  "Civil": [
    {title:"Civil engineering courses", provider:"NPTEL", detail:"Search current structural, construction and transportation courses", url:"https://nptel.ac.in/courses"},
    {title:"Autodesk learning", provider:"Autodesk", detail:"Browse design and BIM learning resources", url:"https://www.autodesk.com/learn"},
    {title:"Autodesk Revit learning", provider:"Autodesk", detail:"Explore Revit and building-information-modelling tutorials", url:"https://www.autodesk.com/learn/ondemand/collection/revit"}
  ]
};

const freeCourseResources = [
  {title:"Skill India Digital Hub — free courses", provider:"Skill India / NSDC", detail:"Browse free courses by skill and sector. Check each course page for assessment and certificate rules.", url:"https://www.skillindiadigital.gov.in/free-online-courses/", domains:["Data Science", "CSE / IT", "ECE", "EEE", "Mechanical", "Civil"]},
  {title:"SWAYAM — free course catalogue", provider:"Government of India", detail:"Course learning is free. The optional proctored certificate exam may have a fee; check each course page.", url:"https://swayam.gov.in/", domains:["Data Science", "CSE / IT", "ECE", "EEE", "Mechanical", "Civil"]},
  {title:"Kaggle Learn — all micro-courses", provider:"Kaggle", detail:"Free practical lessons in Python, pandas, SQL, data visualization and machine learning.", url:"https://www.kaggle.com/learn/", domains:["Data Science", "CSE / IT"]},
  {title:"Kaggle: Python", provider:"Kaggle Learn", detail:"Free Python lessons and exercises.", url:"https://www.kaggle.com/learn/python", domains:["Data Science", "CSE / IT"]},
  {title:"Kaggle: Pandas", provider:"Kaggle Learn", detail:"Free practice cleaning and exploring tabular data with pandas.", url:"https://www.kaggle.com/learn/pandas", domains:["Data Science"]},
  {title:"Kaggle: Intro to SQL", provider:"Kaggle Learn", detail:"Free beginner SQL lessons and exercises.", url:"https://www.kaggle.com/learn/intro-to-sql", domains:["Data Science", "CSE / IT"]},
  {title:"Kaggle: Intro to Machine Learning", provider:"Kaggle Learn", detail:"Free practical introduction to machine learning.", url:"https://www.kaggle.com/learn/intro-to-machine-learning", domains:["Data Science"]},
  {title:"Kaggle: Intermediate Machine Learning", provider:"Kaggle Learn", detail:"Free follow-on lessons for building better ML models.", url:"https://www.kaggle.com/learn/intermediate-machine-learning", domains:["Data Science"]},
  {title:"IBM SkillsBuild — free technology courses", provider:"IBM SkillsBuild", detail:"Free learning modules in data, AI, cybersecurity and technology. Check the course page for credential requirements.", url:"https://skillsbuild.org/learning-catalog", domains:["Data Science", "CSE / IT"]},
  {title:"Microsoft Learn — free training", provider:"Microsoft Learn", detail:"Self-paced modules and role-based paths; optional certification exams may have separate fees.", url:"https://learn.microsoft.com/training/", domains:["Data Science", "CSE / IT", "ECE", "EEE"]}
];
function getCareerDomain(role) {
  for (const [domain, roles] of Object.entries(engineeringJobs)) {
    if (Object.prototype.hasOwnProperty.call(roles, role)) return domain;
  }
  return "Data Science";
}

function getDomainSkills(domain) {
  const roles = engineeringJobs[domain] || {};
  return [...new Set(Object.values(roles).flat())];
}
function yearLabel(year) {
  return ({"1":"1st year", "2":"2nd year", "3":"3rd year", "4":"4th year / Final year"})[String(year)] || "1st year";
}

function getYearSkillPlan(role, year) {
  const domain = getCareerDomain(role);
  const required = getRoleSkills(role);
  const plans = {
    "Data Science": {
      "1":["Python programming basics", "Mathematics and statistics foundations", "Excel or spreadsheet basics", "Git and regular practice"],
      "2":["SQL queries", "Pandas and data cleaning", "Exploratory data analysis", "Charts and explaining findings"],
      "3":["Machine-learning fundamentals", "Model evaluation and avoiding data leakage", "Build two domain projects", "Start applying for beginner internships"],
      "4":["Advanced skills for " + role, "Complete a portfolio-ready end-to-end project", "Practice interviews and resume writing", "Apply to role-matched internships and graduate jobs"]
    },
    "CSE / IT": {
      "1":["Programming fundamentals", "Problem solving and basic data structures", "Git and GitHub basics", "Computer and web fundamentals"],
      "2":["Build a small application", "SQL and APIs", "Testing and debugging", "Practice data structures and algorithms"],
      "3":["Specialize toward " + role, "Build two portfolio projects", "Learn deployment and collaboration", "Start applying for internships"],
      "4":["Role-specific advanced skills", "System design or role-focused interviews", "Polish GitHub and resume", "Apply to internships and graduate jobs"]
    }
  };
  const genericPlan = {
    "1":["Core concepts in " + domain, "Mathematics and problem solving", "Learn the basic tools used in the field", "Keep notes and practice weekly"],
    "2":["Build fundamentals for " + role, "Practice with relevant software or lab tools", "Complete a small guided project", "Document your work"],
    "3":["Improve role-specific skills: " + required.slice(0, 3).join(", "), "Complete two practical projects", "Learn safety and professional standards for your field", "Start applying for internships"],
    "4":["Advanced skills for " + role, "Create a final-year portfolio or capstone", "Practice interviews and resume writing", "Apply to internships and graduate jobs"]
  };
  return (plans[domain] || genericPlan)[String(year)] || genericPlan["1"];
}

function renderCoursesPage() {
  const domain = getCareerDomain(careerGoal);
  const domainCourses = courseCatalog[domain] || courseCatalog["Data Science"];
  const freeCourses = freeCourseResources.filter(course => course.domains.includes(domain));
  const courses = [...domainCourses, ...freeCourses];
  document.getElementById("page-content").innerHTML = `
    <div class="card">
      <h3>Online courses for ${escapeHTML(domain)}</h3>
      <p>Suggested for your goal: ${escapeHTML(careerGoal)} · ${escapeHTML(yearLabel(studyYear))}</p>
      <p>Choose courses that fit your current skill level. Course access, fees and certificates are controlled by each provider.</p>
    </div>
    <div class="grid">
      ${courses.map(course => `
        <div class="card">
          <h3>${escapeHTML(course.title)}</h3>
          <p><b>Provider:</b> ${escapeHTML(course.provider)}</p>
          <p>${escapeHTML(course.detail)}</p>
          <p><b>Cost:</b> Free learning resource; check the provider for any optional exam or certificate fees.</p>
          <a href="${escapeHTML(course.url)}" target="_blank" rel="noopener">Open course resource</a>
        </div>
      `).join("")}
    </div>
  `;
}

function domainRolesFor(role) {
  return Object.keys(engineeringJobs[getCareerDomain(role)] || {});
}

function getInternshipCompanies() {
  const roles = domainRolesFor(careerGoal);
  const matches = Object.entries(companyProfiles).filter(([, company]) =>
    company.roles.some(role => roles.includes(role))
  );
  return matches.length ? matches : Object.entries(companyProfiles);
}

function renderInternshipsPage() {
  const domain = getCareerDomain(careerGoal);
  const matchingCompanies = getInternshipCompanies();
  const companyOptions = matchingCompanies.map(([name]) => `<option>${escapeHTML(name)}</option>`).join("");
  const internshipPlatforms = [
    {name:"AICTE National Internship Portal", detail:"Government portal with verified internship postings. Student registration and use are free; check the stipend and eligibility on each posting.", url:"https://internship.aicte-india.org/internships"},
    {name:"Unstop", detail:"Search internships, challenges and student opportunities by domain. Verify the employer, stipend, duration and fees for each listing.", url:"https://unstop.com/internship-portal"},
    {name:"Internshala", detail:"Search internships by profile and location. Student applications are free according to its terms; check each employer and offer.", url:"https://internshala.com/internships/"},
    {name:"Upstox Careers", detail:"Official company openings. Internship roles may not always be available; check current listings.", url:"https://upstox.com/careers/"}
  ];
  document.getElementById("page-content").innerHTML = `
    <div class="card">
      <h3>${escapeHTML(domain)} internships</h3>
      <p>Recommended for ${escapeHTML(careerGoal)} · ${escapeHTML(yearLabel(studyYear))}</p>
      <p>Openings change. Check each listing for the actual employer, role, eligibility, location, stipend and application conditions.</p>
    </div>
    <div class="grid">
      ${internshipPlatforms.map(platform => `
        <div class="card">
          <h3>${escapeHTML(platform.name)}</h3>
          <p>${escapeHTML(platform.detail)}</p>
          <a href="${escapeHTML(platform.url)}" target="_blank" rel="noopener">Search ${escapeHTML(platform.name)}</a>
        </div>
      `).join("")}
    </div>
    <div class="card">
      <h3>Company career pages related to ${escapeHTML(domain)}</h3>
      <p>These are official company links, not confirmation that an internship is open right now.</p>
    </div>
    <div class="grid">
      ${matchingCompanies.map(([name, company]) => `
        <div class="card">
          <h3>${escapeHTML(name)}</h3>
          <p>Related work: ${escapeHTML(company.roles.filter(role => domainRolesFor(careerGoal).includes(role)).join(", ") || "Check the careers page for relevant internships")}</p>
          <a href="${escapeHTML(company.url)}" target="_blank" rel="noopener">Check ${escapeHTML(name)} careers</a>
        </div>
      `).join("")}
    </div>
    <div class="card">
      <p><b>Safety:</b> A free application does not mean the internship is paid. Never pay a recruiter for selection or placement; verify the organisation and offer using its official contact details.</p>
    </div>
    <div class="card">
      <h3>Completed an internship?</h3>
      <p>Record a completed internship below to create a CareerAI completion record. This website cannot verify your work or issue a certificate on behalf of the employer.</p>
      <label>Company</label>
      <select id="internshipCompanyInput">${companyOptions}</select>
      <label>Internship role</label>
      <input id="internshipRoleInput" value="${escapeHTML(careerGoal)}">
      <label>Completion date</label>
      <input id="internshipDateInput" type="date">
      <p><label><input id="internshipAttest" type="checkbox"> I confirm that I completed this internship.</label></p>
      <button onclick="recordInternshipCompletion()">Create my CareerAI certificate</button>
    </div>
  `;
}

function recordInternshipCompletion() {
  const company = document.getElementById("internshipCompanyInput").value;
  const role = document.getElementById("internshipRoleInput").value.trim();
  const completionDate = document.getElementById("internshipDateInput").value;
  const confirmed = document.getElementById("internshipAttest").checked;
  if (!role || !completionDate || !confirmed) {
    alert("Enter the internship role and completion date, then confirm completion.");
    return;
  }
  internshipRecords.push({
    id: "CA-" + Date.now(),
    student: studentName,
    studyYear: yearLabel(studyYear),
    company,
    role,
    completionDate,
    issuedDate: new Date().toISOString().slice(0, 10)
  });
  localStorage.setItem("careerInternships", JSON.stringify(internshipRecords));
  showPage("My Certificates");
}

function renderCertificatesPage() {
  const content = document.getElementById("page-content");
  content.innerHTML = `
    <div class="card">
      <h3>Certificate model / sample preview</h3>
      <p>This is how your CareerAI completion record will look after you submit your internship details.</p>
    </div>
    <div class="card certificate" style="border:8px double #3156a3;padding:32px;text-align:center;background:#fffdf6;max-width:900px;margin:16px auto">
      <p style="letter-spacing:3px;color:#3156a3"><b>CAREERAI · LEARNING PLATFORM</b></p>
      <h2 style="font-size:30px;color:#17233f">Certificate of Internship Completion</h2>
      <p>This certificate is presented to</p>
      <h2 style="font-size:28px;color:#3156a3">${escapeHTML(studentName)}</h2>
      <p>for reporting completion of an internship</p>
      <h3>${escapeHTML(careerGoal)} Intern</h3>
      <p>Academic year: <b>${escapeHTML(yearLabel(studyYear))}</b></p>
      <p>at <b>[Company Name]</b></p>
      <p>Completion date: [Date] &nbsp; · &nbsp; Record ID: [Generated after submission]</p>
      <hr style="max-width:240px;margin:28px auto 8px">
      <p><small>CareerAI self-reported completion record · Not issued by the internship company</small></p>
      <p><b>SAMPLE PREVIEW</b></p>
    </div>
    ${internshipRecords.length ? `
      <div class="card">
        <h3>My internship completion records</h3>
        <p>These are CareerAI self-reported records, not certificates from the listed employers.</p>
      </div>
    ${internshipRecords.map((record, index) => `
      <div class="card certificate" id="certificate-${index}">
        <p><b>CAREERAI · COMPLETION RECORD</b></p>
        <h2>Internship Completion Certificate</h2>
        <p>This records that <b>${escapeHTML(record.student)}</b> reported completing the internship</p>
        <h3>${escapeHTML(record.role)}</h3>
        <p>Academic year: <b>${escapeHTML(record.studyYear || "Not recorded")}</b></p>
        <p>at <b>${escapeHTML(record.company)}</b></p>
        <p>Completion date: ${escapeHTML(record.completionDate)} · Record ID: ${escapeHTML(record.id)}</p>
        <p><small>Issued by CareerAI. This is not an employer-issued certificate.</small></p>
        <button onclick="printCareerAICertificate(${index})">Print / Save as PDF</button>
      </div>
    `).join("")}
    ` : `<div class="card"><h3>No completed internship record yet</h3><p>After completing an internship, enter its details to create your CareerAI record.</p><button onclick="showPage('Internships')">Go to Internships</button></div>`}
  `;
}

function printCareerAICertificate(index) {
  const record = internshipRecords[index];
  if (!record) return;
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Allow pop-ups to print or save the certificate as PDF.");
    return;
  }
  printWindow.document.write(`<!doctype html><html><head><title>CareerAI Certificate</title><style>body{font-family:Arial,sans-serif;padding:50px;color:#17233f}.certificate{border:8px double #3156a3;padding:40px;text-align:center;max-width:850px;margin:auto}h1{color:#3156a3}small{display:block;margin-top:32px}</style></head><body><div class="certificate"><p>CAREERAI · COMPLETION RECORD</p><h1>Internship Completion Certificate</h1><p>This records that</p><h2>${escapeHTML(record.student)}</h2><p>reported completing the internship</p><h2>${escapeHTML(record.role)}</h2><p>Academic year: <b>${escapeHTML(record.studyYear || "Not recorded")}</b></p><p>at <b>${escapeHTML(record.company)}</b></p><p>Completion date: ${escapeHTML(record.completionDate)}</p><p>Record ID: ${escapeHTML(record.id)}</p><small>Issued by CareerAI as a self-reported record. This is not an employer-issued certificate.</small></div><script>window.onload=()=>window.print()<\/script></body></html>`);
  printWindow.document.close();
}

function defaultResumeData() {
  const completedProjects = Object.entries(myProjects)
    .filter(([, project]) => project.completed)
    .map(([id, project]) => {
      const catalogItem = projectCatalog.find(item => item.id === id);
      return catalogItem ? `${catalogItem.name}: ${project.summary || catalogItem.description}` : "";
    }).filter(Boolean);
  const internships = internshipRecords.map(item => `${item.role} — ${item.company} (${item.completionDate})`);
  return {
    name: studentName === "Student" ? "" : studentName,
    email: "",
    phone: "",
    location: "",
    college: "",
    course: "",
    year: yearLabel(studyYear),
    goal: careerGoal,
    summary: `Student interested in ${careerGoal}, building skills through coursework and practical projects.`,
    skills: mySkills.join(", "),
    projects: completedProjects.join("\n"),
    experience: internships.join("\n"),
    linkedin: "",
    portfolio: ""
  };
}

function renderResumeBuilder() {
  const content = document.getElementById("page-content");
  let savedData = null;
  try { savedData = JSON.parse(localStorage.getItem("careerResumeProfile") || "null"); } catch (_) {}
  const data = savedData || defaultResumeData();
  content.innerHTML = `
    <div class="card resume-builder-card">
      <h3>Build your student resume</h3>
      <p>Fill in your details. Your profile, skills, submitted projects and internship records are used to prefill a first draft. Review everything before using it.</p>
      <form onsubmit="saveResumeProfile(event)" class="resume-form">
        <label>Full name<input id="resumeName" required value="${escapeHTML(data.name)}"></label>
        <label>Email<input id="resumeEmail" type="email" required value="${escapeHTML(data.email)}"></label>
        <label>Phone<input id="resumePhone" type="tel" value="${escapeHTML(data.phone)}"></label>
        <label>City / Location<input id="resumeLocation" value="${escapeHTML(data.location)}"></label>
        <label>College / University<input id="resumeCollege" value="${escapeHTML(data.college)}"></label>
        <label>Degree / Course<input id="resumeCourse" value="${escapeHTML(data.course)}"></label>
        <label>Current study year<input id="resumeYear" value="${escapeHTML(data.year)}"></label>
        <label>Career goal<input id="resumeGoal" value="${escapeHTML(data.goal)}"></label>
        <label>Short profile summary<textarea id="resumeSummary" rows="3">${escapeHTML(data.summary)}</textarea></label>
        <label>Skills (comma separated)<textarea id="resumeSkills" rows="3">${escapeHTML(data.skills)}</textarea></label>
        <label>Projects (one per line)<textarea id="resumeProjects" rows="4" placeholder="Project name — what you built">${escapeHTML(data.projects)}</textarea></label>
        <label>Internship / experience (one per line)<textarea id="resumeExperience" rows="3">${escapeHTML(data.experience)}</textarea></label>
        <label>LinkedIn profile link<input id="resumeLinkedIn" type="url" value="${escapeHTML(data.linkedin)}"></label>
        <label>GitHub / Portfolio link<input id="resumePortfolio" type="url" value="${escapeHTML(data.portfolio)}"></label>
        <button type="submit">Save details and create preview</button>
      </form>
      <p><small>Your resume details are stored in this browser on this device.</small></p>
    </div>
    ${savedData ? renderResumePreview(savedData) : `<div class="card"><p>Complete the form and select <b>Save details and create preview</b> to see your resume here.</p></div>`}
  `;
}

function saveResumeProfile(event) {
  event.preventDefault();
  const ids = {
    name:"resumeName", email:"resumeEmail", phone:"resumePhone", location:"resumeLocation",
    college:"resumeCollege", course:"resumeCourse", year:"resumeYear", goal:"resumeGoal",
    summary:"resumeSummary", skills:"resumeSkills", projects:"resumeProjects",
    experience:"resumeExperience", linkedin:"resumeLinkedIn", portfolio:"resumePortfolio"
  };
  const data = Object.fromEntries(Object.entries(ids).map(([key,id]) => [key, document.getElementById(id).value.trim()]));
  localStorage.setItem("careerResumeProfile", JSON.stringify(data));
  studentName = data.name || studentName;
  localStorage.setItem("careerName", studentName);
  renderResumeBuilder();
}

function renderResumePreview(data) {
  const lines = value => (value || "").split("\n").map(item => item.trim()).filter(Boolean);
  const webLink = value => {
    try {
      const url = new URL(value);
      return ["http:", "https:"].includes(url.protocol) ? escapeHTML(url.href) : "";
    } catch (_) { return ""; }
  };
  const skillItems = (data.skills || "").split(",").map(item => item.trim()).filter(Boolean);
  const contact = [data.email, data.phone, data.location].filter(Boolean).map(escapeHTML).join(" · ");
  const links = [
    webLink(data.linkedin) ? `<a href="${webLink(data.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>` : "",
    webLink(data.portfolio) ? `<a href="${webLink(data.portfolio)}" target="_blank" rel="noopener">GitHub / Portfolio</a>` : ""
  ].filter(Boolean).join(" · ");
  return `<section class="resume-preview-wrap">
    <div class="resume-preview" id="studentResumePreview">
      <header class="resume-preview-header"><h1>${escapeHTML(data.name)}</h1><p>${contact}</p><p>${links}</p></header>
      ${data.summary ? `<section><h2>Profile</h2><p>${escapeHTML(data.summary)}</p></section>` : ""}
      ${(data.course || data.college) ? `<section><h2>Education</h2><p><b>${escapeHTML(data.course)}</b>${data.college ? ` · ${escapeHTML(data.college)}` : ""}</p><p>${escapeHTML(data.year || "")}</p></section>` : ""}
      ${skillItems.length ? `<section><h2>Skills</h2><p>${skillItems.map(escapeHTML).join(" · ")}</p></section>` : ""}
      ${lines(data.projects).length ? `<section><h2>Projects</h2><ul>${lines(data.projects).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></section>` : ""}
      ${lines(data.experience).length ? `<section><h2>Internship / Experience</h2><ul>${lines(data.experience).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></section>` : ""}
    </div>
    <button onclick="printStudentResume()">Print / Save resume as PDF</button>
  </section>`;
}

function printStudentResume() {
  let data;
  try { data = JSON.parse(localStorage.getItem("careerResumeProfile") || "null"); } catch (_) {}
  if (!data) return;
  const printWindow = window.open("", "_blank");
  if (!printWindow) { alert("Allow pop-ups to print or save your resume as PDF."); return; }
  printWindow.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${escapeHTML(data.name)} - Resume</title><style>body{font-family:Arial,sans-serif;color:#26372f;margin:0;padding:32px}.resume{max-width:850px;margin:auto}.head{border-bottom:3px solid #5d9275;padding-bottom:14px}.head h1{color:#315b46;margin-bottom:6px}h2{font-size:16px;color:#315b46;border-bottom:1px solid #dce6dc;padding-bottom:5px;margin-top:22px}p,li{line-height:1.5;font-size:13px}ul{padding-left:20px}@media print{body{padding:0}}</style></head><body><main class="resume"><header class="head"><h1>${escapeHTML(data.name)}</h1><p>${[data.email,data.phone,data.location].filter(Boolean).map(escapeHTML).join(" · ")}</p><p>${[data.linkedin,data.portfolio].filter(Boolean).map(escapeHTML).join(" · ")}</p></header>${data.summary?`<section><h2>Profile</h2><p>${escapeHTML(data.summary)}</p></section>`:""}${(data.course||data.college)?`<section><h2>Education</h2><p><b>${escapeHTML(data.course)}</b> ${escapeHTML(data.college)}</p><p>${escapeHTML(data.year)}</p></section>`:""}${data.skills?`<section><h2>Skills</h2><p>${escapeHTML(data.skills.split(",").map(s=>s.trim()).filter(Boolean).join(" · "))}</p></section>`:""}${data.projects?`<section><h2>Projects</h2><ul>${data.projects.split("\n").map(s=>s.trim()).filter(Boolean).map(s=>`<li>${escapeHTML(s)}</li>`).join("")}</ul></section>`:""}${data.experience?`<section><h2>Internship / Experience</h2><ul>${data.experience.split("\n").map(s=>s.trim()).filter(Boolean).map(s=>`<li>${escapeHTML(s)}</li>`).join("")}</ul></section>`:""}</main><script>window.onload=()=>window.print()<\/script></body></html>`);
  printWindow.document.close();
}

function addCareerMenuButtons() {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;
  const items = [
    ["internshipsMenuButton", "Internships", "Internships"],
    ["coursesMenuButton", "Online Courses", "Online Courses"],
    ["certificatesMenuButton", "My Certificates", "My Certificates"],
    ["resumeBuilderMenuButton", "Resume Builder", "Resume Builder"]
  ];
  items.forEach(([id, label, page]) => {
    if (document.getElementById(id)) return;
    const button = document.createElement("button");
    button.id = id;
    button.textContent = label;
    button.onclick = () => showPage(page);
    sidebar.appendChild(button);
  });
}
function renderCompanyDetails() {
  const select = document.getElementById("companySelect");
  const box = document.getElementById("companyDetails");
  if (!select || !box) return;

  const name = select.value;
  const company = companyProfiles[name];
  if (!company) {
    box.innerHTML = `<p>Company information is not available yet.</p>`;
    return;
  }

  const roleCards = company.roles.map(role => {
    const skills = getRoleSkills(role);
    return `<li><b>${escapeHTML(role)}</b>${skills.length ? ` — skills to start with: ${skills.map(escapeHTML).join(", ")}` : ""}</li>`;
  }).join("");

  box.innerHTML = `
    <div class="card">
      <h2>${escapeHTML(name)}</h2>
      <p><b>Head office:</b> ${escapeHTML(company.hq)}</p>
      <p><b>What the company does:</b> ${escapeHTML(company.about)}</p>
      <p><b>Work areas:</b> ${escapeHTML(company.focus)}</p>
      <h3>Example jobs to explore</h3>
      <p><small>These are example roles, not a live vacancy list. Use the official careers link to check current openings.</small></p>
      <ul>${roleCards}</ul>
      <h3>Pay and offers</h3>
      <p><b>Maximum salary:</b> The company does not publish one official maximum salary for all India jobs. Pay, bonus and benefits vary by role, level, location and offer. Check the individual vacancy and written offer.</p>
      <p><b>Benefits/offers:</b> They vary by role and location; the specific job posting lists applicable benefits.</p>
      <h3>Positive points to consider</h3>
      <p>${escapeHTML(company.pros)}</p>
      <h3>Things to check before accepting</h3>
      <p>${escapeHTML(company.checks)}</p>
      <h3>How to prepare</h3>
      <p><b>Skills:</b> ${escapeHTML(company.skills)}</p>
      <p><b>Apply and prepare:</b> ${escapeHTML(company.steps)}</p>
      <p><a href="${escapeHTML(company.url)}" target="_blank" rel="noopener">Open ${escapeHTML(name)} official careers page</a></p>
    </div>
  `;
}
function chooseProject(id) {
  myProjects[id] = myProjects[id] || {};
  myProjects[id].chosen = true;
  saveProjects();
  showPage("Projects");
}

function submitProject(event, id) {
  event.preventDefault();
  const projectUrl = document.getElementById(`project-url-${id}`).value.trim();
  const summary = document.getElementById(`project-summary-${id}`).value.trim();
  let parsedUrl;
  try { parsedUrl = new URL(projectUrl); } catch (_) {}
  if (!parsedUrl || !["http:", "https:"].includes(parsedUrl.protocol)) {
    alert("Please enter a valid GitHub or website link starting with https://");
    return;
  }
  if (summary.length < 20) {
    alert("Please describe what you built in at least 20 characters.");
    return;
  }
  myProjects[id] = {
    ...myProjects[id],
    chosen: true,
    completed: true,
    projectUrl,
    summary,
    submittedAt: new Date().toISOString()
  };
  saveProjects();
  addQuizMenuButton();
  showPage("Projects");
}

function editProjectSubmission(id) {
  myProjects[id] = {...myProjects[id], completed: false};
  saveProjects();
  showPage("Projects");
}

function saveProjects() {
  localStorage.setItem("careerProjects", JSON.stringify(myProjects));
}

function chosenProjectCount() {
  return Object.values(myProjects).filter(project => project.chosen).length;
}

function completedProjectCount() {
  return Object.values(myProjects).filter(project => project.completed).length;
}

function quizIsUnlocked() {
  return completedProjectCount() >= 3;
}

function addQuizMenuButton() {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar || !quizIsUnlocked()) return;

  if (!document.getElementById("quizMenuButton")) {
    const button = document.createElement("button");
    button.id = "quizMenuButton";
    button.textContent = "Practice & Quiz";
    button.onclick = () => showPage("Practice & Quiz");
    sidebar.appendChild(button);
  }
  if (!document.getElementById("codingPracticeMenuButton")) {
    const button = document.createElement("button");
    button.id = "codingPracticeMenuButton";
    button.textContent = "Coding Practice";
    button.onclick = () => showPage("Coding Practice");
    sidebar.appendChild(button);
  }
}

function showCodingPractice() {
  const content = document.getElementById("page-content");
  if (!selectedPracticeLanguage) {
    content.innerHTML = `<div class="card"><h3>Choose a language to practice</h3>
      <button onclick="selectPracticeLanguage('C')">C</button>
      <button onclick="selectPracticeLanguage('C++')">C++</button>
      <button onclick="selectPracticeLanguage('Java')">Java</button>
      <p>Write programs here, save your draft, then run it in VS Code with your language compiler.</p>
      <button onclick="showPage('Practice & Quiz')">Go to Quiz</button></div>`;
    return;
  }
  if (!selectedPracticeLevel) {
    content.innerHTML = `<div class="card"><h3>${escapeHTML(selectedPracticeLanguage)} — choose a level</h3>
      ${["Beginner","Intermediate","Advanced"].map(level => `<button onclick="selectPracticeLevel('${level}')">${level}</button>`).join("")}
      <button onclick="selectPracticeLanguage('')">Choose another language</button></div>`;
    return;
  }
  const exercises = codingChallenges[selectedPracticeLanguage][selectedPracticeLevel];
  if (selectedPracticeIndex < 0) {
    content.innerHTML = `<div class="card"><h3>${escapeHTML(selectedPracticeLanguage)} — ${escapeHTML(selectedPracticeLevel)} Programs</h3>
      ${exercises.map((exercise, index) => `<div class="card"><h3>${escapeHTML(exercise.title)}</h3>
        <p>${escapeHTML(exercise.task)}</p><button onclick="selectPracticeExercise(${index})">Practice this program</button></div>`).join("")}
      <button onclick="selectPracticeLevel('')">Back to levels</button></div>`;
    return;
  }
  const exercise = exercises[selectedPracticeIndex];
  const questions = getPracticeQuestions(exercise);
  const question = questions[selectedPracticeQuestionIndex];
  const draftKey = `careerCode_${selectedPracticeLanguage}_${selectedPracticeLevel}_${selectedPracticeIndex}_${selectedPracticeQuestionIndex}`;
  const savedCode = localStorage.getItem(draftKey) || exercise.starter;
  content.innerHTML = `<div class="card"><h3>${escapeHTML(exercise.title)} — Question ${selectedPracticeQuestionIndex + 1} of 5</h3>
    <p>${escapeHTML(question.task)}</p>${question.sample ? `<pre>${escapeHTML(question.sample)}</pre>` : ""}
    <label for="practiceCode">Your code:</label>
    <textarea id="practiceCode" rows="14" spellcheck="false" oninput="savePracticeDraft(true)" style="width:100%;font-family:monospace">${escapeHTML(savedCode)}</textarea>
    <p><button onclick="savePracticeDraft()">Save my code</button>
    <button onclick="showPracticeHint()">Show hint</button>
    ${question.solution ? `<button onclick="showPracticeSolution()">Show solution</button>` : ""}
    <button onclick="selectPracticeQuestion(${Math.max(0, selectedPracticeQuestionIndex - 1)})" ${selectedPracticeQuestionIndex === 0 ? "disabled" : ""}>Previous</button>
    <button onclick="selectPracticeQuestion(${Math.min(4, selectedPracticeQuestionIndex + 1)})" ${selectedPracticeQuestionIndex === 4 ? "disabled" : ""}>Next question</button>
    <button onclick="selectPracticeExercise(-1)">Back to programs</button></p>
    <p>Question ${selectedPracticeQuestionIndex + 1} / 5</p>
    <p id="practiceMessage" aria-live="polite">Drafts save in this browser. Copy your code to VS Code to compile and run it.</p>
    <div id="practiceHelp"></div></div>`;
}

function getPracticeQuestions(exercise) {
  return [
    {task: exercise.task, sample: exercise.sample, hint: exercise.hint, solution: exercise.solution},
    {task: `Question 2 — ${exercise.title}: Write a reusable function or method for this task. Call it with at least three different inputs and print each result.`, hint: "Move the main logic into a function/method. Test normal, small, and boundary values."},
    {task: `Question 3 — ${exercise.title}: Extend the program to process a collection of 5 values/items, not just one. Show the result for every item.`, hint: "Store or read the values in a loop, then apply the same core logic to each one."},
    {task: `Question 4 — ${exercise.title}: Handle relevant edge cases (such as empty input, one item, zero, negative values, duplicates, or no solution). Print a clear result for each case.`, hint: "List the edge cases that make sense for this problem before coding, then test each one."},
    {task: `Question 5 — ${exercise.title}: Build a version that can handle a much larger input efficiently. Test it with a new example and write the time and space complexity as comments.`, hint: "Choose an efficient data structure or algorithm, then explain how work grows as input size increases."}
  ];
}

function selectPracticeLanguage(language) {
  selectedPracticeLanguage = language;
  selectedPracticeLevel = "";
  selectedPracticeIndex = -1;
  selectedPracticeQuestionIndex = 0;
  showCodingPractice();
}
function selectPracticeLevel(level) {
  selectedPracticeLevel = level;
  selectedPracticeIndex = -1;
  selectedPracticeQuestionIndex = 0;
  showCodingPractice();
}
function selectPracticeExercise(index) {
  selectedPracticeIndex = index;
  selectedPracticeQuestionIndex = 0;
  showCodingPractice();
}
function selectPracticeQuestion(index) {
  selectedPracticeQuestionIndex = index;
  showCodingPractice();
}
function savePracticeDraft(silent = false) {
  const key = `careerCode_${selectedPracticeLanguage}_${selectedPracticeLevel}_${selectedPracticeIndex}_${selectedPracticeQuestionIndex}`;
  localStorage.setItem(key, document.getElementById("practiceCode").value);
  if (!silent) document.getElementById("practiceMessage").textContent = "Code draft saved in this browser.";
}
function showPracticeHint() {
  const exercise = codingChallenges[selectedPracticeLanguage][selectedPracticeLevel][selectedPracticeIndex];
  const question = getPracticeQuestions(exercise)[selectedPracticeQuestionIndex];
  document.getElementById("practiceHelp").innerHTML = `<p><b>Hint:</b> ${escapeHTML(question.hint)}</p>`;
}
function showPracticeSolution() {
  const exercise = codingChallenges[selectedPracticeLanguage][selectedPracticeLevel][selectedPracticeIndex];
  document.getElementById("practiceHelp").innerHTML = `<p><b>Example solution / approach:</b></p><pre>${escapeHTML(exercise.solution)}</pre>`;
}

function startQuiz(language = "", level = "") {
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  quizReview = [];
  selectedQuizLanguage = language;
  selectedQuizLevel = level;
  activeQuizQuestions = level
    ? shuffleArray(languageQuizQuestions[language].filter(item => item.level === level))
        .slice(0, 4)
        .map(item => ({...item, choices: shuffleArray(item.choices)}))
    : [];
  showPage("Practice & Quiz");
}

function shuffleArray(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function showQuiz() {
  const content = document.getElementById("page-content");
  if (!selectedQuizLanguage) {
    content.innerHTML = `
      <div class="card quiz-card">
        <h3>Choose a programming language</h3>
        <p>Beginner la start panni, apram Intermediate and Advanced level choose pannunga. Each start-la questions shuffle aagum.</p>
        <button onclick="startQuiz('C')">C Quiz</button>
        <button onclick="startQuiz('C++')">C++ Quiz</button>
        <button onclick="startQuiz('Java')">Java Quiz</button>
      </div>
    `;
    return;
  }

  if (!selectedQuizLevel) {
    content.innerHTML = `
      <div class="card quiz-card">
        <h3>${escapeHTML(selectedQuizLanguage)} — Select level</h3>
        <p>Start with Beginner. You can practice any level.</p>
        <button onclick="startQuiz('${escapeHTML(selectedQuizLanguage)}','Beginner')">Beginner</button>
        <button onclick="startQuiz('${escapeHTML(selectedQuizLanguage)}','Intermediate')">Intermediate</button>
        <button onclick="startQuiz('${escapeHTML(selectedQuizLanguage)}','Advanced')">Advanced</button>
        <button onclick="startQuiz()">Choose another language</button>
      </div>
    `;
    return;
  }

  const questions = activeQuizQuestions;
  if (quizIndex >= questions.length) {
    content.innerHTML = `
      <div class="card quiz-card">
        <h3>${escapeHTML(selectedQuizLanguage)} ${escapeHTML(selectedQuizLevel)} Quiz completed!</h3>
        <p>Your score: ${quizScore} / ${questions.length}</p>
        <h3>Answer review</h3>
        ${quizReview.map((item, index) => `
          <div class="card">
            <h4>Question ${index + 1}: ${item.correct ? "Correct ✓" : "Wrong ✗"}</h4>
            <p>${escapeHTML(item.question)}</p>
            <p>Your answer: ${escapeHTML(item.selected)}</p>
            <p>Correct answer: ${escapeHTML(item.answer)}</p>
          </div>
        `).join("")}
        <button onclick="startQuiz('${escapeHTML(selectedQuizLanguage)}','${escapeHTML(selectedQuizLevel)}')">Try a new set</button>
        <button onclick="startQuiz('${escapeHTML(selectedQuizLanguage)}')">Choose another level</button>
        <button onclick="startQuiz()">Choose another language</button>
      </div>
    `;
    return;
  }

  const item = questions[quizIndex];
  quizAnswered = false;
  content.innerHTML = `
    <div class="card quiz-card">
      <h3>${escapeHTML(selectedQuizLanguage)} — ${escapeHTML(selectedQuizLevel)}</h3>
      <p>Question ${quizIndex + 1} of ${questions.length}</p>
      <h3>${escapeHTML(item.question)}</h3>
      <div class="quiz-choices">
        ${item.choices.map((choice, index) => `
          <button class="quiz-choice" onclick="answerQuiz(${index})">${escapeHTML(choice)}</button>
        `).join("")}
      </div>
      <p id="quizFeedback" aria-live="polite"></p>
      <button id="nextQuestion" onclick="nextQuizQuestion()" style="display:none">Next question</button>
    </div>
  `;
}

function answerQuiz(choiceIndex) {
  if (quizAnswered) return;
  quizAnswered = true;
  const item = activeQuizQuestions[quizIndex];
  const correct = item.choices[choiceIndex] === item.answer;
  if (correct) quizScore++;
  quizReview.push({
    question: item.question,
    selected: item.choices[choiceIndex],
    answer: item.answer,
    correct
  });
  document.getElementById("quizFeedback").textContent =
    correct ? "Correct! / சரி!" : `Not quite. Correct answer: ${item.answer}`;
  document.getElementById("nextQuestion").style.display = "inline-block";
}

function nextQuizQuestion() {
  if (!quizAnswered) return;
  quizIndex++;
  showQuiz();
}
async function saveProfile() {
  studentName = document.getElementById("nameInput").value.trim() || "Student";
  careerGoal = document.getElementById("goalInput").value;
  studyYear = document.getElementById("studyYearInput").value;

  syncStudentProfileToLocalStorage();
  try {
    await saveStudentProfileToSupabase();
  } catch (error) {
    showProfileSaveError(error);
  }
  showPage("My Profile");
}

async function setCareerGoal(role) {
  careerGoal = role;
  syncStudentProfileToLocalStorage();
  try {
    await saveStudentProfileToSupabase();
  } catch (error) {
    showProfileSaveError(error);
  }
  showPage("My Profile");
}

async function saveSkills() {
  const selected = [...document.querySelectorAll('input[name="skillOption"]:checked')]
    .map(input => input.value);
  const other = document.getElementById("otherSkillsInput").value
    .split(",").map(skill => skill.trim()).filter(Boolean);
  mySkills = [...new Set([...selected, ...other])];
  syncStudentProfileToLocalStorage();
  try {
    await saveStudentProfileToSupabase();
  } catch (error) {
    showProfileSaveError(error);
  }
  showPage("My Skills");
}
function calculateMatch() {
  const company = document.getElementById("companyInput").value;
  const role = document.getElementById("roleInput").value;
  const entered = document.getElementById("matchInput").value
    .split(",").map(skill => skill.trim().toLowerCase()).filter(Boolean);

  const required = getRoleSkills(role);
  const matched = required.filter(skill => entered.includes(skill.toLowerCase()));
  const missing = required.filter(skill => !entered.includes(skill.toLowerCase()));
  const score = required.length ? Math.round(matched.length / required.length * 100) : 0;

  document.getElementById("matchResult").innerHTML = `
    <div class="card">
      <h3>${escapeHTML(company)} · ${escapeHTML(role)}: ${score}% match</h3>
      <p><b>Matched skills:</b> ${matched.map(escapeHTML).join(", ") || "None yet"}</p>
      <p><b>Skills to learn:</b> ${missing.map(escapeHTML).join(", ") || "None"}</p>
    </div>
  `;
}

function analyzeResume() {
  const text = document.getElementById("resumeInput").value.toLowerCase();
  const allSkills = [...new Set(
    Object.values(engineeringJobs).flatMap(branch => Object.values(branch).flat())
  )];
  const found = allSkills.filter(skill => text.includes(skill.toLowerCase()));

  document.getElementById("resumeResult").innerHTML =
    `<p>Skills found: ${found.map(escapeHTML).join(", ") || "None found yet."}</p>`;
}

function getRoleSkills(role) {
  for (const branch of Object.values(engineeringJobs)) {
    if (branch[role]) return branch[role];
  }
  return [];
}

function hasSkill(skill) {
  return mySkills.some(item => item.toLowerCase() === skill.toLowerCase());
}

function getMatchScore(role) {
  const required = getRoleSkills(role);
  if (!required.length) return 0;
  return Math.round(required.filter(hasSkill).length / required.length * 100);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

addQuizMenuButton();

async function restoreSkillOrbitSession() {
  const { data, error } = await skillOrbitSupabase.auth.getSession();
  const user = data?.session?.user;
  if (!error && user) {
    try {
      await loadStudentProfileFromSupabase(user);
    } catch (profileError) {
      showProfileSaveError(profileError);
      studentName = user.user_metadata?.full_name || user.email?.split("@")[0] || "Student";
    }
    localStorage.setItem("skillOrbitUserName", studentName);
    localStorage.setItem("skillOrbitUserEmail", user.email || "");
    enterSkillOrbit();
    showPage("Dashboard");
    return;
  }
  document.getElementById("login-screen").hidden = false;
  document.getElementById("skillorbit-app").hidden = true;
}

restoreSkillOrbitSession();



