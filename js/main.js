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
    title: "Real-time News Aggregation & Sentiment Analysis Pipeline",
    status: "(In Progress)",
    description: "Building a multi-source data pipeline combining Kafka, Airflow, and AWS to ingest, process, and analyze live news and social media data. Applying NLP techniques for sentiment analysis and named entity recognition to extract insights from unstructured text.",
    tags: ["Kafka", "Airflow", "AWS", "NLP", "Data Engineering", "Streaming"]
},
{
    title: "OpenAI API ETL Pipeline",
    description: "Engineered a Python ETL pipeline to extract, transform, and store OpenAI prompt-response pairs for NLP analysis. Integrated dotenv and pandas for secure, structured data handling.",
    tags: ["Python", "OpenAI API", "ETL", "NLP"]
},
{
    title: "Municipality Call Center BI Dashboard",
    description: "Built an interactive Power BI dashboard from 100K+ municipal call records. Applied ETL pipelines and custom KPIs, improving decision-making efficiency by 30%.",
    tags: ["Power BI", "ETL", "SQL", "Data Visualization"]
},
{
    title: "D3.js Data Visualization Library",
    description: "Developed interactive web-based visualizations (bar charts, scatter plots, pie charts) using D3.js. Enhanced storytelling with data through custom visual designs.",
    tags: ["D3.js", "Data Visualization", "JavaScript", "Frontend"]
},        
{
    title: "Fetal Plane Classification with Deep Learning",
    description: "Trained CNN and EfficientNet models on 10K+ ultrasound images to classify fetal planes. Achieved 83% accuracy, applied Grad-CAM for model interpretability.",
    tags: ["Deep Learning", "PyTorch", "Computer Vision", "NLP"]
},
{
    title: "Breast Cancer Detection with ML",
    description: "Developed a Scikit-learn classification model for early cancer detection from biopsy features. Achieved 96% accuracy, presented findings in an academic seminar.",
    tags: ["Machine Learning", "Scikit-learn", "Data Science", "Healthcare"]
},
{
    title: "Fine-tuning BERT for NLP Tasks",
    description: "Fine-tuned the BERT transformer model on domain-specific datasets to improve text classification accuracy. Explored transfer learning in NLP workflows.",
    tags: ["NLP", "BERT", "Transformers", "Deep Learning"]
},
{
    title: "Parallel Mandelbrot Set Optimization",
    description: "Accelerated fractal rendering by 8x using parallel computing (CUDA, OpenMP, MPI). Optimized execution on multi-core systems for high-resolution visualizations.",
    tags: ["HPC", "CUDA", "Parallel Computing", "Optimization"]
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
                        <a href="${project.link}" class="read-more-btn">Read More →</a>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
}
