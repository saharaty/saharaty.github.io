// Main JavaScript file for Sahar Harati's personal website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fetch resume data
    fetch('resume_data.json')
        .then(response => response.json())
        .then(data => {
            populateProjectsData(data);
        })
        .catch(error => console.error('Error loading resume data:', error));
});

// Function to populate projects section
function populateProjectsData(data) {
    // Using the second resume file as it appears more recent and complete
    const resumeData = data["Sahar Harati.pdf"];
    
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        // Define project data with enhanced descriptions and images
const projectsData = [
  {
    title: "Airflow Automation of ETL",
    status: "(In Progress)",
    description: "Automated OpenAI ETL pipeline with Airflow DAGs, PythonOperator, and scheduling to ensure consistent data flow for AI applications.",
    tags: ["Airflow", "ETL", "Python", "Automation"]
  },
  {
    title: "OpenAI API ETL Pipeline",
    description: "Built an ETL pipeline in Python for OpenAI prompt-response pairs. Used dotenv and pandas for structured data handling, stored outputs for NLP analysis.",
    tags: ["OpenAI", "ETL", "Python", "NLP"]
  },
  {
    title: "Municipality Call Center BI Dashboard",
    description: "Processed 100K+ records, developed Power BI dashboards with KPIs to improve decision-making by 30%. Applied ETL and real-time analytics.",
    tags: ["Dashboard", "BI", "ETL", "Analytics"]
  },
  {
    title: "Marketing Analytics Data Engineering",
    description: "Built ETL workflows and dashboards to analyze customer behavior, created predictive models to optimize marketing campaigns.",
    tags: ["Analytics", "ETL", "Marketing", "Data Engineering"]
  },
  {
    title: "Parallel Mandelbrot Set Optimization",
    description: "Accelerated fractal computations with CUDA-based parallel processing. Improved performance by 75% and visualized high-res fractals.",
    tags: ["HPC", "CUDA", "Parallel Computing", "Visualization"]
  }
];

        
        // Create project cards
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            // Create placeholder image if actual image doesn't exist
            const imageHTML = `<div class="project-img-placeholder">
                <i class="fas fa-code"></i>
            </div>`;
            
            projectCard.innerHTML = `
                ${imageHTML}
                <div class="project-info">
                    <h3>${project.title} ${project.status || ''}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }


    
}
