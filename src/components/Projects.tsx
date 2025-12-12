import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Projects</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p><strong>Chronic Kidney Disease Detection</strong> - Chronic Kidney Disease (CKD) is detected through a combination of blood tests, urine tests, and imaging studies that help identify reduced kidney function or signs of kidney damage over time. The primary blood test measures serum creatinine, which is used to calculate the estimated glomerular filtration rate (eGFR); a persistent eGFR below 60 mL/min/1.73m² for at least three months indicates CKD. Urine tests—especially the albumin-to-creatinine ratio (ACR)—detect protein leakage, an early marker of kidney injury that often appears before kidney function declines. A urinalysis can also reveal blood, infections, or abnormal kidney cells. Imaging tests, such as ultrasound, help assess kidney size and structure to identify chronic scarring, blockages, or cysts. In some cases, a biopsy is needed when the cause of kidney disease is unclear. Detecting CKD early allows for timely treatment to slow progression and prevent complications.</p>
          <p><strong>Bank Loan System</strong> — A Bank Loan System is a software application designed to streamline and automate the end-to-end loan management process within financial institutions. It enables banks to efficiently handle loan applications, verify customer eligibility, assess credit risk, calculate interest, and manage EMI schedules. The system securely stores customer and loan data, supports multiple loan types such as personal, home, and business loans, and ensures compliance with banking regulations. By automating approvals, document verification, and repayment tracking, the Bank Loan System minimizes human error, reduces processing time, and enhances customer experience. It also provides dashboards and reports for administrators to monitor overall loan performance and make informed financial decisions.</p>
          <p><strong>Netflix Clone</strong> — A Netflix Clone is a streaming platform replica designed to mimic the core features of Netflix, allowing users to browse, search, and watch movies or TV shows through an intuitive and visually engaging interface. It includes functionalities such as user authentication, personalized content recommendations, dynamic movie categories, and smooth video playback. The system typically integrates APIs like TMDB to fetch real-time movie data and uses responsive UI components to ensure a seamless viewing experience across devices. By recreating essential streaming features and modern UI design patterns, the Netflix Clone showcases skills in frontend development, API integration, and building scalable multimedia-based applications.</p>
          {/* Add more projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
