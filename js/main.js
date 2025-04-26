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
                description: "Created an Airflow DAG to automate the OpenAI ETL pipeline. Configured PythonOperator and scheduling to run workflows automatically. This project streamlines data processing and ensures consistent, reliable data flow for AI applications.",
                tags: ["Airflow", "ETL", "Python", "Automation"]
            },
            {
                title: "OpenAI API ETL Pipeline",
                description: "Built an ETL pipeline in Python to collect, transform, and store OpenAI prompt-response pairs. Used '.env' and pandas for secure and structured data handling. Saved outputs to CSV for further NLP analysis. GitHub repo available with complete documentation.",
                tags: ["OpenAI", "ETL", "Python", "NLP"]
            },
            {
                title: "Municipality Call Center BI Dashboard",
                description: "Processed 100K+ records with ETL pipelines and real-time analytics. Developed interactive visualizations, improving data-driven decision-making by 30%. Implemented custom KPIs and metrics to track call center performance and customer satisfaction.",
                tags: ["Dashboard", "BI", "ETL", "Analytics"]
            },
            {
                title: "Marketing Analytics Data Engineering",
                description: "Built ETL workflows and dashboards to analyze customer behavior patterns. Implemented data transformations for business intelligence insights. Created predictive models to forecast customer engagement and optimize marketing campaigns.",
                tags: ["Analytics", "ETL", "Marketing", "Data Engineering"]
            },
            {
                title: "Parallel Mandelbrot Set Optimization",
                description: "Accelerated fractal computations using parallel processing techniques. Improved execution speed by 75% with CUDA-based optimizations. Implemented advanced visualization techniques to render high-resolution fractal images with dynamic color mapping.",
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











function populateProjectsData() {
  const projectsGrid = document.querySelector('.projects-grid');
  const projectsData = [ /* your projects */ ];

  projectsData.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    const imageHTML = `<div class="project-img-placeholder"><i class="fas fa-code"></i></div>`;

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

document.addEventListener('DOMContentLoaded', function() {
  // other event listeners...

  populateProjectsData(); 
});


    
}
